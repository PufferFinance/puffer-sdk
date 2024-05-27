import {
  Address,
  Chain as ViemChain,
  PublicClient,
  WalletClient,
  getContract,
} from 'viem';
import { CHAIN_ABIS } from '../abis/abis';
import { Chain, VIEM_CHAINS } from '../../chains/constants';
import { CHAIN_ADDRESSES } from '../addresses';

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

  // This is a method because the typings are complex and lost when
  // trying to make it a member.
  private getContract() {
    return getContract({
      address: CHAIN_ADDRESSES[this.chain].PufferVault as Address,
      abi: CHAIN_ABIS[this.chain].PufferVaultV2,
      client: {
        wallet: this.walletClient,
        public: this.publicClient,
      },
    });
  }

  /**
   * Deposit ETH to the given wallet address. This doesn't make the
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
   * Deposit stETH to the given wallet address. This doesn't make the
   * transaction but returns two methods namely `transact` and
   * `estimate`.
   *
   * @param walletAddress Wallet address to get the ETH from.
   * @param value Value in wei of the stETH to deposit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction with the given value.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public depositStETH(walletAddress: Address, value: bigint) {
    const transact = async () =>
      await this.getContract().write.depositStETH([value, walletAddress], {
        account: walletAddress,
        chain: this.viemChain,
      });

    const estimate = async () =>
      await this.getContract().estimateGas.depositStETH(
        [value, walletAddress],
        {
          account: walletAddress,
        },
      );

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
}
