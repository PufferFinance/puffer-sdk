import { toHex } from 'viem';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../test/mocks/setup-mock-clients';
import { Chain } from '../../chains/constants';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { PUFFER_VAULT_ABIS } from '../abis/puffer-vault-abis';
import { PufferVaultHandler } from './puffer-vault-handler';

describe('PufferVaultHandler', () => {
  const vaultTestingUtils = testingUtils.generateContractUtils(
    PUFFER_VAULT_ABIS[Chain.Holesky].PufferVaultV2,
  );

  it('should deposit ETH', async () => {
    const mockGas = BigInt(1);
    const mockTxHash = '0x123';

    testingUtils.lowLevel.mockRequest('eth_sendTransaction', mockTxHash);
    testingUtils.lowLevel.mockRequest('eth_estimateGas', toHex(mockGas));

    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    const handler = new PufferVaultHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
    const { transact, estimate } = handler.depositETH(mockAccount);

    expect(await transact(BigInt(1))).toBe(mockTxHash);
    expect(await estimate()).toBe(mockGas);
  });

  it('should check pufETH balance', async () => {
    const mockBalance = BigInt(1);
    vaultTestingUtils.mockCall('balanceOf', [mockBalance]);

    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    const handler = new PufferVaultHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
    const balance = await handler.balanceOf(mockAccount);

    expect(balance).toBe(mockBalance);
  });

  it('should check pufETH rate', async () => {
    const mockRate = BigInt(1e18);
    vaultTestingUtils.mockCall('previewDeposit', [mockRate]);

    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    const handler = new PufferVaultHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
    const rate = await handler.getPufETHRate();

    expect(rate).toBe(mockRate);
  });

  it('should get allowance', async () => {
    const mockAllowance = BigInt(1);
    vaultTestingUtils.mockCall('allowance', [mockAllowance]);

    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    const handler = new PufferVaultHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
    const rate = await handler.getAllowance(
      '0xEB77D02f8122B32273444a1b544C147Fb559CB41',
      '0x92e01fbccae21eed10ab2f278f47905d482df202',
    );

    expect(rate).toBe(mockAllowance);
  });
});
