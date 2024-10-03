import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../test/setup-test-clients';
import { Chain } from '../../chains/constants';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { NUCLEUS_TELLER_ABIS } from '../abis/nucleus-teller-abis';
import { NucleusTellerHandler } from './nucleus-teller-handler';
import { generateAddress } from '../../../test/mocks/address';
import { Token, TOKENS_ADDRESSES } from '../tokens';
import { isHash } from 'viem';

describe('NucleusBoringVaultHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(
    NUCLEUS_TELLER_ABIS[Chain.Mainnet].Teller,
  );
  let handler: NucleusTellerHandler;

  beforeEach(() => {
    testingUtils.mockConnectedWallet([mockAccount], { chainId: Chain.Mainnet });
    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    handler = new NucleusTellerHandler(
      Chain.Mainnet,
      walletClient,
      publicClient,
    );
  });

  it('should get constants from the contract', async () => {
    const mockAccountant = generateAddress();
    contractTestingUtils.mockCall('accountant', [mockAccountant]);
    const accountant = await handler.accountant();
    expect(accountant.toLowerCase()).toBe(mockAccountant);

    const mockVault = generateAddress();
    contractTestingUtils.mockCall('vault', [mockVault]);
    const vault = await handler.vault();
    expect(vault.toLowerCase()).toBe(mockVault);

    const mockShareLockPeriod = 1n;
    contractTestingUtils.mockCall('shareLockPeriod', [mockShareLockPeriod]);
    const shareLockPeriod = await handler.shareLockPeriod();
    expect(shareLockPeriod).toBe(mockShareLockPeriod);

    const mockShareUnlockTime = 2n;
    contractTestingUtils.mockCall('shareUnlockTime', [mockShareUnlockTime]);
    const shareUnlockTime = await handler.shareUnlockTime(mockAccount);
    expect(shareUnlockTime).toBe(mockShareUnlockTime);

    const mockIsPaused = true;
    contractTestingUtils.mockCall('isPaused', [mockIsPaused]);
    const isPaused = await handler.isPaused();
    expect(isPaused).toBe(mockIsPaused);
  });

  it('should deposit without a permit', async () => {
    contractTestingUtils.mockTransaction('deposit');

    const { transact, estimate } = handler.deposit(
      mockAccount,
      Token.pufETH,
      100n,
      0n,
    );

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });

  it('should deposit with a permit', async () => {
    contractTestingUtils.mockTransaction('depositWithPermit');

    const { transact, estimate } = handler.depositWithPermit({
      account: mockAccount,
      depositAsset: TOKENS_ADDRESSES[Token.pufETH][Chain.Mainnet],
      depositAmount: 100n,
      minimumMint: 0n,
      deadline: 0n,
      v: 1,
      r: generateAddress(32),
      s: generateAddress(32),
    });

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });
});
