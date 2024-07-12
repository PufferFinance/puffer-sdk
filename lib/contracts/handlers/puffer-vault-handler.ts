import { Address, PublicClient, WalletClient, getContract } from 'viem';
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
    return getContract({
      address: CONTRACT_ADDRESSES[this.chain].PufferVault as Address,
      abi: PUFFER_VAULT_ABIS[this.chain].PufferVaultV2,
      client: {
        wallet: this.walletClient,
        public: this.publicClient,
      },
    });
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
}
