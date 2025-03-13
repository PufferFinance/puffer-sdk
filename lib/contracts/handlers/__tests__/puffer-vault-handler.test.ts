import { isHash, toHex } from 'viem';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../../test/setup-test-clients';
import { Chain } from '../../../chains/constants';
import { mockAccount, testingUtils } from '../../../../test/setup-tests';
import { PufferVaultHandler } from '../puffer-vault-handler';
import { PufferVaultV2 } from '../../abis/mainnet/PufferVaultV2';

describe('PufferVaultHandler', () => {
  const vaultTestingUtils = testingUtils.generateContractUtils(PufferVaultV2);
  let handler: PufferVaultHandler;

  beforeEach(() => {
    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    handler = new PufferVaultHandler(Chain.Holesky, walletClient, publicClient);
  });

  it('should deposit ETH', async () => {
    const mockGas = 1n;
    const mockTxHash = '0x123';

    testingUtils.lowLevel.mockRequest('eth_sendTransaction', mockTxHash);
    testingUtils.lowLevel.mockRequest('eth_estimateGas', toHex(mockGas));

    const { transact, estimate } = handler.depositETH(mockAccount);

    expect(await transact(1n)).toBe(mockTxHash);
    expect(await estimate()).toBe(mockGas);
  });

  it('should check pufETH balance', async () => {
    const mockBalance = 1n;
    vaultTestingUtils.mockCall('balanceOf', [mockBalance]);

    const balance = await handler.balanceOf(mockAccount);
    expect(balance).toBe(mockBalance);
  });

  it('should check pufETH rate', async () => {
    const mockRate = BigInt(1e18);
    vaultTestingUtils.mockCall('previewDeposit', [mockRate]);

    const rate = await handler.getPufETHRate();
    expect(rate).toBe(mockRate);
  });

  it('should get allowance', async () => {
    const mockAllowance = 1n;
    vaultTestingUtils.mockCall('allowance', [mockAllowance]);

    const rate = await handler.getAllowance(
      '0xEB77D02f8122B32273444a1b544C147Fb559CB41',
      '0x92e01fbccae21eed10ab2f278f47905d482df202',
    );
    expect(rate).toBe(mockAllowance);
  });

  it('should withdraw pufETH', async () => {
    vaultTestingUtils.mockTransaction('withdraw');

    const { transact, estimate } = handler.withdraw(
      mockAccount,
      mockAccount,
      10n,
    );

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });

  it('should preview redeem for the given pufETH', async () => {
    const mockRedeemAmount = 10n;
    vaultTestingUtils.mockCall('previewRedeem', [mockRedeemAmount]);

    const wethAmount = await handler.previewRedeem(10n);
    expect(wethAmount).toBe(mockRedeemAmount);
  });

  it('should get max possible pufETH that can be redeemed', async () => {
    const mockMaxRedeem = 10n;
    vaultTestingUtils.mockCall('maxRedeem', [mockMaxRedeem]);

    const maxRedeemPufETH = await handler.maxRedeem(mockAccount);
    expect(maxRedeemPufETH).toBe(mockMaxRedeem);
  });

  it('should get exit fee basis points', async () => {
    const mockPoints = 10n;
    vaultTestingUtils.mockCall('getExitFeeBasisPoints', [mockPoints]);

    const exitFeeBasisPoints = await handler.getExitFeeBasisPoints();
    expect(exitFeeBasisPoints).toBe(mockPoints);
  });

  it('should get remaining assets daily withdrawal limit', async () => {
    const mockLimit = 10n;
    vaultTestingUtils.mockCall('getRemainingAssetsDailyWithdrawalLimit', [
      mockLimit,
    ]);

    const withdrawalLimit =
      await handler.getRemainingAssetsDailyWithdrawalLimit();
    expect(withdrawalLimit).toBe(mockLimit);
  });

  it('should redeem pufETH in exchange for WETH', async () => {
    vaultTestingUtils.mockTransaction('redeem');

    const { transact, estimate } = handler.redeem(
      mockAccount,
      mockAccount,
      10n,
    );

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });

  it('should convert pufETH to WETH', async () => {
    const mockPufETH = 10n;
    const mockWETH = 20n;

    vaultTestingUtils.mockCall('convertToAssets', [mockWETH]);

    const wethAmount = await handler.convertToAssets(mockPufETH);

    expect(wethAmount).toBe(mockWETH);
  });
});
