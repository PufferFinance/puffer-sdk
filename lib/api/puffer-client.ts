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
import { Chain, VIEM_CHAINS, ViemChain } from '../chains/constants';
import { CHAIN_ADDRESSES } from '../contracts/addresses';
import { ValueOf } from '../utils/types';
import { CHAIN_ABIS } from '../contracts/abis/abis';
import { AccountError } from '../errors/validation-errors';

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

  public depositETH(walletAddress: Address) {
    const contract = getContract({
      address: this.chainAddresses.PufferVault as Address,
      abi: this.chainAbis.PufferVaultV2,
      client: {
        wallet: this.walletClient,
        // Public client is needed for simulation.
        public: this.publicClient,
      },
    });

    const transact = async (value: bigint) =>
      await contract.write.depositETH([walletAddress], {
        account: walletAddress,
        chain: this.viemChain,
        value,
      });

    const estimate = async () =>
      await contract.estimateGas.depositETH([walletAddress], {
        account: walletAddress,
      });

    return { transact, estimate };
  }

  /**
   * Validates that the browser environment is correct.
   */
  private validateEnvironment() {
    if (!window.ethereum) {
      throw new AccountError('JSON-RPC account not accessible.', {
        fixMessage: 'Make sure a JSON-RPC wallet is set up in the browser.',
      });
    }
  }
}
