import {
  Address,
  GetContractReturnType,
  PublicClient,
  Chain as ViemChain,
  WalletClient,
  getContract,
  Account,
} from 'viem';
import { Chain, VIEM_CHAINS } from '../../chains/constants';
import { CarrotVesting } from '../abis/mainnet/CarrotVesting';
import { CONTRACT_ADDRESSES } from '../addresses';
import { PermitData } from '../common/lib/types';
import { Token } from '../tokens';
import { ERC20PermitHandler } from './erc20-permit-handler';

/**
 * Handler for the `CarrotVesting` contract exposing methods to interact
 * with the contract.
 */
export class CarrotVestingHandler {
  private viemChain: ViemChain;
  private erc20PermitHandler: ERC20PermitHandler;

  /**
   * Create the handler for the `CarrotVesting` contract exposing methods to
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
   * Get the contract.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = CONTRACT_ADDRESSES[this.chain].CarrotVesting as Address;
    const abi = CarrotVesting;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof CarrotVesting,
      typeof client,
      Address
    >;
  }

  /**
   * Get the owner of the contract.
   *
   * @returns The owner address.
   */
  public owner() {
    return this.getContract().read.owner();
  }

  /**
   * Calculate the claimable amount for a user.
   *
   * @param user The user address.
   * @returns The claimable amount.
   */
  public calculateClaimableAmount(user: Address) {
    return this.getContract().read.calculateClaimableAmount([user]);
  }

  /**
   * Get the exchange rate.
   *
   * @returns The exchange rate.
   */
  public exchangeRate() {
    return this.getContract().read.EXCHANGE_RATE();
  }

  /**
   * Claim vested tokens.
   *
   * @returns The transaction.
   */
  public claim() {
    return this.getContract().write.claim({
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Get the CARROT token address.
   *
   * @returns The CARROT token address.
   */
  public getCarrotAddress() {
    return this.getContract().read.CARROT();
  }

  /**
   * Get the PUFFER token address.
   *
   * @returns The PUFFER token address.
   */
  public getPufferAddress() {
    return this.getContract().read.PUFFER();
  }

  /**
   * Get the total puffer rewards.
   *
   * @returns The total puffer rewards.
   */
  public totalPufferRewards() {
    return this.getContract().read.TOTAL_PUFFER_REWARDS();
  }

  /**
   * Get the number of vesting steps.
   *
   * @returns The number of vesting steps.
   */
  public steps() {
    return this.getContract().read.steps();
  }

  /**
   * Get the maximum carrot amount.
   *
   * @returns The maximum carrot amount.
   */
  public maxCarrotAmount() {
    return this.getContract().read.MAX_CARROT_AMOUNT();
  }

  /**
   * Get vesting information for a user.
   *
   * @param user The user address.
   * @returns The vesting information including deposited amount,
   * claimed amount, last claimed timestamp, and deposited timestamp.
   */
  public async vestings(user: Address) {
    const [
      depositedAmount,
      claimedAmount,
      lastClaimedTimestamp,
      depositedTimestamp,
    ] = await this.getContract().read.vestings([user]);

    return {
      depositedAmount,
      claimedAmount,
      lastClaimedTimestamp,
      depositedTimestamp,
    };
  }

  /**
   * Get the start timestamp.
   *
   * @returns The start timestamp.
   */
  public startTimestamp() {
    return this.getContract().read.startTimestamp();
  }

  /**
   * Start vesting for a user.
   *
   * @param amount The amount to vest.
   * @returns The transaction.
   */
  public startVestingPreapproved(amount: bigint) {
    return this.getContract().write.startVesting([amount], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Start vesting with permit.
   *
   * @param permitData The permit data including deadline, amount, v, r, and s values.
   * @returns The transaction.
   */
  public startVestingWithPermit(permitData: PermitData) {
    return this.getContract().write.startVestingWithPermit([permitData], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Start vesting.
   *
   * @param amount The amount to vest.
   * @param isPreapproved Whether the CARROT token is preapproved or
   * should use permit.
   * @returns The transaction.
   */
  public async startVesting(amount: bigint, isPreapproved: boolean) {
    if (isPreapproved) {
      return this.startVestingPreapproved(amount);
    }

    const account = this.walletClient.account as Account;
    const permitData = await this.erc20PermitHandler
      .withToken(Token.CARROT)
      .getPermitData(account.address, this.getContract().address, amount);

    return this.startVestingWithPermit(permitData);
  }

  /**
   * Get the total deposited amount.
   *
   * @returns The total deposited amount.
   */
  public totalDepositedAmount() {
    return this.getContract().read.totalDepositedAmount();
  }

  /**
   * Get the duration of the vesting period.
   *
   * @returns The duration of the vesting period.
   */
  public duration() {
    return this.getContract().read.duration();
  }
}
