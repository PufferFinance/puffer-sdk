import {
  Address,
  getContract,
  GetContractReturnType,
  PublicClient,
  WalletClient,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { L1_REWARD_MANAGER_ABIS } from '../abis/l1-reward-manager-abis';

/**
 * Handler for the `L1RewardManager` contract.
 */
export class L1RewardManagerHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the `L1RewardManager` contract exposing
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
    const address = CONTRACT_ADDRESSES[this.chain].L1RewardManager as Address;
    const abi = L1_REWARD_MANAGER_ABIS[this.chain].L1RewardManager;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }
}
