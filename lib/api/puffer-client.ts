import {
  PublicClient,
  WalletClient,
  createPublicClient,
  createWalletClient,
  http,
} from 'viem';
import { Chain, VIEM_CHAINS } from '../chains/constants';
import { PufferVaultHandler } from '../contracts/handlers/puffer-vault-handler';
import { PufferDepositorHandler } from '../contracts/handlers/puffer-depositor-handler';
import { PufTokenHandler } from '../contracts/handlers/puf-token-handler';

/**
 * The core class and the main entry point of the Puffer SDK.
 */
export class PufferClient {
  private walletClient: WalletClient;
  private publicClient: PublicClient;

  // Contract Handlers
  /** Handler for the `PufferVaultV2` contract. */
  public vault: PufferVaultHandler;
  /** Handler for the `PufferDepositor` contract. */
  public depositor: PufferDepositorHandler;
  /** Handler for the `PufToken` contract. */
  public pufToken: PufTokenHandler;

  /**
   * Create the Puffer Client.
   *
   * @param chain Chain to use for the client.
   * @param walletClient The wallet client to use for wallet
   * interactions.
   * @param publicClient The public client to use for public
   * interactions.
   */
  constructor(
    chain: Chain,
    walletClient?: WalletClient,
    publicClient?: PublicClient,
  ) {
    const viemChain = VIEM_CHAINS[chain];

    this.walletClient =
      walletClient ??
      createWalletClient({
        chain: viemChain,
        transport: http(),
      });
    this.publicClient =
      publicClient ??
      createPublicClient({
        chain: viemChain,
        transport: http(),
      });

    this.vault = new PufferVaultHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );

    this.depositor = new PufferDepositorHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );

    this.pufToken = new PufTokenHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
  }

  /**
   * Request addresses from the wallet.
   *
   * @returns An array of wallet addresses.
   */
  public async requestAddresses() {
    return await this.walletClient.requestAddresses();
  }
}
