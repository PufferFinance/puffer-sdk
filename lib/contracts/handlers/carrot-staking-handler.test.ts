import { PublicClient, WalletClient } from 'viem';
import { Chain } from '../../chains/constants';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { CarrotStakingHandler } from './carrot-staking-handler';
import { CarrotStaker } from '../abis/mainnet/CarrotStaker';

describe('CarrotStakingHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(CarrotStaker);
  let handler: CarrotStakingHandler;
  let walletClient: WalletClient;
  let publicClient: PublicClient;

  beforeEach(() => {
    walletClient = setupTestWalletClient();
    publicClient = setupTestPublicClient();

    handler = new CarrotStakingHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
  });

  it('should get the allowance', async () => {
    const mockAllowance = 10n;
    contractTestingUtils.mockCall('allowance', [mockAllowance]);

    const allowance = await handler.allowance(mockAccount, mockAccount);
    expect(allowance).toBe(mockAllowance);
  });

  it('should get the balance of the address', async () => {
    const mockBalance = 10n;
    contractTestingUtils.mockCall('balanceOf', [mockBalance]);

    const balance = await handler.balanceOf(mockAccount);
    expect(balance).toBe(mockBalance);
  });

  it('should get the number of decimals', async () => {
    const mockDecimals = 18;
    contractTestingUtils.mockCall('decimals', [mockDecimals]);

    const decimals = await handler.decimals();
    expect(decimals).toBe(mockDecimals);
  });

  it('should get whether unstaking is allowed', async () => {
    const mockIsUnstakingAllowed = true;
    contractTestingUtils.mockCall('isUnstakingAllowed', [
      mockIsUnstakingAllowed,
    ]);

    const isUnstakingAllowed = await handler.isUnstakingAllowed();
    expect(isUnstakingAllowed).toBe(mockIsUnstakingAllowed);
  });

  it('should get the total supply', async () => {
    const mockTotalSupply = 10n;
    contractTestingUtils.mockCall('totalSupply', [mockTotalSupply]);

    const totalSupply = await handler.totalSupply();
    expect(totalSupply).toBe(mockTotalSupply);
  });

  it('should stake CARROT tokens', async () => {
    const mockAmount = 10n;
    contractTestingUtils.mockTransaction('stake');

    const stakeTx = await handler.stake(mockAccount, mockAmount);
    expect(stakeTx).toBeDefined();
  });

  it('should unstake CARROT tokens', async () => {
    const mockAmount = 10n;
    contractTestingUtils.mockTransaction('unstake');

    const unstakeTx = await handler.unstake(
      mockAccount,
      mockAmount,
      mockAccount,
    );
    expect(unstakeTx).toBeDefined();
  });
});
