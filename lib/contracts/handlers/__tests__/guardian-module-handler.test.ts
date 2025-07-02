import { PublicClient, WalletClient } from 'viem';
import { Chain } from '../../../chains/constants';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../../test/setup-tests';
import { GuardianModuleHandler } from '../guardian-module-handler';
import { GuardianModule } from '../../abis/mainnet/GuardianModule';
import { generateAddress } from '../../../../test/mocks/address';

describe('GuardianModuleHandler', () => {
  const contractTestingUtils =
    testingUtils.generateContractUtils(GuardianModule);
  let handler: GuardianModuleHandler;
  let walletClient: WalletClient;
  let publicClient: PublicClient;

  beforeEach(() => {
    walletClient = setupTestWalletClient();
    publicClient = setupTestPublicClient();

    handler = new GuardianModuleHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
  });

  it('should get the ejection threshold', async () => {
    const ejectionThreshold = 10n;
    contractTestingUtils.mockCall('getEjectionThreshold', [ejectionThreshold]);

    const result = await handler.getEjectionThreshold();
    expect(result).toBe(ejectionThreshold);
  });

  it('should get the guardians', async () => {
    const guardians = [generateAddress(), generateAddress()];
    contractTestingUtils.mockCall('getGuardians', [guardians]);

    const result = await handler.getGuardians();
    expect(result.map((address) => address.toLowerCase())).toEqual(guardians);
  });

  it('should get the guardians enclave address', async () => {
    const guardian = generateAddress();
    const enclaveAddress = generateAddress();
    contractTestingUtils.mockCall('getGuardiansEnclaveAddress', [
      enclaveAddress,
    ]);

    const result = await handler.getGuardiansEnclaveAddress(guardian);
    expect(result.toLowerCase()).toBe(enclaveAddress);
  });

  it('should get the guardians enclave addresses', async () => {
    const enclaveAddresses = [generateAddress(), generateAddress()];
    contractTestingUtils.mockCall('getGuardiansEnclaveAddresses', [
      enclaveAddresses,
    ]);

    const result = await handler.getGuardiansEnclaveAddresses();
    expect(result.map((address) => address.toLowerCase())).toEqual(
      enclaveAddresses,
    );
  });

  it('should get the guardians enclave pubkeys', async () => {
    const enclavePubkeys = [generateAddress(), generateAddress()];
    contractTestingUtils.mockCall('getGuardiansEnclavePubkeys', [
      enclavePubkeys,
    ]);

    const result = await handler.getGuardiansEnclavePubkeys();
    expect(result.map((pubkey) => pubkey.toLowerCase())).toEqual(
      enclavePubkeys,
    );
  });

  it('should validate the guardians enclave signatures', async () => {
    const enclaveSignatures = [generateAddress(), generateAddress()];
    const signedMessageHash = generateAddress(32);
    contractTestingUtils.mockCall('validateGuardiansEnclaveSignatures', [true]);

    const result = await handler.validateGuardiansEnclaveSignatures(
      enclaveSignatures,
      signedMessageHash,
    );
    expect(result).toBe(true);
  });

  it('should get the mrenclave', async () => {
    const mrenclave = generateAddress(32);
    contractTestingUtils.mockCall('getMrenclave', [mrenclave]);

    const result = await handler.getMrenclave();
    expect(result.toLowerCase()).toBe(mrenclave);
  });

  it('should get the mrsigner', async () => {
    const mrsigner = generateAddress(32);
    contractTestingUtils.mockCall('getMrsigner', [mrsigner]);

    const result = await handler.getMrsigner();
    expect(result.toLowerCase()).toBe(mrsigner);
  });

  it('should get the threshold', async () => {
    const threshold = 10n;
    contractTestingUtils.mockCall('getThreshold', [threshold]);

    const result = await handler.getThreshold();
    expect(result).toBe(threshold);
  });

  it('should check if the guardian module is consuming scheduled operations', async () => {
    const isConsumingScheduledOp = generateAddress(4);
    contractTestingUtils.mockCall('isConsumingScheduledOp', [
      isConsumingScheduledOp,
    ]);

    const result = await handler.isConsumingScheduledOp();
    expect(result.toLowerCase()).toBe(isConsumingScheduledOp);
  });

  it('should check if an account is a guardian', async () => {
    const account = generateAddress();
    const isGuardian = true;
    contractTestingUtils.mockCall('isGuardian', [isGuardian]);

    const result = await handler.isGuardian(account);
    expect(result).toBe(isGuardian);
  });

  it('should remove a guardian', async () => {
    const guardian = generateAddress();
    contractTestingUtils.mockTransaction('removeGuardian');

    const txHash = await handler.removeGuardian(guardian, mockAccount);
    expect(txHash).toBeDefined();
  });
});
