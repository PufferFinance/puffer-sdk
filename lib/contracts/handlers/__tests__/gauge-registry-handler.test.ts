import { WalletClient, PublicClient, isHash } from 'viem';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../../test/setup-test-clients';
import { testingUtils } from '../../../../test/setup-tests';
import { GaugeRegistry } from '../../abis/mainnet/GaugeRegistry';
import { GaugeRegistryHandler } from '../gauge-registry-handler';
import { generateAddress } from '../../../../test/mocks/address';
import { Chain } from '../../../chains/constants';

describe('GaugeRegistryHandler', () => {
  const contractTestingUtils =
    testingUtils.generateContractUtils(GaugeRegistry);
  let handler: GaugeRegistryHandler;
  let walletClient: WalletClient;
  let publicClient: PublicClient;

  beforeEach(() => {
    walletClient = setupTestWalletClient();
    publicClient = setupTestPublicClient();

    handler = new GaugeRegistryHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
  });

  it('should get the owner of the contract', async () => {
    const owner = generateAddress();
    contractTestingUtils.mockCall('owner', [owner]);

    const result = await handler.owner();
    expect(result.toLowerCase()).toBe(owner.toLowerCase());
  });

  it('should get the pending owner of the contract', async () => {
    const pendingOwner = generateAddress();
    contractTestingUtils.mockCall('pendingOwner', [pendingOwner]);

    const result = await handler.pendingOwner();
    expect(result.toLowerCase()).toBe(pendingOwner.toLowerCase());
  });

  it('should check if a gauge exists', async () => {
    const gauge = generateAddress();
    const exists = true;
    contractTestingUtils.mockCall('gaugeExists', [exists]);

    const result = await handler.gaugeExists(gauge);
    expect(result).toBe(exists);
  });

  it('should check if a gauge is active', async () => {
    const gauge = generateAddress();
    const isActive = true;
    contractTestingUtils.mockCall('isActive', [isActive]);

    const result = await handler.isActive(gauge);
    expect(result).toBe(isActive);
  });

  it('should get gauge information', async () => {
    const gauge = generateAddress();
    const gaugeInfo = {
      active: true,
      created: 1234567890,
      metadataURI: 'ipfs://QmExample',
    };
    contractTestingUtils.mockCall('getGauge', [gaugeInfo]);

    const result = await handler.getGauge(gauge);
    expect(result).toEqual(gaugeInfo);
  });

  it('should get the list of all gauges', async () => {
    const gaugeList = [
      generateAddress(),
      generateAddress(),
      generateAddress(),
    ].map((address) => address.toLowerCase());
    contractTestingUtils.mockCall('getGaugeList', [gaugeList]);

    const result = (await handler.getGaugeList()).map((address) =>
      address.toLowerCase(),
    );
    expect(result).toEqual(gaugeList);
  });

  it('should register a new gauge', async () => {
    const gauge = generateAddress();
    const metadataURI = 'ipfs://QmExample';
    contractTestingUtils.mockTransaction('registerGauge');

    const txHash = await handler.registerGauge(gauge, metadataURI);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should activate a gauge', async () => {
    const gauge = generateAddress();
    contractTestingUtils.mockTransaction('activateGauge');

    const txHash = await handler.activateGauge(gauge);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should deactivate a gauge', async () => {
    const gauge = generateAddress();
    contractTestingUtils.mockTransaction('deactivateGauge');

    const txHash = await handler.deactivateGauge(gauge);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should update gauge metadata', async () => {
    const gauge = generateAddress();
    const metadataURI = 'ipfs://QmNewExample';
    contractTestingUtils.mockTransaction('updateGaugeMetadata');

    const txHash = await handler.updateGaugeMetadata(gauge, metadataURI);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should transfer ownership to a new owner', async () => {
    const newOwner = generateAddress();
    contractTestingUtils.mockTransaction('transferOwnership');

    const txHash = await handler.transferOwnership(newOwner);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should accept ownership transfer', async () => {
    contractTestingUtils.mockTransaction('acceptOwnership');

    const txHash = await handler.acceptOwnership();
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should renounce ownership', async () => {
    contractTestingUtils.mockTransaction('renounceOwnership');

    const txHash = await handler.renounceOwnership();
    expect(isHash(txHash)).toBeTruthy();
  });
});
