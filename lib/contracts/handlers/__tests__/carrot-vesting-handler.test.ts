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
    contractTestingUtils.mockCall('steps', [steps]);

    const result = await handler.steps();
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
    const vestingInfo = {
      depositedAmount: 1000n,
      claimedAmount: 500n,
      lastClaimedTimestamp: 1234567890,
      depositedTimestamp: 1234567890,
    };
    contractTestingUtils.mockCall('vestings', [
      vestingInfo.depositedAmount,
      vestingInfo.claimedAmount,
      vestingInfo.lastClaimedTimestamp,
      vestingInfo.depositedTimestamp,
    ]);

    const result = await handler.vestings(user);
    expect(result).toEqual(vestingInfo);
  });

  it('should get the start timestamp', async () => {
    const startTimestamp = 1234567890;
    contractTestingUtils.mockCall('startTimestamp', [startTimestamp]);

    const result = await handler.startTimestamp();
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
    contractTestingUtils.mockCall('totalDepositedAmount', [
      totalDepositedAmount,
    ]);

    const result = await handler.totalDepositedAmount();
    expect(result).toBe(totalDepositedAmount);
  });

  it('should get the duration of the vesting period', async () => {
    const duration = 365;
    contractTestingUtils.mockCall('duration', [duration]);

    const result = await handler.duration();
    expect(result).toBe(duration);
  });
});
