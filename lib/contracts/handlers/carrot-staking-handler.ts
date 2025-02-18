import {
  Address,
  WalletClient,
  PublicClient,
  getContract,
  GetContractReturnType,
} from 'viem';
import { ViemChain, VIEM_CHAINS, Chain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { CarrotStaker } from '../abis/mainnet/CarrotStaker';

/**
 * Handler for the `CarrotStaker` contract.
 */
export class CarrotStakingHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the `CarrotStaker` contract exposing
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
    const address = CONTRACT_ADDRESSES[this.chain].CarrotStaker as Address;
    const abi = CarrotStaker;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Get the allowance for the spender to spend the owner's tokens.
   *
   * @param owner The owner of the tokens.
   * @param spender The spender of the tokens.
   * @returns The allowance of the owner for the spender.
   */
  public allowance(owner: Address, spender: Address) {
    return this.getContract().read.allowance([owner, spender]);
  }

  /**
   * Get the balance of the address.
   *
   * @param address The address to get the balance of.
   * @returns The balance of the address.
   */
  public balanceOf(address: Address) {
    return this.getContract().read.balanceOf([address]);
  }

  /**
   * Get the number of decimals of the token.
   *
   * @returns The number of decimals of the token.
   */
  public decimals() {
    return this.getContract().read.decimals();
  }

  /**
   * Get whether unstaking is allowed.
   *
   * @returns Whether unstaking is allowed.
   */
  public isUnstakingAllowed() {
    return this.getContract().read.isUnstakingAllowed();
  }

  /**
   * Get the total supply of the token.
   *
   * @returns The total supply of the token.
   */
  public totalSupply() {
    return this.getContract().read.totalSupply();
  }

  /**
   * Stake CARROT tokens.
   *
   * @param account The account to stake CARROT tokens from.
   * @param amount The amount of CARROT tokens to stake.
   * @returns The transaction hash.
   */
  public stake(account: Address, amount: bigint) {
    return this.getContract().write.stake([amount], {
      account,
      chain: this.viemChain,
    });
  }

  /**
   * Unstake CARROT tokens.
   *
   * @param account The account to unstake CARROT tokens from.
   * @param amount The amount of CARROT tokens to unstake.
   * @param recipient The recipient of the unstaked tokens.
   * @returns The transaction hash.
   */
  public unstake(account: Address, amount: bigint, recipient: Address) {
    return this.getContract().write.unstake([amount, recipient], {
      account,
      chain: this.viemChain,
    });
  }
}
