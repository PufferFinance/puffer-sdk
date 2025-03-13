import {
  Address,
  GetContractReturnType,
  PublicClient,
  WalletClient,
  getContract,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { ERC20PermitHandler } from './erc20-permit-handler';
import { Token } from '../tokens';
import { PufferDepositor } from '../abis/mainnet/PufferDepositor';

/**
 * Handler for the `PufferDepositor` contract exposing methods to
 * interact with the contract.
 */
export class PufferDepositorHandler {
  private viemChain: ViemChain;
  private erc20PermitHandler: ERC20PermitHandler;

  /**
   * Create the handler for the `PufferDepositor` contract exposing
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
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = CONTRACT_ADDRESSES[this.chain].PufferDepositor as Address;
    const abi = PufferDepositor;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Deposit stETH in exchange for pufETH. This doesn't make the
   * transaction but returns two methods namely `transact` and
   * `estimate`.
   *
   * @param walletAddress Wallet address to get the stETH from.
   * @param value Value in wei of the stETH to deposit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public async depositStETH(walletAddress: Address, value: bigint) {
    const { r, s, v, yParity, deadline } = await this.erc20PermitHandler
      .withToken(Token.stETH)
      .getPermitSignature(
        walletAddress,
        CONTRACT_ADDRESSES[this.chain].PufferDepositor as Address,
        value,
      );
    /* istanbul ignore next */
    const permitData = {
      r,
      s,
      v: Number(v ?? yParity),
      deadline,
      amount: value,
    };

    const transact = async () =>
      await this.getContract().write.depositStETH([permitData, walletAddress], {
        account: walletAddress,
        chain: this.viemChain,
      });
    const estimate = async () =>
      await this.getContract().estimateGas.depositStETH(
        [permitData, walletAddress],
        { account: walletAddress },
      );

    return { transact, estimate };
  }

  /**
   * Deposit wstETH in exchange for pufETH. This doesn't make the
   * transaction but returns two methods namely `transact` and
   * `estimate`.
   *
   * @param walletAddress Wallet address to get the stETH from.
   * @param value Value in wei of the wstETH to deposit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public async depositWstETH(walletAddress: Address, value: bigint) {
    const { r, s, v, yParity, deadline } = await this.erc20PermitHandler
      .withToken(Token.wstETH)
      .getPermitSignature(
        walletAddress,
        CONTRACT_ADDRESSES[this.chain].PufferDepositor as Address,
        value,
      );
    /* istanbul ignore next */
    const permitData = {
      r,
      s,
      v: Number(v ?? yParity),
      deadline,
      amount: value,
    };

    const transact = async () =>
      await this.getContract().write.depositWstETH(
        [permitData, walletAddress],
        {
          account: walletAddress,
          chain: this.viemChain,
        },
      );
    const estimate = async () =>
      await this.getContract().estimateGas.depositWstETH(
        [permitData, walletAddress],
        { account: walletAddress },
      );

    return { transact, estimate };
  }
}
