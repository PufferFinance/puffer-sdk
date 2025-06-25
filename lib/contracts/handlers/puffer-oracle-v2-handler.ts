import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
  Account,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { PufferOracleV2 } from '../abis/mainnet/PufferOracleV2';

/**
 * Handler for the `PufferOracleV2` contract exposing methods to interact
 * with the contract.
 */
export class PufferOracleV2Handler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the `PufferOracleV2` contract exposing
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
   * Get the contract.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = CONTRACT_ADDRESSES[this.chain].PufferOracleV2 as Address;
    const abi = PufferOracleV2;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Get the validator ticket price.
   *
   * @returns The validator ticket price.
   */
  public getValidatorTicketPrice() {
    return this.getContract().read.getValidatorTicketPrice();
  }

  /**
   * Get the total number of validators.
   *
   * @returns The total number of validators.
   */
  public getTotalNumberOfValidators() {
    return this.getContract().read.getTotalNumberOfValidators();
  }

  /**
   * Get the locked ETH amount.
   *
   * @returns The locked ETH amount.
   */
  public getLockedEthAmount() {
    return this.getContract().read.getLockedEthAmount();
  }

  /**
   * Check if the system is over burst threshold.
   *
   * @returns True if over burst threshold.
   */
  public isOverBurstThreshold() {
    return this.getContract().read.isOverBurstThreshold();
  }

  /**
   * Provision a new node.
   *
   * @returns The transaction.
   */
  public provisionNode() {
    return this.getContract().write.provisionNode({
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Exit validators.
   *
   * @param numberOfExits The number of validators to exit.
   * @returns The transaction.
   */
  public exitValidators(numberOfExits: bigint) {
    return this.getContract().write.exitValidators([numberOfExits], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Set the mint price for validator tickets.
   *
   * @param newPrice The new mint price.
   * @returns The transaction.
   */
  public setMintPrice(newPrice: bigint) {
    return this.getContract().write.setMintPrice([newPrice], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Set the total number of validators.
   *
   * @param newTotalNumberOfValidators The new total number of validators.
   * @param epochNumber The epoch number.
   * @param guardianEOASignatures The guardian EOA signatures.
   * @returns The transaction.
   */
  public setTotalNumberOfValidators(
    newTotalNumberOfValidators: bigint,
    epochNumber: bigint,
    guardianEOASignatures: `0x${string}`[],
  ) {
    return this.getContract().write.setTotalNumberOfValidators(
      [newTotalNumberOfValidators, epochNumber, guardianEOASignatures],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }
}
