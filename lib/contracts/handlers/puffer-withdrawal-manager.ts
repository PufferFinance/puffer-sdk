import {
  Address,
  getContract,
  GetContractReturnType,
  PublicClient,
  WalletClient,
} from 'viem';
import { CONTRACT_ADDRESSES } from '../addresses';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { ERC20PermitHandler } from './erc20-permit-handler';
import { PUFFER_WITHDRAWAL_MANAGER_ABIS } from '../abis/puffer-withdrawal-manager-abis';
import { Token } from '../tokens';

/**
 * Handler for the `PufferWithdrawalsManager` contract exposing methods to
 * interact with the contract.
 */
export class PufferWithdrawalHandler {
  private viemChain: ViemChain;
  private erc20PermitHandler: ERC20PermitHandler;

  /**
   * Create the handler for the `PufferWithdrawalsManager` contract exposing
   * methods to interact with the contract.
   *
   * @param chain Chain to use for the client.
   * @param walletClient The wallet client to use for wallet
   * interactions.
   * @param publicClient The public client to use for public
   * interactions.
   */
  constructor(
    private chain: Chain,
    private walletClient: WalletClient,
    private publicClient: PublicClient,
  ) {
    this.viemChain = VIEM_CHAINS[chain];
    this.erc20PermitHandler = new ERC20PermitHandler(
      chain,
      walletClient,
      publicClient,
    );
  }

  /**
   * Get the contract.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = CONTRACT_ADDRESSES[this.chain]
      .PufferWithdrawalManager as Address;
    const abi =
      PUFFER_WITHDRAWAL_MANAGER_ABIS[this.chain].PufferWithdrawalManager;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Request a withdrawal of the given amount to the given address, with a permit.
   *
   * @param walletAddress The account address to request the withdrawal for.
   * @param amount The pufETH amount to request the withdrawal for.
   * @returns The transaction hash of the withdrawal.
   */
  public async requestWithdrawal(walletAddress: Address, amount: bigint) {
    const transact = async () =>
      await this.getContract().write.requestWithdrawal(
        [amount, walletAddress],
        {
          account: walletAddress,
          chain: this.viemChain,
        },
      );

    const estimate = async () =>
      await this.getContract().estimateGas.requestWithdrawal(
        [amount, walletAddress],
        { account: walletAddress },
      );

    return { transact, estimate };
  }

  /**
   * Request a withdrawal of the given amount to the given address.
   *
   * @param walletAddress The account address to request the withdrawal for.
   * @param amount The pufETHamount to request the withdrawal for.
   * @returns The transaction hash of the withdrawal.
   */
  public async requestWithdrawalWithPermit(
    walletAddress: Address,
    amount: bigint,
  ) {
    const { r, s, v, yParity, deadline } = await this.erc20PermitHandler
      .withToken(Token.pufETH)
      .getPermitSignature(
        walletAddress,
        CONTRACT_ADDRESSES[this.chain].PufferWithdrawalManager as Address,
        amount,
      );

    /* istanbul ignore next */
    const permitData = {
      r,
      s,
      v: Number(v ?? yParity),
      deadline,
      amount,
    };

    const transact = async () =>
      await this.getContract().write.requestWithdrawalWithPermit(
        [permitData, walletAddress],
        {
          account: walletAddress,
          chain: this.viemChain,
        },
      );

    const estimate = async () =>
      await this.getContract().estimateGas.requestWithdrawalWithPermit(
        [permitData, walletAddress],
        { account: walletAddress },
      );

    return { transact, estimate };
  }

  /**
   * Complete a withdrawal from the queue.
   *
   * @param withdrawalIdx The index of the withdrawal to complete.
   * @returns The transaction hash of the withdrawal.
   */
  public async completeQueueWithdrawal(
    walletAddress: Address,
    withdrawalIdx: bigint,
  ) {
    return await this.getContract().write.completeQueuedWithdrawal(
      [withdrawalIdx],
      {
        account: walletAddress,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Get the withdrawal at the given index.
   *
   * @param withdrawalIdx The index of the withdrawal to get.
   * @returns The withdrawal at the given index.
   */
  public async getWithDrawal(withdrawalIdx: bigint) {
    return await this.getContract().read.getWithdrawal([withdrawalIdx]);
  }
}
