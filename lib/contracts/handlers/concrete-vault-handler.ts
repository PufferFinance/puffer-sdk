/* istanbul ignore file */

import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
  Account,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { ConcreteMultiStrategyVault } from '../abis/mainnet/ConcreteMultiStrategyVault';
import { Token } from '../tokens';
import { VAULTS_ADDRESSES } from '../vaults-addresses';

type VaultAddresses = typeof VAULTS_ADDRESSES;
type PufETHVault = VaultAddresses[Token.pufETH][Chain.Mainnet];

/**
 * Handler for the `ConcreteMultStrategyVault` contract for a given token (pufETH) exposing
 * methods to interact with the contract.
 */
export class ConcreteVaultHandler {
  private viemChain: ViemChain;
  private token: Token.pufETH;

  /**
   * Create the handler for processing UniFi tokens.
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
    this.token = Token.pufETH;
  }

  /**
   * Set the UniFi token to use for executing transactions on the
   * contract.
   *
   * @param token UniFi token to use for the handler.
   * @returns The handler.
   */
  public withToken(token: Token.pufETH) {
    this.token = token;
    return this;
  }

  /**
   * Get the contract.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = (VAULTS_ADDRESSES[this.token][this.chain] as PufETHVault)
      .ConcreteMultiStrategyVault as Address;
    const abi = ConcreteMultiStrategyVault;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Approve a spender to spend the token.
   *
   * @param spender The spender of the token.
   * @param amount The amount to approve.
   * @returns The transaction.
   */
  public approve(spender: Address, amount: bigint) {
    return this.getContract().write.approve([spender, amount], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Get the allowance of the owner for the spender.
   *
   * @param owner The owner of the allowance.
   * @param spender The spender of the allowance.
   * @returns The allowance.
   */
  public getAllowance(owner: Address, spender: Address) {
    return this.getContract().read.allowance([owner, spender]);
  }

  /**
   * Get the balance for the address.
   *
   * @param address The address to get the balance of.
   * @returns The balance.
   */
  public getBalance(address: Address) {
    return this.getContract().read.balanceOf([address]);
  }

  /**
   * Get the total supply of the token.
   *
   * @returns The total supply.
   */
  public getTotalSupply() {
    return this.getContract().read.totalSupply();
  }

  /**
   * Deposit an amount of the token.
   *
   * @param amount The amount to deposit.
   * @returns The transaction.
   */
  public deposit(amount: bigint) {
    return this.getContract().write.deposit([amount], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Withdraw an amount of the token.
   *
   * @param amount The amount to withdraw.
   * @returns The transaction.
   */
  public withdraw(amount: bigint) {
    return this.getContract().write.withdraw([amount], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Provides a preview of the number of shares that would be minted for a given deposit amount, after fees.
   *
   * @param amount The amount to deposit.
   * @returns The preview.
   */
  public previewDeposit(amount: bigint) {
    return this.getContract().read.previewDeposit([amount]);
  }

  /**
   * Provides a preview of the number of shares that would be burned for a given withdrawal amount, after fees.
   *
   * @param amount The amount to withdraw.
   * @returns The preview.
   */
  public previewWithdraw(amount: bigint) {
    return this.getContract().read.previewWithdraw([amount]);
  }
}
