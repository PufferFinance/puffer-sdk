import {
  PublicClient,
  WalletClient,
  isHash,
  isHex,
  padHex,
  serializeSignature,
} from 'viem';
import { Chain } from '../../chains/constants';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { Token, TOKENS_SALT } from '../tokens';
import { ERC20PermitHandler } from './erc20-permit-handler';
import { ERC20Permit } from '../abis/mainnet/ERC20Permit';

describe('ERC20PermitHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(ERC20Permit);
  let handler: ERC20PermitHandler;
  let walletClient: WalletClient;
  let publicClient: PublicClient;

  beforeEach(() => {
    walletClient = setupTestWalletClient();
    publicClient = setupTestPublicClient();

    handler = new ERC20PermitHandler(Chain.Holesky, walletClient, publicClient);
  });

  it('should get the permit signature for the given token', async () => {
    contractTestingUtils.mockCall('nonces', [10n]);
    contractTestingUtils.mockCall('name', ['Ethereum Staking Mock']);

    const mockSpender = padHex('0x', { size: 20 });
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

    const signature = await handler
      .withToken(Token.stETH)
      .getPermitSignature(mockAccount, mockSpender, 1n);

    const { r, s, v, yParity, deadline } = signature;
    expect(isHex(r)).toBeTruthy();
    expect(isHex(s)).toBeTruthy();
    expect(typeof v).toBe('bigint');
    expect(yParity).toBeTruthy();
    expect(typeof deadline).toBe('bigint');
  });

  it('should approve the usage of token for a spender', async () => {
    contractTestingUtils.mockTransaction('approve');
    const mockSpender = padHex('0x', { size: 20 });

    const txHash = await handler.approve(mockAccount, mockSpender, 1n);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should use permit salt for tokens that have it', async () => {
    // Using mainnet for this test since it has salt for pufETHwstE.
    handler = new ERC20PermitHandler(Chain.Mainnet, walletClient, publicClient);

    contractTestingUtils.mockCall('nonces', [10n]);
    contractTestingUtils.mockCall('name', ['Ethereum Staking Mock']);

    const mockSpender = padHex('0x', { size: 20 });
    // Mocking the wallet client since couldn't find a way to mock
    // through eth-testing.
    const mockSignature = serializeSignature({
      r: '0x1',
      s: '0x1',
      v: 0n,
      yParity: 1,
    });
    const signTypedDataSpy = jest
      .spyOn(walletClient, 'signTypedData')
      .mockReturnValue(Promise.resolve(mockSignature));

    await handler
      .withToken(Token.pufETHwstE)
      .getPermitSignature(mockAccount, mockSpender, 1n);

    const salt = TOKENS_SALT[Token.pufETHwstE]?.[Chain.Mainnet];
    expect(salt).toBeDefined();
    expect(signTypedDataSpy.mock.lastCall?.[0].domain?.salt).toBe(salt);
  });
});
