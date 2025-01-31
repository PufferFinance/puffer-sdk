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
   * Retrieve the balance of a given address.
   *
   * @param address The address to query the balance for.
   * @returns The balance of the specified address.
   */
  public balanceOf(address: Address) {
    return this.getContract().read.balanceOf([address]);
  }

  /**
   * Retrieve the allowance a spender has from an owner.
   *
   * @param owner The address of the token owner.
   * @param spender The address of the spender.
   * @returns The amount the spender is allowed to use on behalf of the owner.
   */
  public allowance(owner: Address, spender: Address) {
    return this.getContract().read.allowance([owner, spender]);
  }

  /**
   * Retrieve the claimable amount for a user, optionally at a specific index.
   *
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
   *
   * @returns The cliff duration in seconds.
   */
  public cliffDuration() {
    return this.getContract().read.cliffDuration();
  }

  /**
   * Retrieve the address set as the fee recipient.
   *
   * @returns The address of the fee recipient.
   */
  public feeRecipient() {
    return this.getContract().read.feeRecipient();
  }

  /**
   * Retrieve all vesting schedules associated with a user.
   *
   * @param user The address of the user.
   * @returns An array of vesting schedules.
   */
  public getUserVestings(user: Address) {
    return this.getContract().read.getUserVestings([user]);
  }

  /**
   * Check if the contract is a token wrapper.
   *
   * @returns True if the contract is a token wrapper, false otherwise.
   */
  public isTokenWrapper() {
    return this.getContract().read.isTokenWrapper();
  }

  /**
   * Retrieve the symbol of the token.
   *
   * @returns The token symbol.
   */
  public symbol() {
    return this.getContract().read.symbol();
  }

  /**
   * Retrieve the token address this contract wraps or represents.
   *
   * @returns The address of the token.
   */
  public token() {
    return this.getContract().read.token();
  }

  /**
   * Retrieve the underlying asset for the token.
   *
   * @returns The address of the underlying asset.
   */
  public underlying() {
    return this.getContract().read.underlying();
  }

  /**
   * Retrieve vesting data for a given address.
   *
   * @param address The address to query vesting data for.
   * @returns Vesting data associated with the address.
   */
  public vestingData(address: Address) {
    return this.getContract().read.vestingData([address]);
  }

  /**
   * Approve a spender to use a specific amount of the owner's tokens.
   *
   * @param ownerAddress Address of the caller of the transaction.
   * @param spenderAddress Address of the spender.
   * @param amount Value to approve for the spender.
   * @returns A promise that resolves to the transaction hash.
   */
  public approve(
    ownerAddress: Address,
    spenderAddress: Address,
    amount: bigint,
  ) {
    return this.getContract().write.approve([spenderAddress, amount], {
      account: ownerAddress,
      chain: this.viemChain,
    });
  }

  /**
   * Claim tokens for a user.
   *
   * @param account Address of the caller of the transaction.
   * @param user The user's address.
   * @param maxClaimIndex The maximum index to check for claimable amount (optional).
   * @returns A promise that resolves to the transaction hash.
   */
  public claim(account: Address, user: Address, maxClaimIndex?: bigint) {
    if (maxClaimIndex !== undefined) {
      return this.getContract().write.claim([user, maxClaimIndex], {
        account,
        chain: this.viemChain,
      });
    }
    return this.getContract().write.claim([user], {
      account,
      chain: this.viemChain,
    });
  }

  /**
   * Decrease the allowance for a spender.
   *
   * @param ownerAddress Address of the caller of the transaction.
   * @param spenderAddress Address of the spender.
   * @param subtractedValue The amount by which the allowance is to be decreased.
   * @returns A promise that resolves to the transaction hash.
   */
  public decreaseAllowance(
    ownerAddress: Address,
    spenderAddress: Address,
    subtractedValue: bigint,
  ) {
    return this.getContract().write.decreaseAllowance(
      [spenderAddress, subtractedValue],
      {
        account: ownerAddress,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Increase the allowance for a spender.
   *
   * @param ownerAddress Address of the caller of the transaction.
   * @param spenderAddress Address of the spender.
   * @param addedValue The amount by which the allowance is to be increased.
   * @returns A promise that resolves to the transaction hash.
   */
  public increaseAllowance(
    ownerAddress: Address,
    spenderAddress: Address,
    addedValue: bigint,
  ) {
    return this.getContract().write.increaseAllowance(
      [spenderAddress, addedValue],
      {
        account: ownerAddress,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Recover ERC20 tokens sent to this contract.
   *
   * @param account Address of the caller of the transaction.
   * @param tokenAddress The address of the token to recover.
   * @param to The address to which the tokens should be sent.
   * @param amountToRecover The amount of tokens to recover.
   * @returns A promise that resolves to the transaction hash.
   */
  public recoverERC20(
    account: Address,
    tokenAddress: Address,
    to: Address,
    amountToRecover: bigint,
  ) {
    return this.getContract().write.recoverERC20(
      [tokenAddress, to, amountToRecover],
      {
        account,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Set the cliff duration for the vesting schedule.
   *
   * @param account Address of the caller of the transaction.
   * @param newCliffDuration The new cliff duration in seconds.
   * @returns A promise that resolves to the transaction hash.
   */
  public setCliffDuration(account: Address, newCliffDuration: number) {
    return this.getContract().write.setCliffDuration([newCliffDuration], {
      account,
      chain: this.viemChain,
    });
  }

  /**
   * Transfer tokens to another address.
   *
   * @param ownerAddress Address of the caller of the transaction.
   * @param to The address to transfer tokens to.
   * @param amount The amount of tokens to transfer.
   * @returns A promise that resolves to the transaction hash.
   */
  public transfer(ownerAddress: Address, to: Address, amount: bigint) {
    return this.getContract().write.transfer([to, amount], {
      account: ownerAddress,
      chain: this.viemChain,
    });
  }
}
