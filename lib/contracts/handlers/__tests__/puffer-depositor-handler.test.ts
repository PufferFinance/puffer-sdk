import { toHex } from 'viem';
import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../../test/setup-test-clients';
import { mockPermitSignature } from '../../../../test/mocks/permit-signature';
import { mockAccount, testingUtils } from '../../../../test/setup-tests';
import { Chain } from '../../../chains/constants';
import { PufferDepositorHandler } from '../puffer-depositor-handler';

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

    jest
      .spyOn((handler as any).erc20PermitHandler, 'getPermitSignature')
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

    jest
      .spyOn((handler as any).erc20PermitHandler, 'getPermitSignature')
      .mockReturnValue(Promise.resolve(mockPermitSignature));

    const { transact, estimate } = await handler.depositWstETH(mockAccount, 1n);

    expect(await transact()).toBe(mockTxHash);
    expect(await estimate()).toBe(mockGas);
  });
});
