import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { TOKENS_ADDRESSES, Token } from '../tokens';
import { mtwCARROT } from '../abis/mainnet/mtwCARROT';

/**
 * Handler for the `mtwCARROT` token contract.
 */
export class MtwCarrotHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the `mtwCARROT` token contract exposing
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
    const address = TOKENS_ADDRESSES[Token.mtwCARROT][this.chain];
    const abi = mtwCARROT;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Approve transaction for the spender to spend the owner's tokens.
   *
   * @param ownerAddress Address of the caller of the transaction.
   * @param spenderAddress Address of the spender.
   * @param value Value to approve for the spender.
   * @returns Hash of the transaction.
   */
  public approve(
    ownerAddress: Address,
    spenderAddress: Address,
    value: bigint,
  ) {
    return this.getContract().write.approve([spenderAddress, value], {
      account: ownerAddress,
      chain: this.viemChain,
    });
  }

  /**
   * Retrieve the balance of a given address.
   * @param address The address to query the balance for.
   * @returns The balance of the specified address.
   */
  public balanceOf(address: Address) {
    return this.getContract().read.balanceOf([address]);
  }

  /**
   * Retrieve the allowance a spender has from an owner.
   * @param owner The address of the token owner.
   * @param spender The address of the spender.
   * @returns The amount the spender is allowed to use on behalf of the owner.
   */
  public allowance(owner: Address, spender: Address) {
    return this.getContract().read.allowance([owner, spender]);
  }

  /**
   * Retrieve the claimable amount for a user, optionally at a specific index.
   * @param user The user's address.
   * @param maxClaimIndex The maximum index to check for claimable amount (optional).
   * @returns The claimable amount for the user.
   */
  public claimable(user: Address, maxClaimIndex?: bigint) {
    if (maxClaimIndex !== undefined) {
      return this.getContract().read.claimable([user, maxClaimIndex]);
    }

    return this.getContract().read.claimable([user]);
  }

  /**
   * Retrieve the cliff duration of the vesting schedule.
   * @returns The cliff duration in seconds.
   */
  public cliffDuration() {
    return this.getContract().read.cliffDuration();
  }

  /**
   * Retrieve the address set as the fee recipient.
   * @returns The address of the fee recipient.
   */
  public feeRecipient() {
    return this.getContract().read.feeRecipient();
  }

  /**
   * Retrieve all vesting schedules associated with a user.
   * @param user The address of the user.
   * @returns An array of vesting schedules.
   */
  public getUserVestings(user: Address) {
    return this.getContract().read.getUserVestings([user]);
  }

  /**
   * Check if the contract is a token wrapper.
   * @returns True if the contract is a token wrapper, false otherwise.
   */
  public isTokenWrapper() {
    return this.getContract().read.isTokenWrapper();
  }

  /**
   * Retrieve the symbol of the token.
   * @returns The token symbol.
   */
  public symbol() {
    return this.getContract().read.symbol();
  }

  /**
   * Retrieve the token address this contract wraps or represents.
   * @returns The address of the token.
   */
  public token() {
    return this.getContract().read.token();
  }

  /**
   * Retrieve the underlying asset for the token.
   * @returns The address of the underlying asset.
   */
  public underlying() {
    return this.getContract().read.underlying();
  }

  /**
   * Retrieve vesting data for a given address.
   * @param address The address to query vesting data for.
   * @returns Vesting data associated with the address.
   */
  public vestingData(address: Address) {
    return this.getContract().read.vestingData([address]);
  }
}
