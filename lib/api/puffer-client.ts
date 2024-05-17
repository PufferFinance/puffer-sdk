import {
  Address,
  WalletClient,
  createWalletClient,
  custom,
  getContract,
} from 'viem';
import { PufferVaultV2 } from '../contracts/abis/holesky/PufferVaultV2';
import { Chain, VIEM_CHAINS } from '../chains/constants';
import { CHAIN_ADDRESSES } from '../contracts/addresses/addresses';

export class PufferClient {
  private chain: Chain;
  private walletClient: WalletClient;

  constructor(chain: Chain) {
    this.chain = chain;
    this.walletClient = createWalletClient({
      chain: VIEM_CHAINS[this.chain],
      transport: custom(window.ethereum!),
    });
  }

  public async depositETH(value: bigint) {
    if (!this.walletClient.account) {
      throw new Error('Client account not found');
    }

    const contract = getContract({
      address: CHAIN_ADDRESSES[this.chain].PufferVault as Address,
      abi: PufferVaultV2,
      client: this.walletClient,
    });

    // Simulating the contract to make sure everything works.
    const { request } = await contract.simulate.depositETH(
      [this.walletClient.account!.address],
      {
        account: this.walletClient.account!.address,
        chain: VIEM_CHAINS[this.chain],
        value,
      },
    );

    return await contract.write.depositETH(
      [this.walletClient.account!.address],
      request,
    );
  }
}
