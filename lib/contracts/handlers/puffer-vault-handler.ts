import {
  Address,
  GetContractReturnType,
  PublicClient,
  WalletClient,
  getContract,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { PUFFER_VAULT_ABIS } from '../abis/puffer-vault-abis';

/**
 * Handler for the `PufferVaultV2` contract exposing methods to interact
 * with the contract.
 */
export class PufferVaultHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the `PufferVaultV2` contract exposing
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
    const address = CONTRACT_ADDRESSES[this.chain].PufferVault as Address;
    const abi = PUFFER_VAULT_ABIS[this.chain].PufferVaultV2;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Deposit ETH in exchange for pufETH. This doesn't make the
   * transaction but returns two methods namely `transact` and
   * `estimate`.
   *
   * @param walletAddress Wallet address to get the ETH from.
   * @returns `transact: (value: bigint) => Promise<Address>` - Used to
   * make the transaction with the given value.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public depositETH(walletAddress: Address) {
    const transact = async (value: bigint) =>
      await this.getContract().write.depositETH([walletAddress], {
        account: walletAddress,
        chain: this.viemChain,
        value,
      });

    const estimate = async () =>
      await this.getContract().estimateGas.depositETH([walletAddress], {
        account: walletAddress,
      });

    return { transact, estimate };
  }

  /**
   * Check the pufETH balance of the wallet.
   *
   * @param walletAddress Wallet address to check the balance of.
   * @returns pufETH balance in wei.
   */
  public async balanceOf(walletAddress: Address) {
    return await this.getContract().read.balanceOf([walletAddress]);
  }

  /**
   * Get the rate of pufETH compared to ETH.
   *
   * @returns Rate of pufETH compared to 1 ETH.
   */
  public async getPufETHRate() {
    const oneWei = BigInt(1e18);
    return await this.getContract().read.previewDeposit([oneWei]);
  }

  /**
   * Get the allowance for the given owner and spender.
   *
   * @param ownerAddress Address of the owner.
   * @param spenderAddress Address of the spender.
   * @returns Allowance for the given owner and spender.
   */
  public async getAllowance(ownerAddress: Address, spenderAddress: Address) {
    return await this.getContract().read.allowance([
      ownerAddress,
      spenderAddress,
    ]);
  }

  /**
   * Withdraw pufETH to the given wallet address. This doesn't make the
   * transaction but returns two methods namely `transact` and
   * `estimate`.
   *
   * @param ownerAddress Address of the owner.
   * @param walletAddress Address of the receiver.
   * @param value Value of pufETH to withdraw.
   * @returns `transact: (value: bigint) => Promise<Address>` - Used to
   * make the transaction with the given value.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public withdraw(
    ownerAddress: Address,
    walletAddress: Address,
    value: bigint,
  ) {
    const transact = async () =>
      await this.getContract().write.withdraw(
        [value, walletAddress, ownerAddress],
        {
          account: walletAddress,
          chain: this.viemChain,
        },
      );

    const estimate = async () =>
      await this.getContract().estimateGas.withdraw(
        [value, walletAddress, ownerAddress],
        {
          account: walletAddress,
        },
      );

    return { transact, estimate };
  }

  /**
   * Preview the amount of WETH that can be redeemed for the given
   * amount of pufETH using the `.redeem()` method.
   *
   * @param value Value of pufETH to redeem.
   * @returns Preview of the amount of WETH that can be redeemed.
   */
  public previewRedeem(value: bigint) {
    return this.getContract().read.previewRedeem([value]);
  }

  /**
   * Calculates the maximum amount of pufETH shares that can be redeemed
   * by the owner.
   *
   * @param ownerAddress Address of the owner's wallet.
   * @returns Maximum amount of pufETH shares that can be redeemed.
   */
  public maxRedeem(ownerAddress: Address) {
    return this.getContract().read.maxRedeem([ownerAddress]);
  }

  /**
   * Returns how many basis points of a fee there are when exiting. For
   * example, a 1% fee would mean 1% of the user's requested pufETH is
   * burned (which increases the value for all pufETH holders) before
   * the ETH is redeemed. i.e., you get 1% less ETH back.
   *
   * @returns Basis points of the exit fee.
   */
  public getExitFeeBasisPoints() {
    return this.getContract().read.getExitFeeBasisPoints();
  }

  /**
   * Returns how much WETH can still be withdrawn today.
   *
   * @returns Remaining WETH daily withdrawal limit.
   */
  public getRemainingAssetsDailyWithdrawalLimit() {
    return this.getContract().read.getRemainingAssetsDailyWithdrawalLimit();
  }

  /**
   * Redeems pufETH shares in exchange for WETH assets from the vault.
   * In the process, the pufETH shares of the owner are burned. This
   * doesn't make the transaction but returns two methods namely
   * `transact` and `estimate`.
   *
   * @param ownerAddress Address of the owner of pufETH.
   * @param receiverAddress Address of the receiver of WETH.
   * @param shares Amount of pufETH shares to redeem.
   * @returns `transact: (value: bigint) => Promise<Address>` - Used to
   * make the transaction with the given value.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public redeem(
    ownerAddress: Address,
    receiverAddress: Address,
    shares: bigint,
  ) {
    const transact = async () =>
      await this.getContract().write.redeem(
        [shares, receiverAddress, ownerAddress],
        {
          account: ownerAddress,
          chain: this.viemChain,
        },
      );

    const estimate = async () =>
      await this.getContract().estimateGas.redeem(
        [shares, receiverAddress, ownerAddress],
        {
          account: ownerAddress,
        },
      );

    return { transact, estimate };
  }

  /**
   * Gives exchange rate of pufETH relative to WETH.
   * This does not include any fees, as compared to previewRedeem method.
   *
   * @param amount Amount of pufETH to convert.
   * @returns Amount of equivalent WETH.
   */
  public convertToAssets(amount: bigint) {
    return this.getContract().read.convertToAssets([amount]);
  }
}
