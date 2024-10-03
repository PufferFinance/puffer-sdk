import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../test/setup-test-clients';
import { Chain } from '../../chains/constants';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { NucleusBoringVaultHandler } from './nucleus-boring-vault-handler';
import { NUCLEUS_BORING_VAULT_ABIS } from '../abis/nucleus-boring-vault-abis';
import { generateAddress } from '../../../test/mocks/address';
import { isHash } from 'viem';

describe('NucleusBoringVaultHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(
    NUCLEUS_BORING_VAULT_ABIS[Chain.Mainnet].BoringVault,
  );
  let handler: NucleusBoringVaultHandler;

  beforeEach(() => {
    testingUtils.mockConnectedWallet([mockAccount], { chainId: Chain.Mainnet });
    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    handler = new NucleusBoringVaultHandler(
      Chain.Mainnet,
      walletClient,
      publicClient,
    );
  });

  it('should get the allowance for the given owner and spender', async () => {
    const mockAllowance = 100n;
    contractTestingUtils.mockCall('allowance', [mockAllowance]);

    const allowance = await handler.getAllowance(
      mockAccount,
      generateAddress(),
    );
    expect(allowance).toEqual(mockAllowance);
  });

  it('should get the total supply', async () => {
    const mockTotalSupply = 100n;
    contractTestingUtils.mockCall('totalSupply', [mockTotalSupply]);

    const totalSupply = await handler.getTotalSupply();
    expect(totalSupply).toEqual(mockTotalSupply);
  });

  it('should get the balance of the given wallet', async () => {
    const mockBalance = 100n;
    contractTestingUtils.mockCall('balanceOf', [mockBalance]);

    const balance = await handler.balanceOf(mockAccount);
    expect(balance).toEqual(mockBalance);
  });

  it("should approve the spender to spend the owner's tokens", async () => {
    contractTestingUtils.mockTransaction('approve');

    const txHash = await handler.approve(mockAccount, generateAddress(), 1n);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should transfer tokens to the given address', async () => {
    contractTestingUtils.mockTransaction('transfer');

    const { transact, estimate } = handler.transfer(
      mockAccount,
      generateAddress(),
      1n,
    );

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });

  it('should transfer tokens from the given address to another address', async () => {
    contractTestingUtils.mockTransaction('transferFrom');

    const { transact, estimate } = handler.transferFrom(
      mockAccount,
      generateAddress(),
      generateAddress(),
      1n,
    );

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });

  it('should get the permit to be able to use the token', async () => {
    contractTestingUtils.mockTransaction('permit');

    const { transact, estimate } = handler.permit({
      account: mockAccount,
      owner: generateAddress(),
      spender: generateAddress(),
      value: 1n,
      deadline: 1n,
      v: 1,
      r: generateAddress(32),
      s: generateAddress(32),
    });

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });
});
