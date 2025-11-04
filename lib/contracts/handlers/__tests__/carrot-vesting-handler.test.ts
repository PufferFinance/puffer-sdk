import { WalletClient, PublicClient, isHash, padHex } from 'viem';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../../test/setup-test-clients';
import { testingUtils } from '../../../../test/setup-tests';
import { CarrotVesting } from '../../abis/mainnet/CarrotVesting';
import { CarrotVestingHandler } from '../carrot-vesting-handler';
import { generateAddress } from '../../../../test/mocks/address';
import { Chain } from '../../../chains/constants';

describe('CarrotVestingHandler', () => {
  const contractTestingUtils =
    testingUtils.generateContractUtils(CarrotVesting);
  let handler: CarrotVestingHandler;
  let walletClient: WalletClient;
  let publicClient: PublicClient;

  beforeEach(() => {
    walletClient = setupTestWalletClient();
    publicClient = setupTestPublicClient();

    handler = new CarrotVestingHandler(
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

  it('should calculate the claimable amount for a user', async () => {
    const user = generateAddress();
    const claimableAmount = 100n;
    contractTestingUtils.mockCall('calculateClaimableAmount', [
      claimableAmount,
    ]);

    const result = await handler.calculateClaimableAmount(user);
    expect(result).toBe(claimableAmount);
  });

  it('should get the exchange rate', async () => {
    const exchangeRate = 1000000n;
    contractTestingUtils.mockCall('EXCHANGE_RATE', [exchangeRate]);

    const result = await handler.exchangeRate();
    expect(result).toBe(exchangeRate);
  });

  it('should claim vested tokens', async () => {
    contractTestingUtils.mockTransaction('claim');

    const txHash = await handler.claim();
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should get the CARROT token address', async () => {
    const carrotAddress = generateAddress();
    contractTestingUtils.mockCall('CARROT', [carrotAddress]);

    const result = await handler.getCarrotAddress();
    expect(result.toLowerCase()).toBe(carrotAddress.toLowerCase());
  });

  it('should get the PUFFER token address', async () => {
    const pufferAddress = generateAddress();
    contractTestingUtils.mockCall('PUFFER', [pufferAddress]);

    const result = await handler.getPufferAddress();
    expect(result.toLowerCase()).toBe(pufferAddress.toLowerCase());
  });

  it('should get the total puffer rewards', async () => {
    const totalPufferRewards = 1000000n;
    contractTestingUtils.mockCall('TOTAL_PUFFER_REWARDS', [totalPufferRewards]);

    const result = await handler.totalPufferRewards();
    expect(result).toBe(totalPufferRewards);
  });

  it('should get the number of vesting steps', async () => {
    const steps = 10;
    contractTestingUtils.mockCall('getSteps', [steps]);

    const result = await handler.getSteps();
    expect(result).toBe(steps);
  });

  it('should get the maximum carrot amount', async () => {
    const maxCarrotAmount = 1000000n;
    contractTestingUtils.mockCall('MAX_CARROT_AMOUNT', [maxCarrotAmount]);

    const result = await handler.maxCarrotAmount();
    expect(result).toBe(maxCarrotAmount);
  });

  it('should get vesting information for a user', async () => {
    const user = generateAddress();
    const vestingInfo = <const>{
      depositedAmount: 1000n,
      claimedAmount: 500n,
      lastClaimedTimestamp: 1234567890,
      depositedTimestamp: 1234567890,
    };
    contractTestingUtils.mockCall('getVestings', [[vestingInfo]]);

    const result = await handler.getVestings(user);
    expect(result).toEqual([vestingInfo]);
  });

  it('should get the start timestamp', async () => {
    const startTimestamp = 1234567890;
    contractTestingUtils.mockCall('getStartTimestamp', [startTimestamp]);

    const result = await handler.getStartTimestamp();
    expect(result).toBe(startTimestamp);
  });

  it('should start vesting with preapproved tokens', async () => {
    const amount = 1000n;
    contractTestingUtils.mockTransaction('startVesting');

    const txHash = await handler.startVestingPreapproved(amount);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should start vesting with permit', async () => {
    const permitData = {
      deadline: 1234567890n,
      amount: 1000n,
      v: 27,
      r: padHex('0x', { size: 32 }),
      s: padHex('0x', { size: 32 }),
    };
    contractTestingUtils.mockTransaction('startVestingWithPermit');

    const txHash = await handler.startVestingWithPermit(permitData);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should start vesting with preapproved tokens when isPreapproved is true', async () => {
    const amount = 1000n;
    const isPreapproved = true;
    const startVestingPreapprovedSpy = jest.spyOn(
      handler,
      'startVestingPreapproved',
    );
    contractTestingUtils.mockTransaction('startVesting');

    const txHash = await handler.startVesting(amount, isPreapproved);
    expect(isHash(txHash)).toBeTruthy();
    expect(startVestingPreapprovedSpy).toHaveBeenCalledWith(amount);
  });

  it('should start vesting with permit when isPreapproved is false', async () => {
    const amount = 1000n;
    const isPreapproved = false;
    const startVestingWithPermitSpy = jest.spyOn(
      handler,
      'startVestingWithPermit',
    );

    jest
      .spyOn((handler as any).erc20PermitHandler, 'getPermitData')
      .mockResolvedValue({
        deadline: 1234567890n,
        amount: amount,
        v: 27,
        r: padHex('0x', { size: 32 }),
        s: padHex('0x', { size: 32 }),
      });

    contractTestingUtils.mockTransaction('startVestingWithPermit');

    const txHash = await handler.startVesting(amount, isPreapproved);
    expect(isHash(txHash)).toBeTruthy();
    expect(startVestingWithPermitSpy).toHaveBeenCalledWith({
      deadline: 1234567890n,
      amount: amount,
      v: 27,
      r: padHex('0x', { size: 32 }),
      s: padHex('0x', { size: 32 }),
    });
  });

  it('should get the total deposited amount', async () => {
    const totalDepositedAmount = 50000n;
    contractTestingUtils.mockCall('getTotalDepositedAmount', [
      totalDepositedAmount,
    ]);

    const result = await handler.getTotalDepositedAmount();
    expect(result).toBe(totalDepositedAmount);
  });

  it('should get the duration of the vesting period', async () => {
    const duration = 365;
    contractTestingUtils.mockCall('getDuration', [duration]);

    const result = await handler.getDuration();
    expect(result).toBe(duration);
  });

  it('should get the new duration of the vesting period', async () => {
    const newDuration = 365;
    contractTestingUtils.mockCall('getNewDuration', [newDuration]);

    const result = await handler.getNewDuration();
    expect(result).toBe(newDuration);
  });

  it('should get the new steps of the vesting period', async () => {
    const newSteps = 10;
    contractTestingUtils.mockCall('getNewSteps', [newSteps]);

    const result = await handler.getNewSteps();
    expect(result).toBe(newSteps);
  });

  it('should get the upgrade timestamp', async () => {
    const upgradeTimestamp = 1234567890;
    contractTestingUtils.mockCall('getUpgradeTimestamp', [upgradeTimestamp]);

    const result = await handler.getUpgradeTimestamp();
    expect(result).toBe(upgradeTimestamp);
  });
});
