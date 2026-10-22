import { isHash } from 'viem';
import { Chain } from '../../../chains/constants';
import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../../test/setup-tests';
import {
  IntervalStatus,
  L1RewardManagerHandler,
} from '../l1-reward-manager-handler';
import { ClaimOrder } from '../l2-reward-manager-handler';
import { generateAddress } from '../../../../test/mocks/address';
import { InvalidInputError } from '../../../errors/validation-errors';
import { L1RewardManager } from '../../abis/mainnet/L1RewardManager';

describe('L1RewardManagerHandler', () => {
  const contractTestingUtils =
    testingUtils.generateContractUtils(L1RewardManager);
  let handler: L1RewardManagerHandler;

  beforeEach(() => {
    testingUtils.mockConnectedWallet([mockAccount], { chainId: Chain.Holesky });
    const walletClient = setupTestWalletClient();
    const publicClient = setupTestPublicClient();

    handler = new L1RewardManagerHandler(
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

  it('should get the current interval end epoch', async () => {
    const mockEpoch = 100n;
    contractTestingUtils.mockCall('getCurrentIntervalEndEpoch', [mockEpoch]);

    expect(await handler.getCurrentIntervalEndEpoch()).toEqual(mockEpoch);
  });

  it('should get the last interval end epoch', async () => {
    const mockEpoch = 99n;
    contractTestingUtils.mockCall('getLastIntervalEndEpoch', [mockEpoch]);

    expect(await handler.getLastIntervalEndEpoch()).toEqual(mockEpoch);
  });

  it('should get the interval', async () => {
    const mockInterval = {
      startEpoch: 1n,
      endEpoch: 2n,
      claimableAt: 3,
      pufETHAmount: 4n,
      ethAmount: 5n,
      claimedPufETHAmount: 6n,
      status: IntervalStatus.Active,
      ethToPufETHRate: 7n,
      rewardsRoot: generateAddress(32),
    };
    contractTestingUtils.mockCall('getInterval', [mockInterval]);

    expect(await handler.getInterval(generateAddress(32))).toEqual(
      mockInterval,
    );
  });

  it('should get the interval ID', async () => {
    const mockIntervalId = generateAddress(32);
    contractTestingUtils.mockCall('getIntervalId', [mockIntervalId]);

    expect(await handler.getIntervalId(1n, 2n)).toEqual(mockIntervalId);
  });

  it('should get the newest interval ID', async () => {
    const mockIntervalId = generateAddress(32);
    contractTestingUtils.mockCall('getNewestIntervalId', [mockIntervalId]);

    expect(await handler.getNewestIntervalId()).toEqual(mockIntervalId);
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
