import { PufferClientHelpers } from './puffer-client-helpers';
import { Chain } from '../chains/constants';

describe('PufferClientHelpers', () => {
  it('should create public client with defined config', () => {
    const publicClient = PufferClientHelpers.createPublicClient({
      chain: Chain.Anvil,
      rpcUrls: ['rpcUrl'],
    });

    // `getBlockNumber` is a public action.
    expect(publicClient.getBlockNumber).toBeTruthy();
  });

  it('should create wallet client with defined config', () => {
    const walletClient = PufferClientHelpers.createWalletClient({
      chain: Chain.Anvil,
      provider: { request: jest.fn() },
    });

    // `sendTransaction` is a wallet action.
    expect(walletClient.sendTransaction).toBeTruthy();
  });
});
