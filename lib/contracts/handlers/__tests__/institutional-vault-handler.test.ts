import { WalletClient, PublicClient, isHash, padHex, stringToHex } from 'viem';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../../test/setup-tests';
import { InstitutionalVault } from '../../abis/mainnet/InstitutionalVault';
import { InstitutionalVaultHandler } from '../institutional-vault-handler';
import { generateAddress } from '../../../../test/mocks/address';
import { InvalidContractAddressError } from '../../../errors/validation-errors';
import { Chain } from '../../../chains/constants';

describe('InstitutionalVaultHandler', () => {
  const contractTestingUtils =
    testingUtils.generateContractUtils(InstitutionalVault);
  let handler: InstitutionalVaultHandler;
  let walletClient: WalletClient;
  let publicClient: PublicClient;

  beforeEach(() => {
    walletClient = setupTestWalletClient(Chain.Holesky, undefined, mockAccount);
    publicClient = setupTestPublicClient();

    handler = new InstitutionalVaultHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
  });

  it('should set and get the address used by the handler', () => {
    const address = generateAddress();
    handler.withAddress(address);

    expect(handler.getAddress()).toBe(address);
  });

  it('should throw an error if the address is not set and a method is called', () => {
    const address = generateAddress();
    contractTestingUtils.mockCall('BEACON_DEPOSIT_CONTRACT', [address]);

    expect(() => handler.getBeaconDepositContract()).toThrow(
      InvalidContractAddressError,
    );
  });

  describe('with address set', () => {
    beforeEach(() => {
      handler.withAddress(generateAddress());
    });

    it('should get the beacon deposit contract', async () => {
      const address = generateAddress();
      contractTestingUtils.mockCall('BEACON_DEPOSIT_CONTRACT', [address]);

      const result = await handler.getBeaconDepositContract();
      expect(result.toLowerCase()).toBe(address);
    });

    it('should get the eigen delegation manager', async () => {
      const address = generateAddress();
      contractTestingUtils.mockCall('EIGEN_DELEGATION_MANAGER', [address]);

      const result = await handler.getEigenDelegationManager();
      expect(result.toLowerCase()).toBe(address);
    });

    it('should get the eigen pod manager', async () => {
      const address = generateAddress();
      contractTestingUtils.mockCall('EIGEN_POD_MANAGER', [address]);

      const result = await handler.getEigenPodManager();
      expect(result.toLowerCase()).toBe(address);
    });

    it('should get the eigen pod', async () => {
      const address = generateAddress();
      contractTestingUtils.mockCall('getEigenPod', [address]);

      const result = await handler.getEigenPod();
      expect(result.toLowerCase()).toBe(address);
    });

    it('should get the allowance', async () => {
      const owner = generateAddress();
      const spender = generateAddress();
      const amount = 10n;
      contractTestingUtils.mockCall('allowance', [amount]);

      const result = await handler.allowance(owner, spender);
      expect(result).toBe(amount);
    });

    it('should approve the spender to spend tokens', async () => {
      contractTestingUtils.mockTransaction('approve');
      const mockSpender = padHex('0x', { size: 20 });
      const amount = 10n;

      const txHash = await handler.approve(mockSpender, amount);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should get the asset', async () => {
      const address = generateAddress();
      contractTestingUtils.mockCall('asset', [address]);

      const result = await handler.asset();
      expect(result.toLowerCase()).toBe(address);
    });

    it('should get the authority', async () => {
      const address = generateAddress();
      contractTestingUtils.mockCall('authority', [address]);

      const result = await handler.authority();
      expect(result.toLowerCase()).toBe(address);
    });

    it('should get the balance of the address', async () => {
      const address = generateAddress();
      const amount = 10n;
      contractTestingUtils.mockCall('balanceOf', [amount]);

      const result = await handler.balanceOf(address);
      expect(result).toBe(amount);
    });

    it('should get the decimals', async () => {
      const decimals = 18;
      contractTestingUtils.mockCall('decimals', [decimals]);

      const result = await handler.decimals();
      expect(result).toBe(decimals);
    });

    it('should get the name', async () => {
      const name = 'Test';
      contractTestingUtils.mockCall('name', [name]);

      const result = await handler.name();
      expect(result).toBe(name);
    });

    it('should get the symbol', async () => {
      const symbol = 'TEST';
      contractTestingUtils.mockCall('symbol', [symbol]);

      const result = await handler.symbol();
      expect(result).toBe(symbol);
    });

    it('should get the total assets', async () => {
      const amount = 10n;
      contractTestingUtils.mockCall('totalAssets', [amount]);

      const result = await handler.totalAssets();
      expect(result).toBe(amount);
    });

    it('should complete queued withdrawals', async () => {
      const withdrawals = [
        {
          staker: generateAddress(),
          delegatedTo: generateAddress(),
          withdrawer: generateAddress(),
          nonce: 1n,
          startBlock: 1,
          strategies: [generateAddress()],
          scaledShares: [1n],
        },
      ];
      const receiveAsTokens = [true];
      contractTestingUtils.mockTransaction('completeQueuedWithdrawals');

      const txHash = await handler.completeQueuedWithdrawals(
        withdrawals,
        receiveAsTokens,
      );
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should get the total supply', async () => {
      const amount = 10n;
      contractTestingUtils.mockCall('totalSupply', [amount]);

      const result = await handler.totalSupply();
      expect(result).toBe(amount);
    });

    it('should convert shares to assets', async () => {
      const shares = 10n;
      const amount = 20n;
      contractTestingUtils.mockCall('convertToAssets', [amount]);

      const result = await handler.convertToAssets(shares);
      expect(result).toBe(amount);
    });

    it('should convert assets to shares', async () => {
      const assets = 10n;
      const amount = 20n;
      contractTestingUtils.mockCall('convertToShares', [amount]);

      const result = await handler.convertToShares(assets);
      expect(result).toBe(amount);
    });

    it('should deposit assets into the vault', async () => {
      const assets = 10n;
      const receiver = generateAddress();
      contractTestingUtils.mockTransaction('deposit');

      const txHash = await handler.deposit(assets, receiver);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should deposit ETH into the vault', async () => {
      const receiver = generateAddress();
      const value = 10n;
      contractTestingUtils.mockTransaction('depositETH');

      const txHash = await handler.depositETH(receiver, value);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should get the non restaked validator ETH', async () => {
      const amount = 10n;
      contractTestingUtils.mockCall('getNonRestakedValidatorETH', [amount]);

      const result = await handler.getNonRestakedValidatorETH();
      expect(result).toBe(amount);
    });

    it('should get the restaked validator ETH', async () => {
      const amount = 10n;
      contractTestingUtils.mockCall('getRestakedValidatorETH', [amount]);

      const result = await handler.getRestakedValidatorETH();
      expect(result).toBe(amount);
    });

    it('should get the withdrawal credentials', async () => {
      const credentials = generateAddress();
      contractTestingUtils.mockCall('getWithdrawalCredentials', [credentials]);

      const result = await handler.getWithdrawalCredentials();
      expect(result.toLowerCase()).toBe(credentials);
    });

    it('should get the max deposit', async () => {
      const address = generateAddress();
      const amount = 10n;
      contractTestingUtils.mockCall('maxDeposit', [amount]);

      const result = await handler.maxDeposit(address);
      expect(result).toBe(amount);
    });

    it('should get the max mint', async () => {
      const address = generateAddress();
      const amount = 10n;
      contractTestingUtils.mockCall('maxMint', [amount]);

      const result = await handler.maxMint(address);
      expect(result).toBe(amount);
    });

    it('should get the max redeem', async () => {
      const address = generateAddress();
      const amount = 10n;
      contractTestingUtils.mockCall('maxRedeem', [amount]);

      const result = await handler.maxRedeem(address);
      expect(result).toBe(amount);
    });

    it('should get the max withdraw', async () => {
      const address = generateAddress();
      const amount = 10n;
      contractTestingUtils.mockCall('maxWithdraw', [amount]);

      const result = await handler.maxWithdraw(address);
      expect(result).toBe(amount);
    });

    it('should mint shares into the vault', async () => {
      const shares = 10n;
      const receiver = generateAddress();
      contractTestingUtils.mockTransaction('mint');

      const txHash = await handler.mint(shares, receiver);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should preview deposit', async () => {
      const assets = 10n;
      const amount = 20n;
      contractTestingUtils.mockCall('previewDeposit', [amount]);

      const result = await handler.previewDeposit(assets);
      expect(result).toBe(amount);
    });

    it('should preview mint', async () => {
      const shares = 10n;
      const amount = 20n;
      contractTestingUtils.mockCall('previewMint', [amount]);

      const result = await handler.previewMint(shares);
      expect(result).toBe(amount);
    });

    it('should preview redeem', async () => {
      const shares = 10n;
      const amount = 20n;
      contractTestingUtils.mockCall('previewRedeem', [amount]);

      const result = await handler.previewRedeem(shares);
      expect(result).toBe(amount);
    });

    it('should preview withdraw', async () => {
      const shares = 10n;
      const amount = 20n;
      contractTestingUtils.mockCall('previewWithdraw', [amount]);

      const result = await handler.previewWithdraw(shares);
      expect(result).toBe(amount);
    });

    it('should queue withdrawals', async () => {
      const shares = 10n;
      contractTestingUtils.mockTransaction('queueWithdrawals');

      const txHash = await handler.queueWithdrawals(shares);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should redeem shares to the receiver', async () => {
      const shares = 10n;
      const receiver = generateAddress();
      const owner = generateAddress();
      contractTestingUtils.mockTransaction('redeem');

      const txHash = await handler.redeem(shares, receiver, owner);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should set the validators ETH', async () => {
      const restakedValidatorsETH = 10n;
      const nonRestakedValidatorsETH = 10n;
      contractTestingUtils.mockTransaction('setValidatorsETH');

      const txHash = await handler.setValidatorsETH(
        restakedValidatorsETH,
        nonRestakedValidatorsETH,
      );
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should start non restaking validators', async () => {
      const pubKeys = [generateAddress()];
      const signatures = [generateAddress()];
      const depositDataRoots = [generateAddress(32)];
      contractTestingUtils.mockTransaction('startNonRestakingValidators');

      const txHash = await handler.startNonRestakingValidators(
        pubKeys,
        signatures,
        depositDataRoots,
      );
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should start restaking validators', async () => {
      const pubKeys = [generateAddress()];
      const signatures = [generateAddress()];
      const depositDataRoots = [generateAddress(32)];
      contractTestingUtils.mockTransaction('startRestakingValidators');

      const txHash = await handler.startRestakingValidators(
        pubKeys,
        signatures,
        depositDataRoots,
      );
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should withdraw assets from the vault', async () => {
      const assets = 10n;
      const receiver = generateAddress();
      const owner = generateAddress();
      contractTestingUtils.mockTransaction('withdraw');

      const txHash = await handler.withdraw(assets, receiver, owner);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should transfer tokens to the receiver', async () => {
      const to = generateAddress();
      const amount = 10n;
      contractTestingUtils.mockTransaction('transfer');

      const txHash = await handler.transfer(to, amount);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should transfer tokens from the owner to the receiver', async () => {
      const from = generateAddress();
      const to = generateAddress();
      const amount = 10n;
      contractTestingUtils.mockTransaction('transferFrom');

      const txHash = await handler.transferFrom(from, to, amount);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should call a custom external function', async () => {
      const target = generateAddress();
      const data = stringToHex('startCheckpoint');
      const value = 10n;
      contractTestingUtils.mockTransaction('customExternalCall');

      const txHash = await handler.customExternalCall(target, data, value);
      expect(isHash(txHash)).toBeTruthy();
    });
  });
});
