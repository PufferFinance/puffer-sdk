import {
  Address,
  PublicClient,
  WalletClient,
  createPublicClient,
  createWalletClient,
  custom,
  http,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../chains/constants';
import { CHAIN_ADDRESSES } from '../contracts/addresses/addresses';
import { ValueOf } from '../utils/types';
import { CHAIN_ABIS } from '../contracts/abis/abis';

export class PufferClient {
  private chainAddresses: ValueOf<typeof CHAIN_ADDRESSES>;
  private chainAbis: ValueOf<typeof CHAIN_ABIS>;

  private viemChain: ViemChain;
  private walletClient: WalletClient;
  private publicClient: PublicClient;

  constructor(chain: Chain) {
    this.validateEnvironment();

    this.chainAddresses = CHAIN_ADDRESSES[chain];
    this.chainAbis = CHAIN_ABIS[chain];
    this.viemChain = VIEM_CHAINS[chain];

    this.walletClient = createWalletClient({
      chain: this.viemChain,
      transport: custom(window.ethereum!),
    });
    this.publicClient = createPublicClient({
      chain: this.viemChain,
      transport: http(),
    });
  }

  public async requestAddresses() {
    return await this.walletClient.requestAddresses();
  }

  public async estimateGas(walletAddress: Address, value: bigint) {
    return await this.publicClient.estimateContractGas({
      address: this.chainAddresses.PufferVault as Address,
      account: walletAddress,
      abi: this.chainAbis.PufferVaultV2,
      functionName: 'depositETH',
      args: [walletAddress],
      value,
    });
  }

  public async depositETH(walletAddress: Address, value: bigint) {
    return await this.walletClient.writeContract({
      address: this.chainAddresses.PufferVault as Address,
      account: walletAddress,
      abi: this.chainAbis.PufferVaultV2,
      chain: this.viemChain,
      functionName: 'depositETH',
      args: [walletAddress],
      value,
    });
  }

  /**
   * Validates that the browser environment is correct.
   */
  private validateEnvironment() {
    if (!window.ethereum) {
      throw new Error('JSON-RPC account not accessible.');
    }
  }
}
