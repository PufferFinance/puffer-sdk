import { isHash } from 'viem';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { Chain } from '../../chains/constants';
import { PUF_TOKEN_ABIS } from '../abis/puf-token-abis';
import { PufTokenHandler } from './puf-token-handler';
import { PUF_TOKEN_ADDRESSES, PufToken } from '../puf-tokens';

describe('PufTokenHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(
    PUF_TOKEN_ABIS[Chain.Holesky].PufToken,
  );
  let handler: PufTokenHandler;

  beforeEach(() => {
    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    handler = new PufTokenHandler(Chain.Holesky, walletClient, publicClient);
  });

  it('should check the balance of the given token', async () => {
    const mockBalance = 10n;
    contractTestingUtils.mockCall('balanceOf', [mockBalance]);

    const balance = await handler.balanceOf(mockAccount);
    expect(balance).toBe(mockBalance);
  });

  it('should get the allowance of the given token', async () => {
    const mockAllowance = 10n;
    contractTestingUtils.mockCall('allowance', [mockAllowance]);

    const allowance = await handler.getAllowance(
      '0xEB77D02f8122B32273444a1b544C147Fb559CB41',
      '0x92e01fbccae21eed10ab2f278f47905d482df202',
    );
    expect(allowance).toBe(mockAllowance);
  });

  it('should get the total deposit cap of the given token', async () => {
    const mockDepositCap = 10n;
    contractTestingUtils.mockCall('totalDepositCap', [mockDepositCap]);

    const totalDepositCap = await handler.getTotalDepositCap();
    expect(totalDepositCap).toBe(mockDepositCap);
  });

  it('should get the total supply of the given token', async () => {
    const mockSupply = 10n;
    contractTestingUtils.mockCall('totalSupply', [mockSupply]);

    const totalSupply = await handler.getTotalSupply();
    expect(totalSupply).toBe(mockSupply);
  });

  it('should withdraw the given token', async () => {
    contractTestingUtils.mockTransaction('withdraw');

    const { transact, estimate } = handler.withdraw(mockAccount, 10n);

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });

  it('should deposit the given token', async () => {
    contractTestingUtils.mockTransaction('deposit');

    const { transact, estimate } = handler.deposit(
      mockAccount,
      mockAccount,
      10n,
    );

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });

  it('should migrate token using the given migrator contract', async () => {
    const mockMigratorContract = '0x1234567890123456789012345678901234567890';
    contractTestingUtils.mockTransaction('migrate');

    const { transact, estimate } = handler.migrate(
      mockAccount,
      mockMigratorContract,
      10n,
    );

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });

  it('should request for approval', async () => {
    contractTestingUtils.mockTransaction('approve');
    const txHash = await handler.approve(mockAccount, 10n);

    expect(isHash(txHash)).toBe(true);
  });

  it('should use the contract of the selected token', () => {
    const contract = handler.withPufToken(PufToken.pufALT).getContract();

    expect(contract.address).toBe(
      PUF_TOKEN_ADDRESSES[PufToken.pufALT][Chain.Holesky],
    );
  });
});
