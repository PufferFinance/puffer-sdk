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
import { Chain, VIEM_CHAINS } from '../chains/constants';
import { CHAIN_ADDRESSES } from '../contracts/addresses/addresses';

export class PufferClient {
  private chain: Chain;
  private walletClient: WalletClient;
  private publicClient: PublicClient;

  constructor(chain: Chain) {
    this.chain = chain;

    this.walletClient = createWalletClient({
      chain: VIEM_CHAINS[this.chain],
      transport: custom(window.ethereum!),
    });
    this.publicClient = createPublicClient({
      chain: VIEM_CHAINS[this.chain],
      transport: http(),
    });
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

    // Simulating the contract to make sure everything works.
    const { request } = await contract.simulate.depositETH([walletAddress], {
      account: walletAddress,
      chain: VIEM_CHAINS[this.chain],
      value,
    });

    return await contract.write.depositETH([walletAddress], request);
  }
}
