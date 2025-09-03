import {
  Address,
  GetContractReturnType,
  PublicClient,
  Chain as ViemChain,
  WalletClient,
  getContract,
  Account,
} from 'viem';
import { Chain, VIEM_CHAINS } from '../../chains/constants';
import { GaugeRegistry } from '../abis/mainnet/GaugeRegistry';
import { CONTRACT_ADDRESSES } from '../addresses';

/**
 * Handler for the `GaugeRegistry` contract exposing methods to interact
 * with the contract.
 */
export class GaugeRegistryHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the `GaugeRegistry` contract exposing methods to
   * interact with the contract.
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
    const address = CONTRACT_ADDRESSES[this.chain as number]
      .GaugeRegistry as Address;
    const abi = GaugeRegistry;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof GaugeRegistry,
      typeof client,
      Address
    >;
  }

  /**
   * Get the owner of the contract.
   *
   * @returns The owner address.
   */
  public owner() {
    return this.getContract().read.owner();
  }

  /**
   * Get the pending owner of the contract.
   *
   * @returns The pending owner address.
   */
  public pendingOwner() {
    return this.getContract().read.pendingOwner();
  }

  /**
   * Check if a gauge exists.
   *
   * @param gauge The gauge address to check.
   * @returns True if the gauge exists, false otherwise.
   */
  public gaugeExists(gauge: Address) {
    return this.getContract().read.gaugeExists([gauge]);
  }

  /**
   * Check if a gauge is active.
   *
   * @param gauge The gauge address to check.
   * @returns True if the gauge is active, false otherwise.
   */
  public isActive(gauge: Address) {
    return this.getContract().read.isActive([gauge]);
  }

  /**
   * Get gauge information.
   *
   * @param gauge The gauge address.
   * @returns The gauge information including active status, creation time, and metadata URI.
   */
  public async getGauge(gauge: Address) {
    return await this.getContract().read.getGauge([gauge]);
  }

  /**
   * Get the list of all gauges.
   *
   * @returns Array of gauge addresses.
   */
  public getGaugeList() {
    return this.getContract().read.getGaugeList();
  }

  /**
   * Register a new gauge.
   *
   * @param gauge The gauge address to register.
   * @param metadataURI The metadata URI for the gauge.
   * @returns The transaction.
   */
  public registerGauge(gauge: Address, metadataURI: string) {
    return this.getContract().write.registerGauge([gauge, metadataURI], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Activate a gauge.
   *
   * @param gauge The gauge address to activate.
   * @returns The transaction.
   */
  public activateGauge(gauge: Address) {
    return this.getContract().write.activateGauge([gauge], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Deactivate a gauge.
   *
   * @param gauge The gauge address to deactivate.
   * @returns The transaction.
   */
  public deactivateGauge(gauge: Address) {
    return this.getContract().write.deactivateGauge([gauge], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Update gauge metadata.
   *
   * @param gauge The gauge address to update.
   * @param metadataURI The new metadata URI for the gauge.
   * @returns The transaction.
   */
  public updateGaugeMetadata(gauge: Address, metadataURI: string) {
    return this.getContract().write.updateGaugeMetadata([gauge, metadataURI], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Transfer ownership to a new owner.
   *
   * @param newOwner The new owner address.
   * @returns The transaction.
   */
  public transferOwnership(newOwner: Address) {
    return this.getContract().write.transferOwnership([newOwner], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Accept ownership transfer.
   *
   * @returns The transaction.
   */
  public acceptOwnership() {
    return this.getContract().write.acceptOwnership({
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Renounce ownership.
   *
   * @returns The transaction.
   */
  public renounceOwnership() {
    return this.getContract().write.renounceOwnership({
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }
}
