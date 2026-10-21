import {
  Address,
  getContract,
  GetContractReturnType,
  PublicClient,
  WalletClient,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { InvalidInputError } from '../../errors/validation-errors';
import { L1RewardManager } from '../abis/mainnet/L1RewardManager';
import { ClaimOrder } from './l2-reward-manager-handler';

/**
 * Status of a rewards interval in the `L1RewardManager` contract.
 */
export enum IntervalStatus {
  None = 0,
  Active = 1,
  Frozen = 2,
  Reverted = 3,
}

/**
 * Handler for the `L1RewardManager` contract.
 */
export class L1RewardManagerHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the `L1RewardManager` contract exposing
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
  }

  /**
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = CONTRACT_ADDRESSES[this.chain].L1RewardManager as Address;
    const abi = L1RewardManager;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Get the authority address.
   *
   * @returns The authority address.
   */
  public authority() {
    return this.getContract().read.authority();
  }

  /**
   * Get the claiming delay used for new intervals.
   *
   * @returns The claiming delay.
   */
  public getClaimingDelay() {
    return this.getContract().read.getClaimingDelay();
  }

  /**
   * Get the end epoch of the interval currently being processed.
   *
   * @returns The current interval end epoch.
   */
  public getCurrentIntervalEndEpoch() {
    return this.getContract().read.getCurrentIntervalEndEpoch();
  }

  /**
   * Get the end epoch of the last successfully processed interval.
   *
   * @returns The last interval end epoch.
   */
  public getLastIntervalEndEpoch() {
    return this.getContract().read.getLastIntervalEndEpoch();
  }

  /**
   * Get the record of the given interval.
   *
   * @param intervalId The interval ID for a given start and end epoch.
   * See `getIntervalId`.
   * @returns The interval record with its epochs, the time it becomes
   * claimable, the minted and claimed amounts, the status (see
   * `IntervalStatus`), the exchange rate and the rewards root.
   */
  public getInterval(intervalId: Address) {
    return this.getContract().read.getInterval([intervalId]);
  }

  /**
   * Returns the interval ID for a given start and end epoch.
   *
   * @param startEpoch Start epoch of the interval.
   * @param endEpoch End epoch of the interval.
   * @returns Interval ID for the given start and end epoch.
   */
  public getIntervalId(startEpoch: bigint, endEpoch: bigint) {
    return this.getContract().read.getIntervalId([startEpoch, endEpoch]);
  }

  /**
   * Get the ID of the newest minted interval.
   *
   * @returns The newest interval ID.
   */
  public getNewestIntervalId() {
    return this.getContract().read.getNewestIntervalId();
  }

  /**
   * Check if the reward has been claimed for an account and a specific
   * interval.
   *
   * @param account The address of the account to check.
   * @param intervalId The claiming interval ID. See `getIntervalId`.
   * @returns Whether the reward has been claimed.
   */
  public isClaimed(account: Address, intervalId: Address) {
    return this.getContract().read.isClaimed([intervalId, account]);
  }

  /**
   * Check whether the claiming is locked for the given interval.
   *
   * @param intervalId The interval to check the claiming lock for. See
   * `getIntervalId`.
   * @returns Whether the claiming is locked for the given interval.
   */
  public isClaimingLocked(intervalId: Address) {
    return this.getContract().read.isClaimingLocked([intervalId]);
  }

  /**
   * Claims the rewards for a specific epoch range based on the
   * `ClaimOrder`. The pufETH is always sent to the account of the
   * claim order. Access to this function is controlled by the
   * contract's authority.
   *
   * @param account The account using which to claim the rewards.
   * @param claimOrders One or more claim orders.
   * @param claimOrders[].account Account of the claim order.
   * @param claimOrders[].amount Amount of the claim order.
   * @param claimOrders[].intervalId Interval ID of the claim order. See
   * `getIntervalId`.
   * @param claimOrders[].isL1Contract The flag stored in the merkle
   * leaf. It has no effect on L1.
   * @param claimOrders[].merkleProof Merkle proof of the claim order.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   * @throws {InvalidInputError} If `claimOrders` is empty.
   */
  public claimRewards(account: Address, claimOrders: ClaimOrder[]) {
    if (claimOrders.length === 0) {
      throw new InvalidInputError(
        '`claimOrders` cannot be empty and must be specified',
        {
          fixMessage:
            'Specify at least one or more claim orders to claim rewards',
        },
      );
    }

    const transact = () =>
      this.getContract().write.claimRewards([claimOrders], {
        chain: this.viemChain,
        account,
      });
    const estimate = () =>
      this.getContract().estimateGas.claimRewards([claimOrders], {
        account,
      });

    return { transact, estimate };
  }
}
