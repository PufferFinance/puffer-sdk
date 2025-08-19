import {
  Address,
  GetContractReturnType,
  PublicClient,
  Chain as ViemChain,
  WalletClient,
  getContract,
  Account,
  Hex,
} from 'viem';
import { Chain, VIEM_CHAINS } from '../../chains/constants';
import { vlPUFFER } from '../abis/mainnet/vlPUFFER';
import { ERC20PermitHandler } from './erc20-permit-handler';
import { Token, TOKENS_ADDRESSES } from '../tokens';
import { PermitData } from '../common/lib/types';

/**
 * Handler for the `vlPUFFER` contract exposing methods to interact
 * with the contract.
 */
export class VLPufferHandler {
  private viemChain: ViemChain;
  private erc20PermitHandler: ERC20PermitHandler;

  /**
   * Create the handler for the `vlPUFFER` contract exposing methods to
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
    const address = TOKENS_ADDRESSES[Token.vlPUFFER][this.chain] as Address;
    const abi = vlPUFFER;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof vlPUFFER,
      typeof client,
      Address
    >;
  }

  /**
   * Get the PUFFER token address.
   *
   * @returns The PUFFER token address.
   */
  public PUFFER() {
    return this.getContract().read.PUFFER();
  }

  /**
   * Get the decimals of the token.
   *
   * @returns The decimals.
   */
  public decimals() {
    return this.getContract().read.decimals();
  }

  /**
   * Get the delegates for an account.
   *
   * @param account The account to get delegates for.
   * @returns The delegate address.
   */
  public delegates(account: Address) {
    return this.getContract().read.delegates([account]);
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
   * Get the allowance of the owner for the spender.
   *
   * @param owner The owner of the allowance.
   * @param spender The spender of the allowance.
   * @returns The allowance.
   */
  public allowance(owner: Address, spender: Address) {
    return this.getContract().read.allowance([owner, spender]);
  }

  /**
   * Get the EIP-712 domain.
   *
   * @returns The EIP-712 domain.
   */
  public eip712Domain() {
    return this.getContract().read.eip712Domain();
  }

  /**
   * Transfer tokens from one address to another.
   *
   * @param from The address to transfer from.
   * @param to The address to transfer to.
   * @param value The amount to transfer.
   * @returns The transaction.
   */
  public transferFrom(from: Address, to: Address, value: bigint) {
    return this.getContract().write.transferFrom([from, to, value], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Get the total supply of the token.
   *
   * @returns The total supply.
   */
  public totalSupply() {
    return this.getContract().read.totalSupply();
  }

  /**
   * Get the symbol of the token.
   *
   * @returns The symbol.
   */
  public symbol() {
    return this.getContract().read.symbol();
  }

  /**
   * Check if the contract is paused.
   *
   * @returns True if paused, false otherwise.
   */
  public isPaused() {
    return this.getContract().read.paused();
  }

  /**
   * Get the lock information for a user.
   *
   * @param user The user address.
   * @returns The lock information.
   */
  public lockInfos(user: Address) {
    return this.getContract().read.lockInfos([user]);
  }

  /**
   * Transfer ownership of the contract.
   *
   * @param newOwner The new owner address.
   * @returns The transaction.
   */
  public transferOwnership(newOwner: Address) {
    return this.getContract().write.transferOwnership([newOwner], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Get the past total supply at a specific timepoint.
   *
   * @param timepoint The timepoint to get the total supply for.
   * @returns The past total supply.
   */
  public getPastTotalSupply(timepoint: bigint) {
    return this.getContract().read.getPastTotalSupply([timepoint]);
  }

  /**
   * Get the balance for an address.
   *
   * @param account The address to get the balance of.
   * @returns The balance.
   */
  public balanceOf(account: Address) {
    return this.getContract().read.balanceOf([account]);
  }

  /**
   * Get the nonce for an owner.
   *
   * @param owner The owner address.
   * @returns The nonce.
   */
  public nonces(owner: Address) {
    return this.getContract().read.nonces([owner]);
  }

  /**
   * Get the votes for an account.
   *
   * @param account The account to get votes for.
   * @returns The votes.
   */
  public votes(account: Address) {
    return this.getContract().read.getVotes([account]);
  }

  /**
   * Delegate by signature.
   *
   * @param delegatee The delegatee address.
   * @param nonce The nonce.
   * @param expiry The expiry time.
   * @param v The v component of the signature.
   * @param r The r component of the signature.
   * @param s The s component of the signature.
   * @returns The transaction.
   */
  public delegateBySig(
    delegatee: Address,
    nonce: bigint,
    expiry: bigint,
    v: number,
    r: Hex,
    s: Hex,
  ) {
    return this.getContract().write.delegateBySig(
      [delegatee, nonce, expiry, v, r, s],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Transfer tokens to another address.
   *
   * @param to The address to transfer to.
   * @param value The amount to transfer.
   * @returns The transaction.
   */
  public transfer(to: Address, value: bigint) {
    return this.getContract().write.transfer([to, value], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Get the clock mode.
   *
   * @returns The clock mode.
   */
  public getClockMode() {
    return this.getContract().read.CLOCK_MODE();
  }

  /**
   * Get the number of checkpoints for an account.
   *
   * @param account The account to get checkpoints for.
   * @returns The number of checkpoints.
   */
  public numCheckpoints(account: Address) {
    return this.getContract().read.numCheckpoints([account]);
  }

  /**
   * Approve a spender to spend tokens.
   *
   * @param spender The spender address.
   * @param value The amount to approve.
   * @returns The transaction.
   */
  public approve(spender: Address, value: bigint) {
    return this.getContract().write.approve([spender, value], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Re-lock with the specified amount and multiplier.
   *
   * @param amount The amount to re-lock.
   * @param multiplier The multiplier for the re-lock.
   * @returns The transaction.
   */
  public reLock(amount: bigint, multiplier: bigint) {
    return this.getContract().write.reLock([amount, multiplier], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Get the past votes for an account at a specific timepoint.
   *
   * @param account The account to get past votes for.
   * @param timepoint The timepoint to get votes for.
   * @returns The past votes.
   */
  public getPastVotes(account: Address, timepoint: bigint) {
    return this.getContract().read.getPastVotes([account, timepoint]);
  }

  /**
   * Get the checkpoints for an account at a specific position.
   *
   * @param account The account to get checkpoints for.
   * @param pos The position of the checkpoint.
   * @returns The checkpoint.
   */
  public checkpoints(account: Address, pos: number) {
    return this.getContract().read.checkpoints([account, pos]);
  }

  /**
   * Get the name of the token.
   *
   * @returns The name.
   */
  public name() {
    return this.getContract().read.name();
  }

  /**
   * Create a lock with the specified amount and multiplier.
   *
   * @param amount The amount to lock.
   * @param multiplier The multiplier for the lock.
   * @returns The transaction.
   */
  public createLock(amount: bigint, multiplier: bigint) {
    return this.getContract().write.createLock([amount, multiplier], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Create a lock with permit.
   *
   * @param value The amount to lock.
   * @param multiplier The multiplier for the lock.
   * @param permitData The permit data.
   * @returns The transaction.
   */
  public createLockWithPermit(
    value: bigint,
    multiplier: bigint,
    permitData: PermitData,
  ) {
    return this.getContract().write.createLockWithPermit(
      [value, multiplier, permitData],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Create a lock with permit.
   *
   * @param value The amount to lock.
   * @param multiplier The multiplier for the lock.
   * @param isPreapproved Whether the PUFFER token is preapproved.
   * @returns The transaction.
   */
  public async lock(value: bigint, multiplier: bigint, isPreapproved: boolean) {
    if (isPreapproved) {
      return this.createLock(value, multiplier);
    }

    const account = this.walletClient.account as Account;
    // Internally create a permit signature for the PUFFER token.
    const permitData = await this.erc20PermitHandler
      .withToken(Token.PUFFER)
      .getPermitData(account.address, this.getContract().address, value);

    // Create a lock with the permit data.
    return this.getContract().write.createLockWithPermit(
      [value, multiplier, permitData],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Kick users from the contract.
   *
   * @param users The array of user addresses to kick.
   * @returns The transaction.
   */
  public kickUsers(users: Address[]) {
    return this.getContract().write.kickUsers([users], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Get the current clock value.
   *
   * @returns The clock value.
   */
  public getClock() {
    return this.getContract().read.clock();
  }

  /**
   * Withdraw tokens to a recipient.
   *
   * @param recipient The recipient address.
   * @returns The transaction.
   */
  public withdraw(recipient: Address) {
    return this.getContract().write.withdraw([recipient], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Get the pending owner of the contract.
   *
   * @returns The pending owner address.
   */
  public pendingOwner() {
    return this.getContract().read.pendingOwner();
  }

  /**
   * Delegate votes to another address.
   *
   * @param delegatee The delegatee address.
   * @returns The transaction.
   */
  public delegate(delegatee: Address) {
    return this.getContract().write.delegate([delegatee], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }
}
