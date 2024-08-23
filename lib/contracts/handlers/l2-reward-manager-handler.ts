import {
  Address,
  WalletClient,
  PublicClient,
  getContract,
  GetContractReturnType,
} from 'viem';
import { ViemChain, VIEM_CHAINS, Chain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { L2_REWARD_MANAGER_ABIS } from '../abis/l2-reward-manager-abis';

/**
 * Handler for the `L2RewardManager` contract.
 */
export class L2RewardManagerHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the `L2RewardManager` contract exposing
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
    const address = CONTRACT_ADDRESSES[this.chain].L2RewardManager as Address;
    const abi = L2_REWARD_MANAGER_ABIS[this.chain].L2RewardManager;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   *
   *
   * @returns
   */
  public authority() {
    return this.getContract().read.authority();
  }

  /**
   * Get the claiming delay.
   *
   * @returns The claiming delay.
   */
  public getClaimingDelay() {
    return this.getContract().read.getClaimingDelay();
  }

  /**
   * Get the epoch record for a specific period.
   *
   * @param intervalId The interval ID for a given start and end epoch.
   * See `getInternvalId`.
   * @returns The epoch record of exchange rate and reward root.
   */
  public getEpochRecord(intervalId: Address) {
    return this.getContract().read.getEpochRecord([intervalId]);
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
   * Get the rewards claimer for a specific `account`.
   *
   * @param account Account for which to get the rewards claimer.
   * @returns Rewards claimer address.
   */
  public getRewardsClaimer(account: Address) {
    return this.getContract().read.getRewardsClaimer([account]);
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
   * Returns `true` only in the context of a delayed restricted call, at
   * the moment when the scheduled operation is being consumed. Prevents
   * denial of service for delayed restricted calls in the case that the
   * contract performs attacker controlled calls.
   *
   * @returns `true` only in the context of a delayed restricted call at
   * the moment when the scheduled operation is being consumed.
   */
  public isConsumingScheduledOp() {
    return this.getContract().read.isConsumingScheduledOp();
  }
}
