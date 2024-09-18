import { isHash } from 'viem';
import { L2_REWARD_MANAGER_ABIS } from '../abis/l2-reward-manager-abis';
import { Chain } from '../../chains/constants';
import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import {
  ClaimOrder,
  L2RewardManagerHandler,
} from './l2-reward-manager-handler';
import { generateAddress } from '../../../test/mocks/address';
import { InvalidInputError } from '../../errors/validation-errors';

describe('L2RewardManagerHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(
    L2_REWARD_MANAGER_ABIS[Chain.Holesky].L2RewardManager,
  );
  let handler: L2RewardManagerHandler;

  beforeEach(() => {
    testingUtils.mockConnectedWallet([mockAccount], { chainId: Chain.Holesky });
    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    handler = new L2RewardManagerHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
  });

  it('should get the authority', async () => {
    const mockAuthority = generateAddress();
    contractTestingUtils.mockCall('authority', [mockAuthority]);

    const authority = await handler.authority();
    expect(authority.toLowerCase()).toEqual(mockAuthority);
  });

  it('should get the claiming delay', async () => {
    const mockDelay = 123n;
    contractTestingUtils.mockCall('getClaimingDelay', [mockDelay]);

    expect(await handler.getClaimingDelay()).toEqual(mockDelay);
  });

  it('should get the epoch record', async () => {
    const mockEpochRecord = {
      startEpoch: 1n,
      endEpoch: 2n,
      timeBridged: 1,
      ethToPufETHRate: 3n,
      pufETHAmount: 4n,
      ethAmount: 5n,
      rewardRoot: generateAddress(32),
    };
    contractTestingUtils.mockCall('getEpochRecord', [mockEpochRecord]);

    expect(await handler.getEpochRecord(generateAddress(32))).toEqual(
      mockEpochRecord,
    );
  });

  it('should get the interval ID', async () => {
    const mockIntervalId = generateAddress(32);
    contractTestingUtils.mockCall('getIntervalId', [mockIntervalId]);

    expect(await handler.getIntervalId(1n, 2n)).toEqual(mockIntervalId);
  });

  it('should get claimer of the rewards', async () => {
    const mockClaimer = generateAddress();
    contractTestingUtils.mockCall('getRewardsClaimer', [mockClaimer]);

    const claimer = await handler.getRewardsClaimer(mockAccount);
    expect(claimer.toLowerCase()).toEqual(mockClaimer);
  });

  it('should check if the reward has been claimed', async () => {
    contractTestingUtils.mockCall('isClaimed', [true]);

    const isClaimed = await handler.isClaimed(mockAccount, generateAddress(32));
    expect(isClaimed).toEqual(true);
  });

  it('should check if the claiming is locked', async () => {
    contractTestingUtils.mockCall('isClaimingLocked', [true]);
    expect(await handler.isClaimingLocked(generateAddress(32))).toEqual(true);
  });

  it('should claim rewards through claim orders', async () => {
    const mockClaimOrders: ClaimOrder[] = [
      {
        account: generateAddress(),
        amount: 1n,
        isL1Contract: false,
        intervalId: generateAddress(32),
        merkleProof: [generateAddress(32)],
      },
    ];
    contractTestingUtils.mockTransaction('claimRewards');

    const { transact, estimate } = handler.claimRewards(
      mockAccount,
      mockClaimOrders,
    );

    expect(typeof (await estimate())).toBe('bigint');
    expect(isHash(await transact())).toBe(true);
  });

  it('should throw error if claim orders are empty', async () => {
    const mockClaimOrders: ClaimOrder[] = [];
    expect(() => handler.claimRewards(mockAccount, mockClaimOrders)).toThrow(
      InvalidInputError,
    );
  });
});
