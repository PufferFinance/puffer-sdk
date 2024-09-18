import { PufferWithdrawalHandler } from './puffer-withdrawal-manager';
import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../test/setup-test-clients';
import { Chain } from '../../chains/constants';
import { Address, getContract } from 'viem';
import { Token } from '../tokens';
import { ERC20PermitHandler } from './erc20-permit-handler';
import { PUFFER_WITHDRAWAL_MANAGER_ABIS } from '../abis/puffer-withdrawal-manager-abis';

jest.mock('viem', () => ({
  ...jest.requireActual('viem'),
  getContract: jest.fn(),
}));
jest.mock('./erc20-permit-handler');
const mockErc20PermitHandler = jest.mocked(ERC20PermitHandler);

describe('PufferWithdrawalHandler', () => {
  let handler: PufferWithdrawalHandler;
  const mockChain = Chain.Mainnet;
  const mockAddress = '0x123' as Address;
  const walletClient = setupTestWalletClient();
  const publicClient = setupTestPublicClient();

  beforeEach(() => {
    handler = new PufferWithdrawalHandler(
      mockChain,
      walletClient,
      publicClient,
    );
  });

  it('should return the contract', () => {
    const mockAbi = PUFFER_WITHDRAWAL_MANAGER_ABIS[1].PufferWithdrawalManager;
    handler.getContract();

    expect(getContract).toHaveBeenCalledWith({
      address: '0x0000000000000000000000000000000000000000',
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

    const withToken = jest
      .spyOn(mockErc20PermitHandler.prototype, 'withToken')
      .mockImplementation(() => ({
        getPermitSignature: jest.fn().mockResolvedValue(mockPermit),
      }));

    const { transact } = await handler.requestWithdrawalWithPermit(
      mockAddress,
      amount,
    );

    await transact();

    expect(withToken).toHaveBeenCalledWith(Token.pufETH);

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

    const withToken = jest
      .spyOn(mockErc20PermitHandler.prototype, 'withToken')
      .mockImplementation(() => ({
        getPermitSignature: jest.fn().mockResolvedValue(mockPermit),
      }));

    const { estimate } = await handler.requestWithdrawalWithPermit(
      mockAddress,
      amount,
    );

    const gasEstimate = await estimate();

    expect(withToken).toHaveBeenCalledWith(Token.pufETH);

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
    await handler.completeQueueWithdrawal(mockAddress, withdrawalIdx);

    expect(
      handler['getContract']().write.completeQueuedWithdrawal,
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

    const result = await handler.getWithDrawal(withdrawalIdx);
    expect(result).toEqual(mockWithdrawal);

    expect(handler['getContract']().read.getWithdrawal).toHaveBeenCalledWith([
      withdrawalIdx,
    ]);
  });
});
