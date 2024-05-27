import {
  Address,
  PublicClient,
  WalletClient,
  createPublicClient,
  createWalletClient,
  getContract,
  http,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../chains/constants';
import { CHAIN_ADDRESSES } from '../contracts/addresses';
import { ValueOf } from '../utils/types';
import { CHAIN_ABIS } from '../contracts/abis/abis';

/**
 * The core class and the main entry point of the Puffer SDK.
 */
export class PufferClient {
  private chainAddresses: ValueOf<typeof CHAIN_ADDRESSES>;
  private chainAbis: ValueOf<typeof CHAIN_ABIS>;

  private viemChain: ViemChain;
  private walletClient: WalletClient;
  private publicClient: PublicClient;

  /**
   * Create the Puffer Client.
   * @param chain Chain to use for the client.
   * @param walletClient The wallet client to use for wallet interactions.
   * @param publicClient The public client to use for public interactions.
   */
  constructor(
    chain: Chain,
    walletClient?: WalletClient,
    publicClient?: PublicClient,
  ) {
    this.chainAddresses = CHAIN_ADDRESSES[chain];
    this.chainAbis = CHAIN_ABIS[chain];
    this.viemChain = VIEM_CHAINS[chain];

    this.walletClient =
      walletClient ??
      createWalletClient({
        chain: this.viemChain,
        transport: http(),
      });
    this.publicClient =
      publicClient ??
      createPublicClient({
        chain: this.viemChain,
        transport: http(),
      });
  }

  /**
   * Request addresses from the wallet.
   *
   * @returns An array of wallet addresses.
   */
  public async requestAddresses() {
    return await this.walletClient.requestAddresses();
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
    const contract = this.getPufferVaultContract();

    const transact = async (value: bigint) =>
      await contract.write.depositETH([walletAddress], {
        account: walletAddress,
        chain: this.viemChain,
        value,
      });

    const estimate = async () =>
      await contract.estimateGas.depositETH([walletAddress], {
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
    const contract = this.getPufferVaultContract();
    return await contract.read.balanceOf([walletAddress]);
  }

  /**
   * Get the rate of pufETH compared to ETH.
   *
   * @returns Rate of 1 pufETH compared to 1 ETH.
   */
  public async pufETHRate() {
    const oneWei = BigInt(1e18);
    const contract = this.getPufferVaultContract();

    return await contract.read.previewDeposit([oneWei]);
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
  public async depositStETH(walletAddress: Address, value: bigint) {
    const contract = this.getPufferVaultContract();

    const transact = async () =>
      await contract.write.depositStETH([value, walletAddress], {
        account: walletAddress,
        chain: this.viemChain,
      });

    const estimate = async () =>
      await contract.estimateGas.depositStETH([value, walletAddress], {
        account: walletAddress,
      });

    return { transact, estimate };
  }

  private getPufferVaultContract() {
    return getContract({
      address: this.chainAddresses.PufferVault,
      abi: this.chainAbis.PufferVaultV2,
      client: {
        wallet: this.walletClient,
        public: this.publicClient,
      },
    });
  }
}
