import {
  Address,
  PublicClient,
  WalletClient,
  createPublicClient,
  createWalletClient,
  custom,
  getContract,
  http,
} from 'viem';
import { PufferVaultV2 } from '../contracts/abis/holesky/PufferVaultV2';
import { Chain, VIEM_CHAINS, ViemChain } from '../chains/constants';
import { CHAIN_ADDRESSES } from '../contracts/addresses/addresses';

export class PufferClient {
  private chain: Chain;
  private viemChain: ViemChain;
  private walletClient: WalletClient;
  private publicClient: PublicClient;

  constructor(chain: Chain) {
    this.validateEnvironment();

    this.chain = chain;
    this.viemChain = VIEM_CHAINS[this.chain];

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

  public async depositETH(walletAddress: Address, value: bigint) {
    const contract = getContract({
      address: CHAIN_ADDRESSES[this.chain].PufferVault as Address,
      abi: PufferVaultV2,
      client: {
        wallet: this.walletClient,
        // Public client is needed for simulation.
        public: this.publicClient,
      },
    });

    return await contract.write.depositETH([walletAddress], {
      account: walletAddress,
      chain: this.viemChain,
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
