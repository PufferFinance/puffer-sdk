import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  padHex,
  GetContractReturnType,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { PUF_LOCKER_ABIS } from '../abis/puf-locker-abis';
import { CONTRACT_ADDRESSES } from '../addresses';
import { PufToken, TOKENS_ADDRESSES } from '../tokens';
import { ERC20PermitHandler } from './erc20-permit-handler';

export type LockerDepositParams = {
  token: PufToken;
  account: Address;
  recipient: Address;
  value: bigint;
  lockPeriod: bigint;
  isPreapproved?: boolean;
};

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
    const address = CONTRACT_ADDRESSES[this.chain].PufLocker as Address;
    const abi = PUF_LOCKER_ABIS[this.chain].PufLocker;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
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
   * @param pufToken PufToken to get the deposits of.
   * @param userAddress User address to get the deposits for.
   * @param start The starting index of the deposits.
   * @param limit The maximum number of deposits to retrieve.
   * @returns The amount and release time of the deposits.
   */
  public getDeposits(
    pufToken: PufToken,
    userAddress: Address,
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
   * @returns The minimum and maximum lock period in seconds.
   * (`[minLock, maxLock]`)
   */
  public getLockPeriods() {
    return this.getContract().read.getLockPeriods();
  }

  /**
   * Deposit the given PufToken into the locker. This doesn't make the
   * transaction but returns two methods namely `transact` and
   * `estimate`.
   *
   * @param depositParams.pufToken PufToken to deposit.
   * @param depositParams.account Wallet address of the depositor.
   * @param depositParams.recipient Recipient of the deposit.
   * @param depositParams.value Amount of the deposit.
   * @param depositParams.lockPeriod The period for the deposit in
   * seconds.
   * @param depositParams.isPreapproved Whether the token is
   * pre-approved or needs a permit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public async deposit(depositParams: LockerDepositParams) {
    const {
      token,
      account,
      recipient,
      value,
      lockPeriod,
      isPreapproved = false,
    } = depositParams;

    // Only `amount` is needed if `Token.approve()` is already called.
    // So using mock values for other properties.
    let permitData = {
      r: padHex('0x', { size: 32 }),
      s: padHex('0x', { size: 32 }),
      v: 0,
      deadline: 0n,
      amount: value,
    };

    if (!isPreapproved) {
      const { r, s, v, yParity, deadline } = await this.erc20PermitHandler
        .withToken(token)
        .getPermitSignature(
          account,
          CONTRACT_ADDRESSES[this.chain].PufLocker as Address,
          value,
        );
      /* istanbul ignore next */
      permitData = {
        r,
        s,
        v: Number(v ?? yParity),
        deadline,
        amount: value,
      };
    }

    const depositArgs = <const>[
      TOKENS_ADDRESSES[token][this.chain],
      recipient,
      lockPeriod,
      permitData,
    ];

    const transact = () =>
      this.getContract().write.deposit(depositArgs, {
        account,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.deposit(depositArgs, {
        account,
      });

    return { transact, estimate };
  }

  /**
   * Withdraw the deposits identified by the deposit indexes from the
   * locker.
   *
   * @param pufToken PufToken to withdraw.
   * @param walletAddress Address of the account making the transaction.
   * @param recipient Recipient of the withdrawal.
   * @param depositIndexes Deposit indexes to withdraw.
   * @returns Hash of the withdrawal transaction.
   */
  public withdraw(
    pufToken: PufToken,
    walletAddress: Address,
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
        account: walletAddress,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.withdraw(withdrawArgs, {
        account: walletAddress,
      });

    return { transact, estimate };
  }
}
