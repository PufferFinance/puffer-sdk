import { WalletClient, PublicClient, isHash } from 'viem';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../../test/setup-tests';
import { NonRestakingWithdrawalCredentials } from '../../abis/mainnet/NonRestakingWithdrawalCredentials';
import { NonRestakingWithdrawalCredentialsHandler } from '../non-restaking-withdrawal-credentials-handler';
import { generateAddress } from '../../../../test/mocks/address';
import { InvalidContractAddressError } from '../../../errors/validation-errors';
import { Chain } from '../../../chains/constants';

describe('NonRestakingWithdrawalCredentialsHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(
    NonRestakingWithdrawalCredentials,
  );
  let handler: NonRestakingWithdrawalCredentialsHandler;
  let walletClient: WalletClient;
  let publicClient: PublicClient;

  beforeEach(() => {
    walletClient = setupTestWalletClient(Chain.Holesky, undefined, mockAccount);
    publicClient = setupTestPublicClient();

    handler = new NonRestakingWithdrawalCredentialsHandler(
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
    contractTestingUtils.mockCall('authority', [address]);

    expect(() => handler.authority()).toThrow(InvalidContractAddressError);
  });

  describe('with address set', () => {
    beforeEach(() => {
      handler.withAddress(generateAddress());
    });

    it('should get the authority', async () => {
      const address = generateAddress();
      contractTestingUtils.mockCall('authority', [address]);

      const result = await handler.authority();
      expect(result.toLowerCase()).toBe(address);
    });

    it('should get the consolidation request fee', async () => {
      const fee = 1000000000n; // 1 gwei
      contractTestingUtils.mockCall('getConsolidationRequestFee', [fee]);

      const result = await handler.getConsolidationRequestFee();
      expect(result).toBe(fee);
    });

    it('should get the withdrawal request fee', async () => {
      const fee = 1000000000n; // 1 gwei
      contractTestingUtils.mockCall('getWithdrawalRequestFee', [fee]);

      const result = await handler.getWithdrawalRequestFee();
      expect(result).toBe(fee);
    });

    it('should get the vault address', async () => {
      const address = generateAddress();
      contractTestingUtils.mockCall('vault', [address]);

      const result = await handler.vault();
      expect(result.toLowerCase()).toBe(address);
    });

    it('should request consolidation', async () => {
      const requests = [
        {
          srcPubkey:
            '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as `0x${string}`,
          targetPubkey:
            '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef12345678' as `0x${string}`,
        },
      ];
      const value = 1000000000n; // 1 gwei
      contractTestingUtils.mockTransaction('requestConsolidation');

      const txHash = await handler.requestConsolidation(requests, value);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should request withdrawal', async () => {
      const requests = [
        {
          pubkey:
            '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as `0x${string}`,
          amountGwei: BigInt(32_000_000_000),
        },
      ];
      const value = 1000000000n; // 1 gwei
      contractTestingUtils.mockTransaction('requestWithdrawal');

      const txHash = await handler.requestWithdrawal(requests, value);
      expect(isHash(txHash)).toBeTruthy();
    });

    it('should withdraw ETH', async () => {
      contractTestingUtils.mockTransaction('withdrawETH');

      const txHash = await handler.withdrawETH();
      expect(isHash(txHash)).toBeTruthy();
    });
  });
});
