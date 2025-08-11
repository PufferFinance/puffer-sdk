import { WalletClient, PublicClient, isHash, padHex } from 'viem';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../../test/setup-tests';
import { LagoonVault } from '../../abis/mainnet/LagoonVault';
import { LagoonVaultHandler } from '../lagoon-vault-handler';
import { generateAddress } from '../../../../test/mocks/address';
import { Chain, VIEM_CHAINS } from '../../../chains/constants';

describe('LagoonVaultHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(LagoonVault);
  let handler: LagoonVaultHandler;
  let walletClient: WalletClient;
  let publicClient: PublicClient;

  beforeEach(() => {
    walletClient = setupTestWalletClient(Chain.Holesky, undefined, mockAccount);
    publicClient = setupTestPublicClient(Chain.Holesky);

    handler = new LagoonVaultHandler(Chain.Holesky, walletClient, publicClient);
  });

  it('should get the allowance of the owner for the spender', async () => {
    const owner = generateAddress();
    const spender = generateAddress();
    const amount = 10n;
    contractTestingUtils.mockCall('allowance', [amount]);

    const result = await handler.getAllowance(owner, spender);
    expect(result).toBe(amount);
  });

  it('should approve the spender to spend tokens', async () => {
    contractTestingUtils.mockTransaction('approve');
    const mockSpender = padHex('0x', { size: 20 });
    const amount = 10n;

    const txHash = await handler.approve(mockSpender, amount);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should get the balance for the address', async () => {
    const address = generateAddress();
    const amount = 10n;
    contractTestingUtils.mockCall('balanceOf', [amount]);

    const result = await handler.getBalance(address);
    expect(result).toBe(amount);
  });

  it('should get the total supply of the token', async () => {
    const amount = 1000n;
    contractTestingUtils.mockCall('totalSupply', [amount]);

    const result = await handler.getTotalSupply();
    expect(result).toBe(amount);
  });

  it('should check if total assets are valid', async () => {
    const isValid = true;
    contractTestingUtils.mockCall('isTotalAssetsValid', [isValid]);

    const result = await handler.isTotalAssetsValid();
    expect(result).toBe(isValid);
  });

  it('should get the symbol of the token', async () => {
    const symbol = 'tacpufETH';
    contractTestingUtils.mockCall('symbol', [symbol]);

    const result = await handler.symbol();
    expect(result).toBe(symbol);
  });

  it('should deposit assets to the vault with controller', async () => {
    const amount = 10n;
    const receiver = generateAddress();
    const controller = generateAddress();
    const mockTxHash = '0x1234567890abcdef';

    const mockContract = {
      write: {
        deposit: jest.fn().mockResolvedValue(mockTxHash),
      },
    };

    const getContractSpy = jest
      .spyOn(handler, 'getContract')
      .mockReturnValue(mockContract as any);

    const txHash = await handler.deposit(amount, receiver, controller);

    expect(getContractSpy).toHaveBeenCalled();
    expect(mockContract.write.deposit).toHaveBeenCalledWith(
      [amount, receiver, controller],
      {
        account: { address: mockAccount, type: 'json-rpc' },
        chain: VIEM_CHAINS[Chain.Holesky],
      },
    );
    expect(txHash).toBe(mockTxHash);

    getContractSpy.mockRestore();
  });

  it('should deposit assets to the vault without controller', async () => {
    const amount = 10n;
    const receiver = generateAddress();
    const mockTxHash = '0x1234567890abcdef';

    const mockContract = {
      write: {
        deposit: jest.fn().mockResolvedValue(mockTxHash),
      },
    };

    const getContractSpy = jest
      .spyOn(handler, 'getContract')
      .mockReturnValue(mockContract as any);

    const txHash = await handler.deposit(amount, receiver);

    expect(getContractSpy).toHaveBeenCalled();
    expect(mockContract.write.deposit).toHaveBeenCalledWith(
      [amount, receiver],
      {
        account: { address: mockAccount, type: 'json-rpc' },
        chain: VIEM_CHAINS[Chain.Holesky],
      },
    );
    expect(txHash).toBe(mockTxHash);

    getContractSpy.mockRestore();
  });

  it('should synchronously deposit assets to the vault', async () => {
    const amount = 10n;
    const receiver = generateAddress();
    const referral = generateAddress();
    contractTestingUtils.mockTransaction('syncDeposit');

    const txHash = await handler.syncDeposit(amount, receiver, referral);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should synchronously deposit assets to the vault with default referral', async () => {
    const amount = 10n;
    const receiver = generateAddress();
    contractTestingUtils.mockTransaction('syncDeposit');

    const txHash = await handler.syncDeposit(amount, receiver);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should request an asynchronous deposit to the vault', async () => {
    const amount = 10n;
    const receiver = generateAddress();
    const controller = generateAddress();
    const mockTxHash = '0x1234567890abcdef';

    const mockContract = {
      write: {
        requestDeposit: jest.fn().mockResolvedValue(mockTxHash),
      },
    };

    const getContractSpy = jest
      .spyOn(handler, 'getContract')
      .mockReturnValue(mockContract as any);

    const txHash = await handler.requestDeposit(amount, receiver, controller);

    expect(getContractSpy).toHaveBeenCalled();
    expect(mockContract.write.requestDeposit).toHaveBeenCalledWith(
      [amount, receiver, controller],
      {
        account: { address: mockAccount, type: 'json-rpc' },
        chain: VIEM_CHAINS[Chain.Holesky],
        value: amount,
      },
    );
    expect(txHash).toBe(mockTxHash);

    getContractSpy.mockRestore();
  });

  it('should request an asynchronous deposit to the vault with default controller', async () => {
    const amount = 10n;
    const receiver = generateAddress();
    const mockTxHash = '0x1234567890abcdef';

    const mockContract = {
      write: {
        requestDeposit: jest.fn().mockResolvedValue(mockTxHash),
      },
    };

    const getContractSpy = jest
      .spyOn(handler, 'getContract')
      .mockReturnValue(mockContract as any);

    const txHash = await handler.requestDeposit(amount, receiver);

    expect(getContractSpy).toHaveBeenCalled();
    expect(mockContract.write.requestDeposit).toHaveBeenCalledWith(
      [amount, receiver, receiver],
      {
        account: { address: mockAccount, type: 'json-rpc' },
        chain: VIEM_CHAINS[Chain.Holesky],
        value: amount,
      },
    );
    expect(txHash).toBe(mockTxHash);

    getContractSpy.mockRestore();
  });

  it('should withdraw assets from the vault', async () => {
    const assets = 10n;
    const receiver = generateAddress();
    const controller = generateAddress();
    contractTestingUtils.mockTransaction('withdraw');

    const txHash = await handler.withdraw(assets, receiver, controller);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should withdraw assets from the vault with default controller', async () => {
    const assets = 10n;
    const receiver = generateAddress();
    contractTestingUtils.mockTransaction('withdraw');

    const txHash = await handler.withdraw(assets, receiver);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should redeem shares from the vault', async () => {
    const shares = 10n;
    const receiver = generateAddress();
    const controller = generateAddress();
    contractTestingUtils.mockTransaction('redeem');

    const txHash = await handler.redeem(shares, receiver, controller);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should redeem shares from the vault with default controller', async () => {
    const shares = 10n;
    const receiver = generateAddress();
    contractTestingUtils.mockTransaction('redeem');

    const txHash = await handler.redeem(shares, receiver);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should request an asynchronous redeem', async () => {
    const shares = 10n;
    const receiver = generateAddress();
    const controller = generateAddress();
    contractTestingUtils.mockTransaction('requestRedeem');

    const txHash = await handler.requestRedeem(shares, receiver, controller);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should request an asynchronous redeem with default controller', async () => {
    const shares = 10n;
    const receiver = generateAddress();
    contractTestingUtils.mockTransaction('requestRedeem');

    const txHash = await handler.requestRedeem(shares, receiver);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should preview deposit', async () => {
    const amount = 10n;
    const preview = 20n;
    contractTestingUtils.mockCall('previewDeposit', [preview]);

    const result = await handler.previewDeposit(amount);
    expect(result).toBe(preview);
  });

  it('should preview withdraw', async () => {
    const assets = 10n;
    const preview = 20n;
    contractTestingUtils.mockCall('previewWithdraw', [preview]);

    const result = await handler.previewWithdraw(assets);
    expect(result).toBe(preview);
  });

  it('should preview redeem', async () => {
    const shares = 10n;
    const preview = 20n;
    contractTestingUtils.mockCall('previewRedeem', [preview]);

    const result = await handler.previewRedeem(shares);
    expect(result).toBe(preview);
  });

  // Using spy as overloading functions are not supported otherwise.
  it('should convert to assets', async () => {
    const shares = 10n;
    const assets = 20n;

    const mockContract = {
      read: {
        convertToAssets: jest.fn().mockResolvedValue(assets),
      },
    };

    const getContractSpy = jest
      .spyOn(handler, 'getContract')
      .mockReturnValue(mockContract as any);

    const result = await handler.convertToAssets(shares);

    expect(getContractSpy).toHaveBeenCalled();
    expect(mockContract.read.convertToAssets).toHaveBeenCalledWith([shares]);
    expect(result).toBe(assets);

    getContractSpy.mockRestore();
  });

  // Using spy as overloading functions are not supported otherwise.
  it('should convert to shares', async () => {
    const assets = 10n;
    const shares = 20n;

    const mockContract = {
      read: {
        convertToShares: jest.fn().mockResolvedValue(shares),
      },
    };

    const getContractSpy = jest
      .spyOn(handler, 'getContract')
      .mockReturnValue(mockContract as any);

    const result = await handler.convertToShares(assets);

    expect(getContractSpy).toHaveBeenCalled();
    expect(mockContract.read.convertToShares).toHaveBeenCalledWith([assets]);
    expect(result).toBe(shares);

    getContractSpy.mockRestore();
  });
});
