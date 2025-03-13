import { isHash } from 'viem';
import { mockPermitSignature } from '../../../../test/mocks/permit-signature';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../../test/setup-tests';
import { Chain } from '../../../chains/constants';
import { Token } from '../../tokens';
import { PufLockerHandler } from '../puf-locker-handler';
import { PufLocker } from '../../abis/mainnet/PufLocker';

describe('PufTokenHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(PufLocker);
  let handler: PufLockerHandler;

  beforeEach(() => {
    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    handler = new PufLockerHandler(Chain.Holesky, walletClient, publicClient);
  });

  it('should get all locked deposits', async () => {
    const mockDeposit = { amount: 1n, releaseTime: 1n };
    contractTestingUtils.mockCall('getAllDeposits', [[mockDeposit]]);

    const allDeposits = await handler.getAllDeposits(Token.CARROT, mockAccount);

    expect(allDeposits).toEqual([mockDeposit]);
  });

  it('should get deposits based on index', async () => {
    const mockDeposit = { amount: 1n, releaseTime: 1n };
    contractTestingUtils.mockCall('getDeposits', [[mockDeposit]]);

    const allDeposits = await handler.getDeposits(
      Token.CARROT,
      mockAccount,
      0n,
      1n,
    );

    expect(allDeposits).toEqual([mockDeposit]);
  });

  it('should get minimum and maximum lock periods for deposits', async () => {
    const lockPeriods = [0n, 10n];
    contractTestingUtils.mockCall('getLockPeriods', lockPeriods);

    const [minLock, maxLock] = await handler.getLockPeriods();

    expect(minLock).toBe(lockPeriods[0]);
    expect(maxLock).toBe(lockPeriods[1]);
  });

  it('should deposit the given pre-approved token into the locker', async () => {
    contractTestingUtils.mockTransaction('deposit');
    jest
      .spyOn((handler as any).erc20PermitHandler, 'getPermitSignature')
      .mockReturnValue(Promise.resolve(mockPermitSignature));

    const { transact, estimate } = await handler.deposit({
      token: Token.CARROT,
      account: mockAccount,
      recipient: mockAccount,
      value: 1n,
      lockPeriod: 10n,
      isPreapproved: true,
    });

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });

  it('should deposit the given token into the locker', async () => {
    contractTestingUtils.mockTransaction('deposit');
    jest
      .spyOn((handler as any).erc20PermitHandler, 'getPermitSignature')
      .mockReturnValue(Promise.resolve(mockPermitSignature));

    const { transact, estimate } = await handler.deposit({
      token: Token.CARROT,
      account: mockAccount,
      recipient: mockAccount,
      value: 1n,
      lockPeriod: 10n,
    });

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });

  it('should withdraw the given token from the locker', async () => {
    contractTestingUtils.mockTransaction('withdraw');

    const { transact, estimate } = handler.withdraw(
      Token.CARROT,
      mockAccount,
      mockAccount,
      [0n],
    );

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });
});
