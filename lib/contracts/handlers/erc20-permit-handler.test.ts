import { Chain } from '../../chains/constants';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { Token } from '../tokens';
import { ERC20PERMIT_ABI } from '../abis/tokens-abis';
import { ERC20PermitHandler } from './erc20-permit-handler';
import { isHex, serializeSignature } from 'viem';

describe('TokensHandler', () => {
  const contractTestingUtils =
    testingUtils.generateContractUtils(ERC20PERMIT_ABI);

  it('should get the permit signature for the given token', async () => {
    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    contractTestingUtils.mockCall('nonces', [10n]);
    contractTestingUtils.mockCall('name', ['Ethereum Staking Mock']);

    // Mocking the wallet client since couldn't find a way to mock
    // through eth-testing.
    const mockSignature = serializeSignature({
      r: '0x1',
      s: '0x1',
      v: 0n,
      yParity: 1,
    });
    jest
      .spyOn(walletClient, 'signTypedData')
      .mockReturnValue(Promise.resolve(mockSignature));

    const handler = new ERC20PermitHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
    const signature = await handler
      .withToken(Token.stETH)
      .getPermitSignature(mockAccount, 1n);

    const { r, s, v, yParity, deadline } = signature;
    expect(isHex(r)).toBeTruthy();
    expect(isHex(s)).toBeTruthy();
    expect(typeof v).toBe('bigint');
    expect(yParity).toBeTruthy();
    expect(typeof deadline).toBe('bigint');
  });
});
