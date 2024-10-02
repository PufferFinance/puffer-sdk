import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { NUCLEUS_TELLER_ABIS } from '../abis/nucleus-teller-abis';
import { Token, TOKENS_ADDRESSES } from '../tokens';

export type DepositWithPermitParams = {
  depositAsset: Address;
  depositAmount: bigint;
  minimumMint: bigint;
  deadline: bigint;
  v: number;
  r: Address;
  s: Address;
};

/**
 * Handler for the `Teller` contract from nucleus.
 */
export class NucleusTellerHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for processing tokens.
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
  }

  /**
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = CONTRACT_ADDRESSES[this.chain].NucleusTeller as Address;
    const abi = NUCLEUS_TELLER_ABIS[this.chain].Teller;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Get the address of the `Accountant` contract.
   *
   * @returns The address of the `Accountant` contract.
   */
  public accountant() {
    return this.getContract().read.accountant();
  }

  /**
   * Get the address of the `BoringVault` contract.
   *
   * @returns The address of the `BoringVault` contract.
   */
  public vault() {
    return this.getContract().read.vault();
  }

  /**
   * Get the share lock period.
   *
   * @returns The share lock period.
   */
  public shareLockPeriod() {
    return this.getContract().read.shareLockPeriod();
  }

  /**
   * Get the share unlock time for the given wallet address.
   *
   * @param walletAddress Address of the wallet.
   * @returns The share unlock time.
   */
  public shareUnlockTime(walletAddress: Address) {
    return this.getContract().read.shareUnlockTime([walletAddress]);
  }

  /**
   * Get the paused state of the contract.
   *
   * @returns The paused state of the contract.
   */
  public isPaused() {
    return this.getContract().read.isPaused();
  }

  /**
   * Deposit the given token for staking.
   *
   * @param walletAddress Address of the caller of the transaction.
   * @param token Token to deposit.
   * @param amount Amount of the token to deposit.
   * @param minimumMint Minimum amount of shares to mint.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction with the given value.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public deposit(
    walletAddress: Address,
    token: Token,
    amount: bigint,
    minimumMint: bigint,
  ) {
    const tokenAddress = TOKENS_ADDRESSES[token][this.chain];

    const transact = () =>
      this.getContract().write.deposit([tokenAddress, amount, minimumMint], {
        account: walletAddress,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.deposit(
        [tokenAddress, amount, minimumMint],
        {
          account: walletAddress,
        },
      );

    return { transact, estimate };
  }

  /**
   * Deposit an asset/token for staking with a permit.
   *
   * @param walletAddress Address of the caller of the transaction.
   * @param params Permit parameters.
   * @param params.depositAsset Address of the asset/token to deposit.
   * @param params.depositAmount Amount of the asset/token to deposit.
   * @param params.minimumMint Minimum amount of shares to mint.
   * @param params.deadline Deadline for the permit.
   * @param params.v v value of the permit.
   * @param params.r r value of the permit.
   * @param params.s s value of the permit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction with the given value.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public depositWithPermit(
    walletAddress: Address,
    params: DepositWithPermitParams,
  ) {
    const { depositAsset, depositAmount, minimumMint, deadline, v, r, s } =
      params;

    const transact = () =>
      this.getContract().write.depositWithPermit(
        [depositAsset, depositAmount, minimumMint, deadline, v, r, s],
        {
          account: walletAddress,
          chain: this.viemChain,
        },
      );
    const estimate = () =>
      this.getContract().estimateGas.depositWithPermit(
        [depositAsset, depositAmount, minimumMint, deadline, v, r, s],
        {
          account: walletAddress,
        },
      );

    return { transact, estimate };
  }
}
