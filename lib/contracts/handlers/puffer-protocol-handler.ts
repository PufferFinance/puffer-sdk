import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
  Account,
  Hex,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { PufferProtocol } from '../abis/mainnet/PufferProtocol';
import { PermitData } from '../common/lib/types';

export type ValidatorKeyData = {
  blsPubKey: `0x${string}`;
  signature: `0x${string}`;
  depositDataRoot: `0x${string}`;
  blsEncryptedPrivKeyShares: `0x${string}`[];
  blsPubKeySet: `0x${string}`;
  raveEvidence: `0x${string}`;
};

export type StoppedValidatorInfo = {
  module: Address;
  startEpoch: bigint;
  endEpoch: bigint;
  wasSlashed: boolean;
  moduleName: `0x${string}`;
  pufferModuleIndex: bigint;
  withdrawalAmount: bigint;
};

/**
 * Handler for the `PufferProtocol` contract exposing methods to interact
 * with the contract.
 */
export class PufferProtocolHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the `PufferProtocol` contract exposing
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
    const address = CONTRACT_ADDRESSES[this.chain].PufferProtocol as Address;
    const abi = PufferProtocol;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Get the minimum VT amount required.
   *
   * @returns The minimum VT amount.
   */
  public getMinimumVtAmount() {
    return this.getContract().read.getMinimumVtAmount();
  }

  /**
   * Get the VT penalty amount.
   *
   * @returns The VT penalty amount.
   */
  public getVTPenalty() {
    return this.getContract().read.getVTPenalty();
  }

  /**
   * Get validator tickets balance for an owner.
   *
   * @param owner The owner address.
   * @returns The validator tickets balance.
   */
  public getValidatorTicketsBalance(owner: Address) {
    return this.getContract().read.getValidatorTicketsBalance([owner]);
  }

  /**
   * Get module address by name.
   *
   * @param moduleName The module name.
   * @returns The module address.
   */
  public getModuleAddress(moduleName: `0x${string}`) {
    return this.getContract().read.getModuleAddress([moduleName]);
  }

  /**
   * Get module weights.
   *
   * @returns The module weights.
   */
  public getModuleWeights() {
    return this.getContract().read.getModuleWeights();
  }

  /**
   * Get the next validator to be provisioned.
   *
   * @returns Tuple of module name and index.
   */
  public getNextValidatorToProvision() {
    return this.getContract().read.getNextValidatorToProvision();
  }

  /**
   * Get node information.
   *
   * @param node The node address.
   * @returns The node information.
   */
  public getNodeInfo(node: Address) {
    return this.getContract().read.getNodeInfo([node]);
  }

  /**
   * Get validators for a module.
   *
   * @param moduleName The module name.
   * @returns The validators array.
   */
  public getValidators(moduleName: `0x${string}`) {
    return this.getContract().read.getValidators([moduleName]);
  }

  /**
   * Get validator information.
   *
   * @param moduleName The module name.
   * @param pufferModuleIndex The puffer module index.
   * @returns The validator information.
   */
  public getValidatorInfo(
    moduleName: `0x${string}`,
    pufferModuleIndex: bigint,
  ) {
    return this.getContract().read.getValidatorInfo([
      moduleName,
      pufferModuleIndex,
    ]);
  }

  /**
   * Get module limit information.
   *
   * @param moduleName The module name.
   * @returns The module limit information.
   */
  public getModuleLimitInformation(moduleName: `0x${string}`) {
    return this.getContract().read.getModuleLimitInformation([moduleName]);
  }

  /**
   * Get withdrawal credentials for a module.
   *
   * @param module The module address.
   * @returns The withdrawal credentials.
   */
  public getWithdrawalCredentials(module: Address) {
    return this.getContract().read.getWithdrawalCredentials([module]);
  }

  /**
   * Get deposit data root.
   *
   * @param pubKey The public key.
   * @param signature The signature.
   * @param withdrawalCredentials The withdrawal credentials.
   * @returns The deposit data root.
   */
  public getDepositDataRoot(
    pubKey: `0x${string}`,
    signature: `0x${string}`,
    withdrawalCredentials: `0x${string}`,
  ) {
    return this.getContract().read.getDepositDataRoot([
      pubKey,
      signature,
      withdrawalCredentials,
    ]);
  }

  /**
   * Create a new puffer module.
   *
   * @param moduleName The module name.
   * @returns The transaction.
   */
  public createPufferModule(moduleName: `0x${string}`) {
    return this.getContract().write.createPufferModule([moduleName], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Register validator key.
   *
   * @param data The validator key data.
   * @param moduleName The module name.
   * @param pufETHPermit The pufETH permit data.
   * @param vtPermit The VT permit data.
   * @returns The transaction.
   */
  public registerValidatorKey(
    data: ValidatorKeyData,
    moduleName: Hex,
    pufETHPermit: PermitData,
    vtPermit: PermitData,
  ) {
    return this.getContract().write.registerValidatorKey(
      [data, moduleName, pufETHPermit, vtPermit],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Provision a node.
   *
   * @param guardianEnclaveSignatures The guardian enclave signatures.
   * @param validatorSignature The validator signature.
   * @param depositRootHash The deposit root hash.
   * @returns The transaction.
   */
  public provisionNode(
    guardianEnclaveSignatures: `0x${string}`[],
    validatorSignature: `0x${string}`,
    depositRootHash: `0x${string}`,
  ) {
    return this.getContract().write.provisionNode(
      [guardianEnclaveSignatures, validatorSignature, depositRootHash],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Deposit validator tickets.
   *
   * @param permit The permit data.
   * @param node The node address.
   * @returns The transaction.
   */
  public depositValidatorTickets(permit: PermitData, node: Address) {
    return this.getContract().write.depositValidatorTickets([permit, node], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Withdraw validator tickets.
   *
   * @param amount The amount to withdraw.
   * @param recipient The recipient address.
   * @returns The transaction.
   */
  public withdrawValidatorTickets(amount: bigint, recipient: Address) {
    return this.getContract().write.withdrawValidatorTickets(
      [amount, recipient],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Batch handle withdrawals.
   *
   * @param validatorInfos The validator infos.
   * @param guardianEOASignatures The guardian EOA signatures.
   * @returns The transaction.
   */
  public batchHandleWithdrawals(
    validatorInfos: StoppedValidatorInfo[],
    guardianEOASignatures: `0x${string}`[],
  ) {
    return this.getContract().write.batchHandleWithdrawals(
      [validatorInfos, guardianEOASignatures],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Skip provisioning for a module.
   *
   * @param moduleName The module name.
   * @param guardianEOASignatures The guardian EOA signatures.
   * @returns The transaction.
   */
  public skipProvisioning(
    moduleName: `0x${string}`,
    guardianEOASignatures: `0x${string}`[],
  ) {
    return this.getContract().write.skipProvisioning(
      [moduleName, guardianEOASignatures],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }
}
