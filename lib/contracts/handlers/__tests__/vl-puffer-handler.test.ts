import { WalletClient, PublicClient, isHash, padHex } from 'viem';
import {
  setupTestWalletClient,
  setupTestPublicClient,
} from '../../../../test/setup-test-clients';
import { testingUtils } from '../../../../test/setup-tests';
import { vlPUFFER } from '../../abis/mainnet/vlPUFFER';
import { VLPufferHandler } from '../vl-puffer-handler';
import { generateAddress } from '../../../../test/mocks/address';
import { Chain } from '../../../chains/constants';

describe('VLPufferHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(vlPUFFER);
  let handler: VLPufferHandler;
  let walletClient: WalletClient;
  let publicClient: PublicClient;

  beforeEach(() => {
    walletClient = setupTestWalletClient();
    publicClient = setupTestPublicClient();

    handler = new VLPufferHandler(Chain.Holesky, walletClient, publicClient);
  });

  it('should get the PUFFER token address', async () => {
    const pufferAddress = generateAddress();
    contractTestingUtils.mockCall('PUFFER', [pufferAddress]);

    const result = await handler.PUFFER();
    expect(result.toLowerCase()).toBe(pufferAddress.toLowerCase());
  });

  it('should get the decimals of the token', async () => {
    const decimals = 18;
    contractTestingUtils.mockCall('decimals', [decimals]);

    const result = await handler.decimals();
    expect(result).toBe(decimals);
  });

  it('should get the delegates for an account', async () => {
    const account = generateAddress();
    const delegate = generateAddress();
    contractTestingUtils.mockCall('delegates', [delegate]);

    const result = await handler.delegates(account);
    expect(result.toLowerCase()).toBe(delegate.toLowerCase());
  });

  it('should get the owner of the contract', async () => {
    const owner = generateAddress();
    contractTestingUtils.mockCall('owner', [owner]);

    const result = await handler.owner();
    expect(result.toLowerCase()).toBe(owner.toLowerCase());
  });

  it('should get the allowance of the owner for the spender', async () => {
    const owner = generateAddress();
    const spender = generateAddress();
    const amount = 10n;
    contractTestingUtils.mockCall('allowance', [amount]);

    const result = await handler.allowance(owner, spender);
    expect(result).toBe(amount);
  });

  it('should transfer tokens from one address to another', async () => {
    const from = generateAddress();
    const to = generateAddress();
    const value = 10n;
    contractTestingUtils.mockTransaction('transferFrom');

    const txHash = await handler.transferFrom(from, to, value);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should get the total supply of the token', async () => {
    const totalSupply = 1000n;
    contractTestingUtils.mockCall('totalSupply', [totalSupply]);

    const result = await handler.totalSupply();
    expect(result).toBe(totalSupply);
  });

  it('should get the symbol of the token', async () => {
    const symbol = 'vlPUFFER';
    contractTestingUtils.mockCall('symbol', [symbol]);

    const result = await handler.symbol();
    expect(result).toBe(symbol);
  });

  it('should check if the contract is paused', async () => {
    const isPaused = true;
    contractTestingUtils.mockCall('paused', [isPaused]);

    const result = await handler.isPaused();
    expect(result).toBe(isPaused);
  });

  it('should get the lock info for an account', async () => {
    const account = generateAddress();
    const lockInfo = {
      pufferAmount: 100n,
      unlockTime: 1234567890n,
    };
    contractTestingUtils.mockCall('lockInfos', [
      lockInfo.pufferAmount,
      lockInfo.unlockTime,
    ]);

    const result = await handler.lockInfos(account);
    expect(result).toEqual(lockInfo);
  });

  it('should transfer ownership of the contract', async () => {
    const newOwner = generateAddress();
    contractTestingUtils.mockTransaction('transferOwnership');

    const txHash = await handler.transferOwnership(newOwner);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should get the past total supply at a specific timepoint', async () => {
    const timepoint = 1234567890n;
    const pastTotalSupply = 500n;
    contractTestingUtils.mockCall('getPastTotalSupply', [pastTotalSupply]);

    const result = await handler.getPastTotalSupply(timepoint);
    expect(result).toBe(pastTotalSupply);
  });

  it('should get the balance for an address', async () => {
    const account = generateAddress();
    const balance = 100n;
    contractTestingUtils.mockCall('balanceOf', [balance]);

    const result = await handler.balanceOf(account);
    expect(result).toBe(balance);
  });

  it('should get the nonce for an owner', async () => {
    const owner = generateAddress();
    const nonce = 5n;
    contractTestingUtils.mockCall('nonces', [nonce]);

    const result = await handler.nonces(owner);
    expect(result).toBe(nonce);
  });

  it('should get the votes for an account', async () => {
    const account = generateAddress();
    const votes = 100n;
    contractTestingUtils.mockCall('getVotes', [votes]);

    const result = await handler.votes(account);
    expect(result).toBe(votes);
  });

  it('should delegate by signature', async () => {
    const delegatee = generateAddress();
    const nonce = 1n;
    const expiry = 1234567890n;
    const v = 27;
    const r = padHex('0x', { size: 32 });
    const s = padHex('0x', { size: 32 });
    contractTestingUtils.mockTransaction('delegateBySig');

    const txHash = await handler.delegateBySig(
      delegatee,
      nonce,
      expiry,
      v,
      r,
      s,
    );
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should transfer tokens to another address', async () => {
    const to = generateAddress();
    const value = 10n;
    contractTestingUtils.mockTransaction('transfer');

    const txHash = await handler.transfer(to, value);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should get the clock mode', async () => {
    const clockMode = 'mode=blocknumber&from=default';
    contractTestingUtils.mockCall('CLOCK_MODE', [clockMode]);

    const result = await handler.getClockMode();
    expect(result).toBe(clockMode);
  });

  it('should get the number of checkpoints for an account', async () => {
    const account = generateAddress();
    const numCheckpoints = 5;
    contractTestingUtils.mockCall('numCheckpoints', [numCheckpoints]);

    const result = await handler.numCheckpoints(account);
    expect(result).toBe(numCheckpoints);
  });

  it('should approve a spender to spend tokens', async () => {
    const spender = generateAddress();
    const value = 10n;
    contractTestingUtils.mockTransaction('approve');

    const txHash = await handler.approve(spender, value);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should re-lock with the specified amount and multiplier', async () => {
    const amount = 100n;
    const multiplier = 2n;
    contractTestingUtils.mockTransaction('reLock');

    const txHash = await handler.reLock(amount, multiplier);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should get the past votes for an account at a specific timepoint', async () => {
    const account = generateAddress();
    const timepoint = 1234567890n;
    const pastVotes = 50n;
    contractTestingUtils.mockCall('getPastVotes', [pastVotes]);

    const result = await handler.getPastVotes(account, timepoint);
    expect(result).toBe(pastVotes);
  });

  it('should get the name of the token', async () => {
    const name = 'Vote-escrowed PUFFER';
    contractTestingUtils.mockCall('name', [name]);

    const result = await handler.name();
    expect(result).toBe(name);
  });

  it('should get the checkpoints for an account at a specific position', async () => {
    const account = generateAddress();
    const pos = 2;
    const checkpoint = {
      _key: 1000,
      _value: 100n,
    };
    contractTestingUtils.mockCall('checkpoints', [checkpoint]);

    const result = await handler.checkpoints(account, pos);
    expect(result).toEqual(checkpoint);
  });

  it('should create a lock with the specified amount and multiplier', async () => {
    const amount = 100n;
    const multiplier = 2n;
    contractTestingUtils.mockTransaction('createLock');

    const txHash = await handler.createLock(amount, multiplier);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should create a lock with permit', async () => {
    const value = 100n;
    const multiplier = 2n;
    const permitData = {
      amount: 100n,
      deadline: 1234567890n,
      v: 27,
      r: padHex('0x', { size: 32 }),
      s: padHex('0x', { size: 32 }),
    };
    contractTestingUtils.mockTransaction('createLockWithPermit');

    const txHash = await handler.createLockWithPermit(
      value,
      multiplier,
      permitData,
    );
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should lock with preapproved PUFFER token', async () => {
    const value = 100n;
    const multiplier = 2n;
    const isPreapproved = true;
    contractTestingUtils.mockTransaction('createLock');

    const txHash = await handler.lock(value, multiplier, isPreapproved);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should lock without preapproved PUFFER token', async () => {
    const value = 100n;
    const multiplier = 2n;
    const isPreapproved = false;
    contractTestingUtils.mockTransaction('createLockWithPermit');

    jest
      .spyOn((handler as any).erc20PermitHandler, 'getPermitData')
      .mockResolvedValue({
        r: padHex('0x', { size: 32 }),
        s: padHex('0x', { size: 32 }),
        v: 0,
        deadline: 0n,
        amount: value,
      });

    const txHash = await handler.lock(value, multiplier, isPreapproved);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should kick users from the contract', async () => {
    const users = [generateAddress(), generateAddress()];
    contractTestingUtils.mockTransaction('kickUsers');

    const txHash = await handler.kickUsers(users);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should get the current clock value', async () => {
    const clock = 1234567890;
    contractTestingUtils.mockCall('clock', [clock]);

    const result = await handler.getClock();
    expect(result).toBe(clock);
  });

  it('should withdraw tokens to a recipient', async () => {
    const recipient = generateAddress();
    contractTestingUtils.mockTransaction('withdraw');

    const txHash = await handler.withdraw(recipient);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should get the pending owner of the contract', async () => {
    const pendingOwner = generateAddress();
    contractTestingUtils.mockCall('pendingOwner', [pendingOwner]);

    const result = await handler.pendingOwner();
    expect(result.toLowerCase()).toBe(pendingOwner.toLowerCase());
  });

  it('should delegate votes to another address', async () => {
    const delegatee = generateAddress();
    contractTestingUtils.mockTransaction('delegate');

    const txHash = await handler.delegate(delegatee);
    expect(isHash(txHash)).toBeTruthy();
  });
});
