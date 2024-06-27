import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { Chain } from '../../chains/constants';
import { PUF_TOKEN_ABIS } from '../abis/puf-token-abis';
import { PufTokenHandler } from './puf-token-handler';

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

  it('should get the allownace of the given token', async () => {
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
});
