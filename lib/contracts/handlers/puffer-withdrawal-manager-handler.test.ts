import { PufferWithdrawalManagerHandler } from './puffer-withdrawal-manager-handler';
import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../test/setup-test-clients';
import { Chain } from '../../chains/constants';
import { PUFFER_WITHDRAWAL_MANAGER_ABIS } from '../abis/puffer-withdrawal-manager-abis';
import { CONTRACT_ADDRESSES } from '../addresses';
import { Address, getContract } from 'viem';

jest.mock('viem', () => ({
  ...jest.requireActual('viem'),
  getContract: jest.fn(),
}));

describe('PufferWithdrawalMangerHandler', () => {
  let handler: PufferWithdrawalManagerHandler;
  const mockChain = Chain.Holesky;
  const mockAddress = '0x123' as Address;
  const walletClient = setupTestWalletClient();
  const publicClient = setupTestPublicClient();

  beforeEach(() => {
    handler = new PufferWithdrawalManagerHandler(
      mockChain,
      walletClient,
      publicClient,
    );
  });

  it('should return the contract', () => {
    const mockAbi = PUFFER_WITHDRAWAL_MANAGER_ABIS[1].PufferWithdrawalManager;
    handler.getContract();

    expect(getContract).toHaveBeenCalledWith({
      address: CONTRACT_ADDRESSES[mockChain].PufferWithdrawalManager,
      abi: mockAbi,
      client: { public: publicClient, wallet: walletClient },
    });
  });

  it('should request a withdrawal', async () => {
    jest.spyOn(handler as any, 'getContract').mockReturnValue({
      write: {
        requestWithdrawal: jest.fn().mockResolvedValue('0x567' as Address),
      },
    });

    const amount = BigInt(1000);

    const { transact } = await handler.requestWithdrawal(mockAddress, amount);

    await transact();

    expect(
      handler['getContract']().write.requestWithdrawal,
    ).toHaveBeenCalledWith(
      expect.arrayContaining([amount, mockAddress]),
      expect.any(Object),
    );
  });

  it('should estimate gas for requestWithdrawal', async () => {
    jest.spyOn(handler as any, 'getContract').mockReturnValue({
      estimateGas: {
        requestWithdrawal: jest.fn().mockResolvedValue(BigInt(100000)),
      },
    });

    const amount = BigInt(1000);

    const { estimate } = await handler.requestWithdrawal(mockAddress, amount);

    const gasEstimate = await estimate();

    expect(
      handler['getContract']().estimateGas.requestWithdrawal,
    ).toHaveBeenCalledWith(
      expect.arrayContaining([amount, mockAddress]),
      expect.any(Object),
    );

    expect(gasEstimate).toEqual(BigInt(100000));
  });

  it('should request a withdrawal with permit', async () => {
    const amount = BigInt(1000);
    const mockPermit = {
      r: '0x',
      s: '0x',
      v: 27,
      deadline: BigInt(1000),
      amount,
    };

    jest.spyOn(handler as any, 'getContract').mockReturnValue({
      write: {
        requestWithdrawalWithPermit: jest
          .fn()
          .mockResolvedValue('0x567' as Address),
      },
    });

    const getPermitSignature = jest
      .spyOn((handler as any).erc20PermitHandler, 'getPermitSignature')
      .mockReturnValue(Promise.resolve(mockPermit));

    const { transact } = await handler.requestWithdrawalWithPermit(
      mockAddress,
      amount,
    );

    await transact();

    expect(getPermitSignature).toHaveBeenCalledWith(
      mockAddress,
      CONTRACT_ADDRESSES[mockChain].PufferWithdrawalManager,
      BigInt(1000),
    );

    expect(
      handler['getContract']().write.requestWithdrawalWithPermit,
    ).toHaveBeenCalledWith(
      expect.arrayContaining([mockPermit, mockAddress]),
      expect.any(Object),
    );
  });

  it('should estimate gas for a withdrawal with permit', async () => {
    const amount = BigInt(1000);
    const mockPermit = {
      r: '0x',
      s: '0x',
      v: 27,
      deadline: BigInt(1000),
      amount,
    };

    jest.spyOn(handler as any, 'getContract').mockReturnValue({
      estimateGas: {
        requestWithdrawalWithPermit: jest
          .fn()
          .mockResolvedValue(BigInt(100000)),
      },
    });

    const getPermitSignature = jest
      .spyOn((handler as any).erc20PermitHandler, 'getPermitSignature')
      .mockReturnValue(Promise.resolve(mockPermit));

    const { estimate } = await handler.requestWithdrawalWithPermit(
      mockAddress,
      amount,
    );

    const gasEstimate = await estimate();

    expect(getPermitSignature).toHaveBeenCalledWith(
      mockAddress,
      CONTRACT_ADDRESSES[mockChain].PufferWithdrawalManager,
      BigInt(1000),
    );

    expect(
      handler['getContract']().estimateGas.requestWithdrawalWithPermit,
    ).toHaveBeenCalledWith(
      expect.arrayContaining([mockPermit, mockAddress]),
      expect.any(Object),
    );

    expect(gasEstimate).toEqual(BigInt(100000));
  });

  it('should complete a queued withdrawal', async () => {
    jest.spyOn(handler as any, 'getContract').mockReturnValue({
      write: {
        completeQueuedWithdrawal: jest
          .fn()
          .mockResolvedValue('0x567' as Address),
      },
    });

    const withdrawalIdx = BigInt(5);
    const { transact } = await handler.completeQueuedWithdrawal(
      mockAddress,
      withdrawalIdx,
    );

    await transact();

    expect(
      handler['getContract']().write.completeQueuedWithdrawal,
    ).toHaveBeenCalledWith(
      expect.arrayContaining([withdrawalIdx]),
      expect.any(Object),
    );
  });

  it('should estimate gas for a queued withdrawal', async () => {
    jest.spyOn(handler as any, 'getContract').mockReturnValue({
      estimateGas: {
        completeQueuedWithdrawal: jest.fn().mockResolvedValue(BigInt(100000)),
      },
    });

    const withdrawalIdx = BigInt(5);
    const { estimate } = await handler.completeQueuedWithdrawal(
      mockAddress,
      withdrawalIdx,
    );

    await estimate();

    expect(
      handler['getContract']().estimateGas.completeQueuedWithdrawal,
    ).toHaveBeenCalledWith(
      expect.arrayContaining([withdrawalIdx]),
      expect.any(Object),
    );
  });

  it('should get a withdrawal by its index', async () => {
    const withdrawalIdx = BigInt(1);
    const mockWithdrawal = { amount: '10', recipient: mockAddress };

    jest.spyOn(handler as any, 'getContract').mockReturnValue({
      read: {
        getWithdrawal: jest.fn().mockResolvedValue(mockWithdrawal),
      },
    });

    const result = await handler.getWithdrawal(withdrawalIdx);
    expect(result).toEqual(mockWithdrawal);

    expect(handler['getContract']().read.getWithdrawal).toHaveBeenCalledWith([
      withdrawalIdx,
    ]);
  });
});
