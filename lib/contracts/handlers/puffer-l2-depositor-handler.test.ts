import { isHash } from 'viem';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { mockPermitSignature } from '../../../test/mocks/permit-signature';
import { Chain } from '../../chains/constants';
import { PUFFER_L2_DEPOSITOR_ABIS } from '../abis/puffer-depositor-abis';
import { PufferL2DepositorHandler } from './puffer-l2-depositor-handler';
import { Token } from '../tokens';

describe('PufferL2DepositorHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(
    PUFFER_L2_DEPOSITOR_ABIS[Chain.Holesky].PufferL2Depositor,
  );
  let handler: PufferL2DepositorHandler;

  beforeEach(() => {
    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    handler = new PufferL2DepositorHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
  });

  it('should deposit pre-approved token', async () => {
    contractTestingUtils.mockTransaction('deposit');

    const { transact, estimate } = handler.depositAfterApproval(
      Token.stETH,
      mockAccount,
      10n,
    );

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });

  it('should deposit token after requesting permit', async () => {
    contractTestingUtils.mockTransaction('deposit');
    jest
      .spyOn((handler as any).erc20PermitHandler, 'getPermitSignature')
      .mockReturnValue(Promise.resolve(mockPermitSignature));

    const { transact, estimate } = await handler.deposit(
      Token.stETH,
      mockAccount,
      10n,
    );

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });
});
