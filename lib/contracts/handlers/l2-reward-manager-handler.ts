import {
  Address,
  WalletClient,
  PublicClient,
  getContract,
  GetContractReturnType,
} from 'viem';
import { ViemChain, VIEM_CHAINS, Chain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { L2_REWARD_MANAGER_ABIS } from '../abis/l2-reward-manager-abis';

/**
 * Handler for the `L2RewardManager` contract.
 */
export class L2RewardManagerHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the `L2RewardManager` contract exposing
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
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = CONTRACT_ADDRESSES[this.chain].L2RewardManager as Address;
    const abi = L2_REWARD_MANAGER_ABIS[this.chain].L2RewardManager;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }
}
