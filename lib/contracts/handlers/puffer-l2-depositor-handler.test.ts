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

  // TODO: This test is not working because the suggested parameters
  // from the PufferL2Depositor contract are not exactly correct. See
  // https://github.com/PufferFinance/puffer-contracts/blob/d3e318f3c45d744bfa2dbadfa1abe998fa49d4b5/mainnet-contracts/src/interface/IPufferL2Depositor.sol#L51-L57
  // it('should deposit pre-approved token', async () => {
  // contractTestingUtils.mockTransaction('deposit');

  //   const { transact, estimate } = handler.depositAfterApproval(
  //     Token.stETH,
  //     mockAccount,
  //     10n,
  //   );

  //   expect(typeof (await estimate())).toBe('bigint');
  //   expect(isHash(await transact())).toBe(true);
  // });

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

  it('should deposit ETH', async () => {
    contractTestingUtils.mockTransaction('depositETH');

    const { transact, estimate } = handler.depositETH(mockAccount, 123n);

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact(1n))).toBe(true);
  });
});
