import { isHash } from 'viem';
import { L1_REWARD_MANAGER_ABIS } from '../abis/l1-reward-manager-abis';
import { Chain } from '../../chains/constants';
import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { L1RewardManagerHandler } from './l1-reward-manager-handler';
import { generateAddress } from '../../../test/mocks/address';

describe('L1RewardManagerHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(
    L1_REWARD_MANAGER_ABIS[Chain.Bsc].L1RewardManager,
  );
  let handler: L1RewardManagerHandler;

  beforeEach(() => {
    testingUtils.mockConnectedWallet([mockAccount], { chainId: Chain.Bsc });
    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    handler = new L1RewardManagerHandler(Chain.Bsc, walletClient, publicClient);
  });

  it('should get the bridge for the given address', async () => {
    const mockBridge = { destinationDomainId: 1 };
    contractTestingUtils.mockCall('getBridge', [mockBridge]);

    const bridgeAddress = generateAddress();
    expect(await handler.getBridge(bridgeAddress)).toEqual(mockBridge);
  });

  it('should claim rewards through claim orders', async () => {
    contractTestingUtils.mockTransaction('setL2RewardClaimer');

    const bridgeAddress = generateAddress();
    const claimer = generateAddress();
    const { transact, estimate } = handler.setL2RewardClaimer(
      mockAccount,
      bridgeAddress,
      claimer,
    );

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });
});
