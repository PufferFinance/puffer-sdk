import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
  Account,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { LagoonVault } from '../abis/mainnet/LagoonVault';
import { Token } from '../tokens';
import { VAULTS_ADDRESSES } from '../vaults-addresses';

/**
 * Handler for the `LagoonVault` contract exposing methods to interact
 * with the contract.
 */
export class LagoonVaultHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for processing Lagoon vault.
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
   * Get the contract.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = VAULTS_ADDRESSES[Token.tacpufETH][this.chain]
      .LagoonVault as Address;
    const abi = LagoonVault;
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
   * Check if the total assets are valid. Used for checking if
   * synchronous deposit is possible.
   *
   * @returns True if the total assets are valid, false otherwise.
   */
  public isTotalAssetsValid() {
    return this.getContract().read.isTotalAssetsValid();
  }

  /**
   * Get the symbol of the token. (tacpufETH)
   *
   * @returns The symbol.
   */
  public symbol() {
    return this.getContract().read.symbol();
  }

  /**
   * Deposit an amount of the assets (pufETH) to the vault to get shares
   * (tacpufETH).
   *
   * @param amount The amount to deposit.
   * @param receiver The receiver of the tacpufETH.
   * @param controller The optional controller of the deposit. Set to
   * the receiver if not sure.
   * @returns The transaction.
   */
  public deposit(amount: bigint, receiver: Address, controller?: Address) {
    if (controller) {
      return this.getContract().write.deposit([amount, receiver, controller], {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      });
    }

    return this.getContract().write.deposit([amount, receiver], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Synchronously deposit an amount of the assets (pufETH) to the vault
   * to get shares (tacpufETH). This is only possible if `isTotalAssetsValid`
   * is true.
   *
   * @param amount The amount to deposit.
   * @param receiver The receiver of the tacpufETH.
   * @param referral The referral of the deposit. Falls back to the
   * receiver if not provided.
   * @returns The transaction.
   */
  public syncDeposit(
    amount: bigint,
    receiver: Address,
    referral: Address = receiver,
  ) {
    return this.getContract().write.syncDeposit([amount, receiver, referral], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Request an asynchronous deposit of an amount of the assets (pufETH)
   * to the vault to get shares (tacpufETH). This should be used if
   * `isTotalAssetsValid` is false.
   *
   * @param amount The amount to deposit.
   * @param receiver The receiver of the tacpufETH.
   * @param controller The optional controller of the deposit. Falls back
   * to the receiver if not provided.
   * @returns The transaction.
   */
  public requestDeposit(
    amount: bigint,
    receiver: Address,
    controller: Address = receiver,
  ) {
    return this.getContract().write.requestDeposit(
      [amount, receiver, controller],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
        value: amount,
      },
    );
  }

  /**
   * Withdraw an amount of the shares (pufETH) so the receiver
   * gets the assets (pufETH).
   *
   * @param assets The amount of assets (pufETH) to withdraw.
   * @param receiver The receiver of the assets.
   * @param controller The controller of the withdrawal. Falls back to
   * the receiver if not provided.
   * @returns The transaction.
   */
  public withdraw(
    assets: bigint,
    receiver: Address,
    controller: Address = receiver,
  ) {
    return this.getContract().write.withdraw([assets, receiver, controller], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Redeem an amount of the shares (tacpufETH) so the receiver
   * gets the assets (pufETH).
   *
   * @param shares The amount of shares (tacpufETH) to redeem.
   * @param receiver The receiver of the assets.
   * @param controller The controller of the withdrawal. Falls back to
   * the receiver if not provided.
   * @returns The transaction.
   */
  public redeem(
    shares: bigint,
    receiver: Address,
    controller: Address = receiver,
  ) {
    return this.getContract().write.redeem([shares, receiver, controller], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Request an asynchronous redeem of an amount of the shares (tacpufETH)
   * so the receiver gets the assets (pufETH).
   *
   * @param shares The amount of shares (tacpufETH) to redeem.
   * @param receiver The receiver of the assets.
   * @param controller The controller of the redemption. Falls back to
   * the receiver if not provided.
   * @returns The transaction.
   */
  public requestRedeem(
    shares: bigint,
    receiver: Address,
    controller: Address = receiver,
  ) {
    return this.getContract().write.requestRedeem(
      [shares, receiver, controller],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Provides a preview of the number of shares that would be minted for
   * a given deposit amount, after fees.
   *
   * @param amount The amount to deposit.
   * @returns The preview.
   */
  public previewDeposit(amount: bigint) {
    return this.getContract().read.previewDeposit([amount]);
  }

  /**
   * Provides a preview of the number of shares (tacpufETH) that would be
   * burned for the given amount of assets (pufETH).
   *
   * @param assets The amount of assets (pufETH) to withdraw.
   * @returns The preview.
   */
  public previewWithdraw(assets: bigint) {
    return this.getContract().read.previewWithdraw([assets]);
  }

  /**
   * Provides a preview of the amount of assets (pufETH) that would be redeemed
   * for the given shares (tacpufETH), after withdrawal fees. Subtracts
   * the withdrawal fee from the share amount to determine the net
   * shares for asset conversion.
   *
   * @param shares The amount of shares (tacpufETH) to redeem.
   * @returns The preview.
   */
  public previewRedeem(shares: bigint) {
    return this.getContract().read.previewRedeem([shares]);
  }

  /**
   * Convert an amount of the shares (tacpufETH) to the assets (pufETH).
   *
   * @param shares The amount of shares (tacpufETH) to convert.
   * @returns The amount of assets (pufETH).
   */
  public convertToAssets(shares: bigint) {
    return this.getContract().read.convertToAssets([shares]);
  }

  /**
   * Convert an amount of the assets (pufETH) to the shares (tacpufETH).
   *
   * @param assets The amount of assets (pufETH) to convert.
   * @returns The amount of shares (tacpufETH).
   */
  public convertToShares(assets: bigint) {
    return this.getContract().read.convertToShares([assets]);
  }
}
