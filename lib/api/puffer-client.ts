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
import { PufferL2DepositorHandler } from '../contracts/handlers/puffer-l2-depositor-handler';
import { ERC20PermitHandler } from '../contracts/handlers/erc20-permit-handler';
import { PufLockerHandler } from '../contracts/handlers/puf-locker-handler';
import { L2RewardManagerHandler } from '../contracts/handlers/l2-reward-manager-handler';
import { L1RewardManagerHandler } from '../contracts/handlers/l1-reward-manager-handler';
import { PufferWithdrawalManagerHandler } from '../contracts/handlers/puffer-withdrawal-manager-handler';
import { NucleusBoringVaultHandler } from '../contracts/handlers/nucleus-boring-vault-handler';
import { NucleusTellerHandler } from '../contracts/handlers/nucleus-teller-handler';
import { NucleusAccountantHandler } from '../contracts/handlers/nucleus-accountant-handler';
import { NucleusAtomicQueueHandler } from '../contracts/handlers/nucleus-atomic-queue-handler';
import { MtwCarrotHandler } from '../contracts/handlers/mtw-carrot-handler';
import { CarrotStakingHandler } from '../contracts/handlers/carrot-staking-handler';
import { DistributorHandler } from '../contracts/handlers/distributor-handler';
import { ConcreteVaultHandler } from '../contracts/handlers/concrete-vault-handler';
import { ValidatorTicketHandler } from '../contracts/handlers/validator-ticket-handler';
import { PufferOracleV2Handler } from '../contracts/handlers/puffer-oracle-v2-handler';
import { PufferProtocolHandler } from '../contracts/handlers/puffer-protocol-handler';
import { GuardianModuleHandler } from '../contracts/handlers/guardian-module-handler';
import { InstitutionalVaultHandler } from '../contracts/handlers/institutional-vault-handler';

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
  /** Handler for the `PufLocker` contract. */
  public pufLocker: PufLockerHandler;
  /** Handler for the `L2RewardManager` contract. */
  public l2RewardManager: L2RewardManagerHandler;
  /** Handler for the `L1RewardManager` contract. */
  public l1RewardManager: L1RewardManagerHandler;
  /** Handler for the `PufferWithdrawalManager` contract. */
  public pufferWithdrawalManager: PufferWithdrawalManagerHandler;
  /** Handler for the `NucleusBoringVault` contract. */
  public nucleusBoringVault: NucleusBoringVaultHandler;
  /** Handler for the `NucleusTeller` contract. */
  public nucleusTeller: NucleusTellerHandler;
  /** Handler for the `NucleusAccountant` contract. */
  public nucleusAccountant: NucleusAccountantHandler;
  /** Handler for the `NucleusAtomicQueue` contract. */
  public nucleusAtomicQueue: NucleusAtomicQueueHandler;
  /** Handler for the `mtwCARROT` (Merkl Token Wrapper) contract. */
  public mtwCarrot: MtwCarrotHandler;
  /** Handler for the `CarrotStaker` contract. */
  public carrotStaker: CarrotStakingHandler;
  /** Handler for the `Distributor` contract. */
  public distributor: DistributorHandler;
  /** Handler for the `ConcreteMultiStrategyVault` contract. */
  public concreteVault: ConcreteVaultHandler;
  /** Handler for the `ValidatorTicket` contract. */
  public validatorTicket: ValidatorTicketHandler;
  /** Handler for the `PufferOracleV2` contract. */
  public pufferOracleV2: PufferOracleV2Handler;
  /** Handler for the `PufferProtocol` contract. */
  public pufferProtocol: PufferProtocolHandler;
  /** Handler for the `GuardianModule` contract. */
  public guardianModule: GuardianModuleHandler;
  /** Handler for the `InstitutionalVault` contract. */
  public institutionalVault: InstitutionalVaultHandler;

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
    this.nucleusBoringVault = new NucleusBoringVaultHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.nucleusTeller = new NucleusTellerHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.nucleusAccountant = new NucleusAccountantHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.nucleusAtomicQueue = new NucleusAtomicQueueHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.mtwCarrot = new MtwCarrotHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.carrotStaker = new CarrotStakingHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.distributor = new DistributorHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.concreteVault = new ConcreteVaultHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.validatorTicket = new ValidatorTicketHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.pufferOracleV2 = new PufferOracleV2Handler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.pufferProtocol = new PufferProtocolHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.guardianModule = new GuardianModuleHandler(
      chain,
      this.walletClient,
      this.publicClient,
    );
    this.institutionalVault = new InstitutionalVaultHandler(
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
