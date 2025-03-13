import {
  Address,
  getContract,
  GetContractReturnType,
  PublicClient,
  WalletClient,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { L1RewardManager } from '../abis/mainnet/L1RewardManager';

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
    const abi = L1RewardManager;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Get the bridge data for the given bridge address.
   *
   * @param bridgeAddress Address of the bridge.
   * @returns The bridge data.
   */
  public getBridge(bridgeAddress: Address) {
    return this.getContract().read.getBridge([bridgeAddress]);
  }

  /**
   * Sets the rewards claimer on L2. Smart contracts might not be able
   * to to own the same address on L2. This function allows to set a
   * different address as the claimer.
   *
   * @param account The account to make the transaction with.
   * @param bridge Address of the bridge.
   * @param claimer Address of the new claimer.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public setL2RewardClaimer(
    account: Address,
    bridge: Address,
    claimer: Address,
  ) {
    const transact = () =>
      this.getContract().write.setL2RewardClaimer([bridge, claimer], {
        chain: this.viemChain,
        account,
      });
    const estimate = () =>
      this.getContract().estimateGas.setL2RewardClaimer([bridge, claimer], {
        account,
      });

    return { transact, estimate };
  }
}
