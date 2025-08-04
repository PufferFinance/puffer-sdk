import {
  Chain as ViemChain,
  WalletClient,
  PublicClient,
  getContract,
  GetContractReturnType,
  Address,
  Hex,
} from 'viem';
import { InstitutionalVault } from '../abis/mainnet/InstitutionalVault';
import { Chain, VIEM_CHAINS } from '../../chains/constants';
import { InvalidContractAddressError } from '../../errors/validation-errors';

export type QueuedWithdrawal = {
  staker: Address;
  delegatedTo: Address;
  withdrawer: Address;
  nonce: bigint;
  startBlock: number;
  strategies: Address[];
  scaledShares: bigint[];
};

/**
 * Handler for the `InstitutionalVault` contract exposing methods to
 * interact with the contract.
 */
export class InstitutionalVaultHandler {
  private viemChain: ViemChain;
  private address?: Address;

  /**
   * Create the handler for the `InstitutionalVault` contract exposing
   * methods to interact with the contract.
   *
   * @param chain Chain to use for the client.
   * @param walletClient The wallet client to use for wallet
   * interactions.
   * @param publicClient The public client to use for public
   * interactions.
   */
  constructor(
    chain: Chain,
    private walletClient: WalletClient,
    private publicClient: PublicClient,
  ) {
    this.viemChain = VIEM_CHAINS[chain];
  }

  /**
   * Set the address of the contract for this handler.
   *
   * @param address The address of the contract.
   * @returns The handler.
   */
  public withAddress(address: Address) {
    this.address = address;

    return this;
  }

  /**
   * Get the address of the contract for this handler.
   *
   * @returns The address of the contract.
   */
  public getAddress() {
    return this.address;
  }

  /**
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    if (!this.address) {
      throw new InvalidContractAddressError(
        `No address specified for the contract`,
        {
          fixMessage: `Set the contract address in the handler by using the setAddress method`,
        },
      );
    }

    const abi = InstitutionalVault;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({
      address: this.address,
      abi,
      client,
    }) as GetContractReturnType<typeof abi, typeof client, Address>;
  }

  /**
   * Get the beacon deposit contract address.
   *
   * @returns The beacon deposit contract address.
   */
  public getBeaconDepositContract() {
    return this.getContract().read.BEACON_DEPOSIT_CONTRACT();
  }

  /**
   * Get the eigen delegation manager contract address.
   *
   * @returns The eigen delegation manager.
   */
  public getEigenDelegationManager() {
    return this.getContract().read.EIGEN_DELEGATION_MANAGER();
  }

  /**
   * Get the eigen pod manager contract address.
   *
   * @returns The eigen pod manager contract address.
   */
  public getEigenPodManager() {
    return this.getContract().read.EIGEN_POD_MANAGER();
  }

  /**
   * Get the eigen pod address.
   *
   * @returns The eigen pod address.
   */
  public getEigenPod() {
    return this.getContract().read.getEigenPod();
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
   * Approve the spender to spend the owner's tokens.
   *
   * @param spender The spender of the tokens.
   * @param amount The amount of tokens to approve.
   */
  public approve(spender: Address, amount: bigint) {
    return this.getContract().write.approve([spender, amount], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Get the asset of the vault.
   *
   * @returns The asset of the vault.
   */
  public asset() {
    return this.getContract().read.asset();
  }

  /**
   * Get the authority of the vault.
   *
   * @returns The authority of the vault.
   */
  public authority() {
    return this.getContract().read.authority();
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
   * Complete the queued withdrawals.
   *
   * @param withdrawals The withdrawals to complete.
   * @param receiveAsTokens Whether to receive the assets as tokens.
   */
  public completeQueuedWithdrawals(
    withdrawals: QueuedWithdrawal[],
    receiveAsTokens: boolean[],
  ) {
    return this.getContract().write.completeQueuedWithdrawals(
      [withdrawals, receiveAsTokens],
      {
        account: this.walletClient.account!,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Convert shares to assets.
   *
   * @param shares The number of shares to convert.
   * @returns The number of assets.
   */
  public convertToAssets(shares: bigint) {
    return this.getContract().read.convertToAssets([shares]);
  }

  /**
   * Convert assets to shares.
   *
   * @param assets The number of assets to convert.
   * @returns The number of shares.
   */
  public convertToShares(assets: bigint) {
    return this.getContract().read.convertToShares([assets]);
  }

  /**
   * Deposit assets into the vault.
   *
   * @param assets The number of assets to deposit.
   * @param receiver The address to receive the shares.
   */
  public deposit(assets: bigint, receiver: Address) {
    return this.getContract().write.deposit([assets, receiver], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Deposit ETH into the vault.
   *
   * @param receiver The address to receive the shares.
   * @param value The amount of ETH to deposit.
   */
  public depositETH(receiver: Address, value: bigint) {
    return this.getContract().write.depositETH([receiver], {
      account: this.walletClient.account!,
      chain: this.viemChain,
      value,
    });
  }

  /**
   * Get the non-restaked validator ETH.
   *
   * @returns The non-restaked validator ETH.
   */
  public getNonRestakedValidatorETH() {
    return this.getContract().read.getNonRestakedValidatorETH();
  }

  /**
   * Get the restaked validator ETH.
   *
   * @returns The restaked validator ETH.
   */
  public getRestakedValidatorETH() {
    return this.getContract().read.getRestakedValidatorETH();
  }

  /**
   * Get the withdrawal credentials.
   *
   * @returns The withdrawal credentials.
   */
  public getWithdrawalCredentials() {
    return this.getContract().read.getWithdrawalCredentials();
  }

  /**
   * Get the maximum deposit amount for the address.
   *
   * @param address The address to get the maximum deposit amount for.
   * @returns The maximum deposit amount for the address.
   */
  public maxDeposit(address: Address) {
    return this.getContract().read.maxDeposit([address]);
  }

  /**
   * Get the maximum mint amount for the address.
   *
   * @param address The address to get the maximum mint amount for.
   * @returns The maximum mint amount for the address.
   */
  public maxMint(address: Address) {
    return this.getContract().read.maxMint([address]);
  }

  /**
   * Get the maximum redeem amount for the address.
   *
   * @param address The address to get the maximum redeem amount for.
   * @returns The maximum redeem amount for the address.
   */
  public maxRedeem(address: Address) {
    return this.getContract().read.maxRedeem([address]);
  }

  /**
   * Get the maximum withdraw amount for the address.
   *
   * @param address The address to get the maximum withdraw amount for.
   * @returns The maximum withdraw amount for the address.
   */
  public maxWithdraw(address: Address) {
    return this.getContract().read.maxWithdraw([address]);
  }

  /**
   * Mint shares to the receiver.
   *
   * @param shares The number of shares to mint.
   * @param receiver The address to receive the shares.
   */
  public mint(shares: bigint, receiver: Address) {
    return this.getContract().write.mint([shares, receiver], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Get the name of the contract.
   *
   * @returns The name of the contract.
   */
  public name() {
    return this.getContract().read.name();
  }

  /**
   * Preview the deposit amount for the assets.
   *
   * @param assets The number of assets to deposit.
   * @returns The number of shares to receive.
   */
  public previewDeposit(assets: bigint) {
    return this.getContract().read.previewDeposit([assets]);
  }

  /**
   * Preview the mint amount for the shares.
   *
   * @param shares The number of shares to mint.
   * @returns The number of assets to receive.
   */
  public previewMint(shares: bigint) {
    return this.getContract().read.previewMint([shares]);
  }

  /**
   * Preview the redeem amount for the shares.
   *
   * @param shares The number of shares to redeem.
   * @returns The number of assets to receive.
   */
  public previewRedeem(shares: bigint) {
    return this.getContract().read.previewRedeem([shares]);
  }

  /**
   * Preview the withdraw amount for the shares.
   *
   * @param shares The number of shares to withdraw.
   * @returns The number of assets to receive.
   */
  public previewWithdraw(shares: bigint) {
    return this.getContract().read.previewWithdraw([shares]);
  }

  /**
   * Queue the withdrawals.
   *
   * @param shares The number of shares to withdraw.
   */
  public queueWithdrawals(shares: bigint) {
    return this.getContract().write.queueWithdrawals([shares], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Redeem the shares to the receiver.
   *
   * @param shares The number of shares to redeem.
   * @param receiver The address to receive the assets.
   * @param owner The owner of the shares.
   */
  public redeem(shares: bigint, receiver: Address, owner: Address) {
    return this.getContract().write.redeem([shares, receiver, owner], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Set the validators ETH.
   *
   * @param restakedValidatorsETH The amount of restaked validator ETH.
   * @param nonRestakedValidatorsETH The amount of non-restaked validator ETH.
   */
  public setValidatorsETH(
    restakedValidatorsETH: bigint,
    nonRestakedValidatorsETH: bigint,
  ) {
    return this.getContract().write.setValidatorsETH(
      [restakedValidatorsETH, nonRestakedValidatorsETH],
      {
        account: this.walletClient.account!,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Start the non-restaking validators.
   *
   * @param pubKeys The public keys of the validators.
   * @param signatures The signatures of the validators.
   * @param depositDataRoots The deposit data roots of the validators.
   */
  public startNonRestakingValidators(
    pubKeys: Address[],
    signatures: Address[],
    depositDataRoots: Address[],
  ) {
    return this.getContract().write.startNonRestakingValidators(
      [pubKeys, signatures, depositDataRoots],
      {
        account: this.walletClient.account!,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Start the restaking validators.
   *
   * @param pubKeys The public keys of the validators.
   * @param signatures The signatures of the validators.
   * @param depositDataRoots The deposit data roots of the validators.
   */
  public startRestakingValidators(
    pubKeys: Address[],
    signatures: Address[],
    depositDataRoots: Address[],
  ) {
    return this.getContract().write.startRestakingValidators(
      [pubKeys, signatures, depositDataRoots],
      {
        account: this.walletClient.account!,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Withdraw the assets to the receiver.
   *
   * @param assets The number of assets to withdraw.
   * @param receiver The address to receive the assets.
   * @param owner The owner of the assets.
   */
  public withdraw(assets: bigint, receiver: Address, owner: Address) {
    return this.getContract().write.withdraw([assets, receiver, owner], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Get the symbol of the contract.
   *
   * @returns The symbol of the contract.
   */
  public symbol() {
    return this.getContract().read.symbol();
  }

  /**
   * Get the total assets of the vault.
   *
   * @returns The total assets of the vault.
   */
  public totalAssets() {
    return this.getContract().read.totalAssets();
  }

  /**
   * Get the total supply of the vault.
   *
   * @returns The total supply of the vault.
   */
  public totalSupply() {
    return this.getContract().read.totalSupply();
  }

  /**
   * Transfer the value to the to address.
   *
   * @param to The address to transfer the value to.
   * @param value The amount of value to transfer.
   */
  public transfer(to: Address, value: bigint) {
    return this.getContract().write.transfer([to, value], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Transfer the value from the from address to the to address.
   *
   * @param from The address to transfer the value from.
   * @param to The address to transfer the value to.
   * @param value The amount of value to transfer.
   */
  public transferFrom(from: Address, to: Address, value: bigint) {
    return this.getContract().write.transferFrom([from, to, value], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Call a custom external function.
   *
   * @param target The target contract address.
   * @param data The calldata to send a transaction to the target contract.
   * @param value The amount of value to send to the target contract.
   */
  public customExternalCall(target: Address, data: Hex, value: bigint) {
    return this.getContract().write.customExternalCall([target, data, value], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }
}
