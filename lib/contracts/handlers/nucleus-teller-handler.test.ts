import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../test/setup-test-clients';
import { Chain } from '../../chains/constants';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { NUCLEUS_TELLER_ABIS } from '../abis/nucleus-teller-abis';
import { NucleusTellerHandler } from './nucleus-teller-handler';
import { generateAddress } from '../../../test/mocks/address';
import { Token, TOKENS_ADDRESSES, UnifiToken } from '../tokens';
import { isHash } from 'viem';
import { mockPermitSignature } from '../../../test/mocks/permit-signature';
import { NUCLEUS_CONTRACT_ADDRESSES } from '../addresses';

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

  it('should deposit with preapproval', async () => {
    contractTestingUtils.mockTransaction('deposit');

    const { transact, estimate } = await handler.deposit({
      account: mockAccount,
      token: Token.pufETH,
      unifiToken: UnifiToken.unifiETH,
      amount: 100n,
      minimumMint: 0n,
      isPreapproved: true,
    });

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });

  it('should deposit with generated permit', async () => {
    contractTestingUtils.mockTransaction('depositWithPermit');
    jest
      .spyOn((handler as any).erc20PermitHandler, 'getPermitSignature')
      .mockReturnValue(Promise.resolve(mockPermitSignature));

    const { transact, estimate } = await handler.deposit({
      account: mockAccount,
      token: Token.pufETH,
      unifiToken: UnifiToken.unifiETH,
      amount: 100n,
      minimumMint: 0n,
      // This is set by default.
      // isPreapproved: false,
    });

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

  it('should use the given token to call contract functions', async () => {
    const unifiBTCTeller = handler.withToken(UnifiToken.unifiBTC).getContract();
    expect(unifiBTCTeller.address).toEqual(
      NUCLEUS_CONTRACT_ADDRESSES[UnifiToken.unifiBTC][Chain.Mainnet]
        .NucleusTeller,
    );

    const unifiUSDTeller = handler.withToken(UnifiToken.unifiUSD).getContract();
    expect(unifiUSDTeller.address).toEqual(
      NUCLEUS_CONTRACT_ADDRESSES[UnifiToken.unifiUSD][Chain.Mainnet]
        .NucleusTeller,
    );
  });
});
