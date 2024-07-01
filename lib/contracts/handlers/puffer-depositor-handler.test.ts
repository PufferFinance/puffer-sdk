import { Address, toHex } from 'viem';
import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { Chain } from '../../chains/constants';
import { PufferDepositorHandler } from './puffer-depositor-handler';

describe('PufferDepositorHandler', () => {
  it('should deposit stETH in exchange for pufETH', async () => {
    const mockGas = 1n;
    const mockTxHash = '0x123';

    testingUtils.lowLevel.mockRequest('eth_sendTransaction', mockTxHash);
    testingUtils.lowLevel.mockRequest('eth_estimateGas', toHex(mockGas));

    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    const handler = new PufferDepositorHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );

    const mockPermitSignature = {
      r: `0x${new Array(64).fill(0).join('')}` as Address,
      s: `0x${new Array(64).fill(0).join('')}` as Address,
      v: 0n,
      yParity: 1,
      deadline: 0n,
    };
    jest
      .spyOn((handler as any).tokensHandler, 'getPermitSignature')
      .mockReturnValue(Promise.resolve(mockPermitSignature));

    const { transact, estimate } = await handler.depositStETH(mockAccount, 1n);

    expect(await transact()).toBe(mockTxHash);
    expect(await estimate()).toBe(mockGas);
  });

  it('should deposit wstETH in exchange for pufETH', async () => {
    const mockGas = 1n;
    const mockTxHash = '0x123';

    testingUtils.lowLevel.mockRequest('eth_sendTransaction', mockTxHash);
    testingUtils.lowLevel.mockRequest('eth_estimateGas', toHex(mockGas));

    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    const handler = new PufferDepositorHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );

    const mockPermitSignature = {
      r: `0x${new Array(64).fill(0).join('')}` as Address,
      s: `0x${new Array(64).fill(0).join('')}` as Address,
      v: 0n,
      yParity: 1,
      deadline: 0n,
    };
    jest
      .spyOn((handler as any).tokensHandler, 'getPermitSignature')
      .mockReturnValue(Promise.resolve(mockPermitSignature));

    const { transact, estimate } = await handler.depositWstETH(mockAccount, 1n);

    expect(await transact()).toBe(mockTxHash);
    expect(await estimate()).toBe(mockGas);
  });
});
