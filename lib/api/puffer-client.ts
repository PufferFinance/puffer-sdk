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
import { PufferL2DepositorHandler } from '../contracts/handlers/puffer-l2-depositor-handler';
import { ERC20PermitHandler } from '../contracts/handlers/erc20-permit-handler';
import { PufLockerHandler } from '../contracts/handlers/puf-locker-handler';
import { L2RewardManagerHandler } from '../contracts/handlers/l2-reward-manager-handler';
import { L1RewardManagerHandler } from '../contracts/handlers/l1-reward-manager-handler';
import { PufferWithdrawalManagerHandler } from '../contracts/handlers/puffer-withdrawal-manager-handler';
/**
 * The core class and the main entry point of the Puffer SDK.
 */
export class PufferClient {
  private walletClient: WalletClient;
  private publicClient: PublicClient;

  // Contract Handlers
  /** Handler for the `ERC20Permit` contract. */
  public erc20Permit: ERC20PermitHandler;
  /** Handler for the `PufferVaultV2` contract. */
  public vault: PufferVaultHandler;
  /** Handler for the `PufferDepositor` contract. */
  public depositor: PufferDepositorHandler;
  /** Handler for the `PufferL2Depositor` contract. */
  public l2Depositor: PufferL2DepositorHandler;
  /** Handler for the `PufToken` contract. */
  public pufToken: PufTokenHandler;
  /** Handler for the `PufLocker` contract. */
  public pufLocker: PufLockerHandler;
  /** Handler for the `L2RewardManager` contract. */
  public l2RewardManager: L2RewardManagerHandler;
  /** Handler for the `L1RewardManager` contract. */
  public l1RewardManager: L1RewardManagerHandler;
  /** Handler for the `PufferWithdrawalManager` contract. */
  public pufferWithdrawalManager: PufferWithdrawalManagerHandler;

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

    /* istanbul ignore next */
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

    this.erc20Permit = new ERC20PermitHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
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
    this.l2Depositor = new PufferL2DepositorHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.pufLocker = new PufLockerHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.l2RewardManager = new L2RewardManagerHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.l1RewardManager = new L1RewardManagerHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.pufferWithdrawalManager = new PufferWithdrawalManagerHandler(
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
