import {
  Address,
  getContract,
  GetContractReturnType,
  Hash,
  PublicClient,
  Chain as ViemChain,
  WalletClient,
} from 'viem';
import { Chain, VIEM_CHAINS } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { GuardianModule } from '../abis/mainnet/GuardianModule';

/**
 * Handler for the `GuardianModule` contract exposing methods to
 * interact with the contract.
 */
export class GuardianModuleHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the `PufLocker` contract exposing methods to
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
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = CONTRACT_ADDRESSES[this.chain].GuardianModule as Address;
    const abi = GuardianModule;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Get the ejection threshold.
   *
   * @returns The ejection threshold.
   */
  public getEjectionThreshold() {
    return this.getContract().read.getEjectionThreshold();
  }

  /**
   * Get the guardians.
   *
   * @returns The guardians.
   */
  public getGuardians() {
    return this.getContract().read.getGuardians();
  }

  /**
   * Get the enclave address for a guardian.
   *
   * @param guardian The guardian address.
   * @returns The enclave address.
   */
  public getGuardiansEnclaveAddress(guardian: Address) {
    return this.getContract().read.getGuardiansEnclaveAddress([guardian]);
  }

  /**
   * Get the enclave addresses for all guardians.
   *
   * @returns The enclave addresses.
   */
  public getGuardiansEnclaveAddresses() {
    return this.getContract().read.getGuardiansEnclaveAddresses();
  }

  /**
   * Get the enclave pubkeys for all guardians.
   *
   * @returns The enclave pubkeys.
   */
  public getGuardiansEnclavePubkeys() {
    return this.getContract().read.getGuardiansEnclavePubkeys();
  }

  /**
   * Validate the enclave signatures for a signed message.
   *
   * @param enclaveSignatures The enclave signatures.
   * @param signedMessageHash The signed message hash.
   * @returns The validation result.
   */
  public validateGuardiansEnclaveSignatures(
    enclaveSignatures: Address[],
    signedMessageHash: Hash,
  ) {
    return this.getContract().read.validateGuardiansEnclaveSignatures([
      enclaveSignatures,
      signedMessageHash,
    ]);
  }

  /**
   * Get the mrenclave.
   *
   * @returns The mrenclave.
   */
  public getMrenclave() {
    return this.getContract().read.getMrenclave();
  }

  /**
   * Get the mrsigner.
   *
   * @returns The mrsigner.
   */
  public getMrsigner() {
    return this.getContract().read.getMrsigner();
  }

  /**
   * Get the threshold.
   *
   * @returns The threshold.
   */
  public getThreshold() {
    return this.getContract().read.getThreshold();
  }

  /**
   * Check if the guardian module is consuming scheduled operations.
   *
   * @returns True if the guardian module is consuming scheduled operations,
   * false otherwise.
   */
  public isConsumingScheduledOp() {
    return this.getContract().read.isConsumingScheduledOp();
  }

  /**
   * Check if an account is a guardian.
   *
   * @param account The account address.
   * @returns True if the account is a guardian, false otherwise.
   */
  public isGuardian(account: Address) {
    return this.getContract().read.isGuardian([account]);
  }

  /**
   * Remove a guardian.
   *
   * @param guardian The guardian address.
   * @param account The account address to make the transaction with.
   * @returns The transaction receipt.
   */
  public removeGuardian(guardian: Address, account: Address) {
    return this.getContract().write.removeGuardian([guardian], {
      account,
      chain: this.viemChain,
    });
  }
}
