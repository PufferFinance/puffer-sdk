import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
  Account,
} from 'viem';
import { Chain } from 'viem';
import { Chain as LocalChain, VIEM_CHAINS } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { NUCLEUS_ATOMIC_QUEUE_ABIS } from '../abis/nucleus-atomic-queue-abis';

export type AtomicRequest = {
  deadline: bigint;
  atomicPrice: bigint;
  offerAmount: bigint;
  inSolve: boolean;
};

export type SolveMetaData = {
  user: Address;
  flags: number;
  assetsToOffer: bigint;
  assetsForWant: bigint;
};

/**
 * Handler for the `AtomicQueue` contract.
 */
export class AtomicQueueHandler {
  private viemChain: Chain;

  constructor(
    private chain: LocalChain,
    private walletClient: WalletClient,
    private publicClient: PublicClient,
  ) {
    this.viemChain = VIEM_CHAINS[chain];
  }

  public getContract() {
    const address = CONTRACT_ADDRESSES[this.chain].AtomicQueue as Address;
    const abi = NUCLEUS_ATOMIC_QUEUE_ABIS[this.chain].AtomicQueue;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Get the atomic request details for a specific user.
   * @param user User address
   * @param offerToken Token being offered
   * @param wantToken Token being requested
   */
  public getUserAtomicRequest(
    user: Address,
    offerToken: Address,
    wantToken: Address,
  ) {
    return this.getContract().read.getUserAtomicRequest([
      user,
      offerToken,
      wantToken,
    ]);
  }

  /**
   * Check if an atomic request is valid.
   * @param offerToken Token being offered
   * @param user User address
   * @param request Atomic request details
   */
  public isAtomicRequestValid(
    offerToken: Address,
    user: Address,
    request: AtomicRequest,
  ) {
    return this.getContract().read.isAtomicRequestValid([
      offerToken,
      user,
      request,
    ]);
  }

  /**
   * Solve atomic requests for multiple users.
   * @param offerToken Token being offered
   * @param wantToken Token being requested
   * @param users Array of user addresses
   * @param runData Execution data for the solve
   * @param solver Address of the solver
   */
  public solve(
    offerToken: Address,
    wantToken: Address,
    users: Address[],
    runData: `0x${string}`,
    solver: Address,
  ) {
    return this.getContract().write.solve(
      [offerToken, wantToken, users, runData, solver],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Update an atomic request.
   * @param offerToken Token being offered
   * @param wantToken Token being requested
   * @param request New atomic request details
   */
  public updateAtomicRequest(
    offerToken: Address,
    wantToken: Address,
    request: AtomicRequest,
    ownerAddress: Address,
  ) {
    return this.getContract().write.updateAtomicRequest(
      [offerToken, wantToken, request],
      { account: ownerAddress, chain: this.viemChain },
    );
  }

  /**
   * Get user's atomic request details directly from storage.
   * @param user User address
   * @param offerToken Token being offered
   * @param wantToken Token being requested
   */
  public userAtomicRequest(
    user: Address,
    offerToken: Address,
    wantToken: Address,
  ) {
    return this.getContract().read.userAtomicRequest([
      user,
      offerToken,
      wantToken,
    ]);
  }

  /**
   * View solve metadata for a group of users.
   * @param offerToken Token being offered
   * @param wantToken Token being requested
   * @param users Array of user addresses
   */
  public viewSolveMetaData(
    offerToken: Address,
    wantToken: Address,
    users: Address[],
  ) {
    return this.getContract().read.viewSolveMetaData([
      offerToken,
      wantToken,
      users,
    ]);
  }
}