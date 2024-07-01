import { WalletClient, PublicClient, getContract, Address } from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { PUF_LOCKER_ABIS } from '../abis/puf-locker-abis';
import { CHAIN_ADDRESSES } from '../addresses';
import { PufToken, TOKENS_ADDRESSES } from '../tokens';
import { ERC20PermitHandler } from './erc20-permit-handler';

/**
 * Handler for the `PufLocker` contract exposing methods to interact
 * with the contract.
 */
export class PufLockerHandler {
  private viemChain: ViemChain;
  private erc20PermitHandler: ERC20PermitHandler;

  /**
   * Create the handler for the `PufLocker` contract exposing methods to
   * interact with the contract.
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
    return getContract({
      address: CHAIN_ADDRESSES[this.chain].PufLocker as Address,
      abi: PUF_LOCKER_ABIS[this.chain].PufLocker,
      client: {
        wallet: this.walletClient,
        public: this.publicClient,
      },
    });
  }

  /**
   * Get all deposits of the given account address.
   *
   * @param pufToken The PufToken to get the deposits for.
   * @param walletAddress The wallet address to get the deposits for.
   * @returns The amount and deposits of the given account address.
   */
  public getAllDeposits(pufToken: PufToken, walletAddress: Address) {
    return this.getContract().read.getAllDeposits([
      TOKENS_ADDRESSES[pufToken][this.chain],
      walletAddress,
    ]);
  }

  /**
   * Get the user's deposits for the given token and deposit index.
   *
   * @param userAddress User address to get the deposits for.
   * @param pufToken PufToken to get the deposits of.
   * @param start The starting index of the deposits.
   * @param limit The maximum number of deposits to retrieve.
   * @returns The amount and release time of the deposits.
   */
  public getDeposits(
    userAddress: Address,
    pufToken: PufToken,
    start: bigint,
    limit: bigint,
  ) {
    return this.getContract().read.getDeposits([
      userAddress,
      TOKENS_ADDRESSES[pufToken][this.chain],
      start,
      limit,
    ]);
  }

  /**
   * Get the minimum and maximum lock periods allowed for deposits.
   *
   * @returns The minimum and maximum lock period. (`[minLock,
   * maxLock]`)
   */
  public getLockPeriods() {
    return this.getContract().read.getLockPeriods();
  }

  /**
   * Deposit the given PufToken into the locker.
   *
   * @param pufToken PufToken to deposit.
   * @param walletAddress Wallet address of the depositor.
   * @param value Amount of the deposit.
   * @param lockPeriod The period for the deposit.
   * @returns The transaction hash of the deposit.
   */
  public async deposit(
    pufToken: PufToken,
    walletAddress: Address,
    value: bigint,
    lockPeriod: bigint,
  ) {
    const { r, s, v, yParity, deadline } = await this.erc20PermitHandler
      .withToken(pufToken)
      .getPermitSignature(walletAddress, value);
    const permitData = {
      r,
      s,
      v: Number(v ?? yParity),
      deadline,
      amount: value,
    };

    const depositArgs = <const>[
      TOKENS_ADDRESSES[pufToken][this.chain],
      lockPeriod,
      permitData,
    ];

    const transact = () =>
      this.getContract().write.deposit(depositArgs, {
        account: walletAddress,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.deposit(depositArgs, {
        account: walletAddress,
      });

    return { transact, estimate };
  }

  /**
   * Withdraw the deposits identified by the deposit indexes from the
   * locker.
   *
   * @param pufToken PufToken to withdraw.
   * @param recipient Recipient of the withdrawal.
   * @param depositIndexes Deposit indexes to withdraw.
   * @returns Hash of the withdrawal transaction.
   */
  public withdraw(
    pufToken: PufToken,
    recipient: Address,
    depositIndexes: bigint[],
  ) {
    const withdrawArgs = <const>[
      TOKENS_ADDRESSES[pufToken][this.chain],
      depositIndexes,
      recipient,
    ];

    const transact = () =>
      this.getContract().write.withdraw(withdrawArgs, {
        account: recipient,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.withdraw(withdrawArgs, {
        account: recipient,
      });

    return { transact, estimate };
  }
}
