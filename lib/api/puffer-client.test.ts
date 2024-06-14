import { Chain } from '../chains/constants';
import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../test/setup-tests';
import { PufferClient } from './puffer-client';
import { toHex } from 'viem';

describe('PufferClient', () => {
  it('should request addresses', async () => {
    const walletClient = setupTestWalletClient();

    const pufferClient = new PufferClient(Chain.Holesky, walletClient);
    const [address] = await pufferClient.requestAddresses();

    expect(address).toBe(mockAccount);
  });

  it('should deposit ETH', async () => {
    const mockGas = BigInt(1);
    const mockTxHash = '0x123';

    testingUtils.lowLevel.mockRequest('eth_sendTransaction', mockTxHash);
    testingUtils.lowLevel.mockRequest('eth_estimateGas', toHex(mockGas));

    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    const client = new PufferClient(Chain.Holesky, walletClient, publicClient);
    const { transact, estimate } = client.vault.depositETH(mockAccount);

    expect(await transact(BigInt(1))).toBe(mockTxHash);
    expect(await estimate()).toBe(mockGas);
  });
});
