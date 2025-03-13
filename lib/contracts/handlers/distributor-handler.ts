import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { Distributor } from '../abis/mainnet/Distributor';

export interface MerkleTree {
  merkleRoot: Address;
  ipfsHash: Address;
}

export interface ClaimInfo {
  amount: bigint;
  timestamp: bigint;
  merkleRoot: Address;
}

export interface ClaimParams {
  users: Address[];
  tokens: Address[];
  amounts: bigint[];
  proofs: Address[][];
}

/**
 * Handler for the Merkle Distributor contract, for claiming rewards, e.g. mtwCARROT.
 */
export class DistributorHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the Distributor contract exposing
   * methods to interact with the contract.
   *
   * @param chain Chain to use for the client.
   * @param walletClient The wallet client to use for wallet interactions.
   * @param publicClient The public client to use for public interactions.
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
    const address = CONTRACT_ADDRESSES[this.chain].Distributor as Address;
    const abi = Distributor;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Claim tokens for multiple users.
   *
   * @param account The account making the claim.
   * @param params The claim parameters.
   * @returns A promise that resolves to the transaction hash.
   */
  public claim(
    account: Address,
    { users, tokens, amounts, proofs }: ClaimParams,
  ) {
    return this.getContract().write.claim([users, tokens, amounts, proofs], {
      account,
      chain: this.viemChain,
    });
  }

  /**
   * Get claim information for a user and token.
   *
   * @param user The user address.
   * @param token The token address.
   * @returns The claim information.
   */
  public async claimed(user: Address, token: Address): Promise<ClaimInfo> {
    const [amount, timestamp, merkleRoot] =
      await this.getContract().read.claimed([user, token]);
    return {
      amount,
      timestamp: BigInt(timestamp),
      merkleRoot,
    };
  }

  /**
   * Get the core contract address.
   *
   * @returns The core contract address.
   */
  public core() {
    return this.getContract().read.core();
  }

  /**
   * Get the dispute amount.
   *
   * @returns The dispute amount.
   */
  public disputeAmount() {
    return this.getContract().read.disputeAmount();
  }

  /**
   * Get the dispute period.
   *
   * @returns The dispute period in seconds.
   */
  public disputePeriod() {
    return this.getContract().read.disputePeriod();
  }

  /**
   * Get the dispute token address.
   *
   * @returns The dispute token address.
   */
  public disputeToken() {
    return this.getContract().read.disputeToken();
  }

  /**
   * Dispute the current tree.
   *
   * @param account The account disputing the tree.
   * @param reason The reason for the dispute.
   * @returns A promise that resolves to the transaction hash.
   */
  public disputeTree(account: Address, reason: string) {
    return this.getContract().write.disputeTree([reason], {
      account,
      chain: this.viemChain,
    });
  }

  /**
   * Get the current disputer address.
   *
   * @returns The disputer address.
   */
  public disputer() {
    return this.getContract().read.disputer();
  }

  /**
   * Get the end of the dispute period.
   *
   * @returns The timestamp when the dispute period ends.
   */
  public endOfDisputePeriod() {
    return this.getContract().read.endOfDisputePeriod();
  }

  /**
   * Get the current merkle root.
   *
   * @returns The current merkle root.
   */
  public getMerkleRoot() {
    return this.getContract().read.getMerkleRoot();
  }

  /**
   * Get the last tree information.
   *
   * @returns The last tree information.
   */
  public async lastTree(): Promise<MerkleTree> {
    const [merkleRoot, ipfsHash] = await this.getContract().read.lastTree();
    return {
      merkleRoot,
      ipfsHash,
    };
  }

  /**
   * Check if only operators can claim for a user.
   *
   * @param user The user address to check.
   * @returns Whether only operators can claim for the user.
   */
  public onlyOperatorCanClaim(user: Address) {
    return this.getContract().read.onlyOperatorCanClaim([user]);
  }

  /**
   * Toggle whether only operators can claim for a user.
   *
   * @param account The account toggling the setting.
   * @param user The user address to toggle for.
   * @returns A promise that resolves to the transaction hash.
   */
  public toggleOnlyOperatorCanClaim(account: Address, user: Address) {
    return this.getContract().write.toggleOnlyOperatorCanClaim([user], {
      account,
      chain: this.viemChain,
    });
  }

  /**
   * Toggle an operator for a user.
   *
   * @param account The account toggling the operator.
   * @param user The user address.
   * @param operator The operator address to toggle.
   * @returns A promise that resolves to the transaction hash.
   */
  public toggleOperator(account: Address, user: Address, operator: Address) {
    return this.getContract().write.toggleOperator([user, operator], {
      account,
      chain: this.viemChain,
    });
  }

  /**
   * Toggle whether an address is trusted.
   *
   * @param account The account toggling the trusted status.
   * @param eoa The address to toggle trust for.
   * @returns A promise that resolves to the transaction hash.
   */
  public toggleTrusted(account: Address, eoa: Address) {
    return this.getContract().write.toggleTrusted([eoa], {
      account,
      chain: this.viemChain,
    });
  }

  /**
   * Get the current tree information.
   *
   * @returns The current tree information.
   */
  public async tree(): Promise<MerkleTree> {
    const [merkleRoot, ipfsHash] = await this.getContract().read.tree();
    return {
      merkleRoot,
      ipfsHash,
    };
  }
}
