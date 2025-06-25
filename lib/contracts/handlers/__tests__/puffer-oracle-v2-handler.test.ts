import { Chain } from '../../../chains/constants';
import { PufferOracleV2Handler } from '../puffer-oracle-v2-handler';
import { PufferOracleV2 } from '../../abis/mainnet/PufferOracleV2';
import { CONTRACT_ADDRESSES } from '../../addresses';

describe('PufferOracleV2Handler', () => {
  const mockWalletClient = {
    account: '0x123',
  };
  const mockPublicClient = {};
  const mockChain = Chain.Mainnet;

  const mockContract = {
    address: CONTRACT_ADDRESSES[Chain.Mainnet].PufferOracleV2,
    abi: PufferOracleV2,
    read: {
      getValidatorTicketPrice: jest.fn(),
      getTotalNumberOfValidators: jest.fn(),
      getLockedEthAmount: jest.fn(),
      isOverBurstThreshold: jest.fn(),
    },
    write: {
      provisionNode: jest.fn(),
      exitValidators: jest.fn(),
      setMintPrice: jest.fn(),
      setTotalNumberOfValidators: jest.fn(),
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should initialize correctly', () => {
      const handler = new PufferOracleV2Handler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      expect(handler).toBeDefined();
    });
  });

  describe('getContract', () => {
    it('should return the contract with correct configuration', () => {
      const handler = new PufferOracleV2Handler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      const result = handler.getContract();

      expect(result.address).toBe(
        CONTRACT_ADDRESSES[Chain.Mainnet].PufferOracleV2,
      );
      expect(result.abi).toBe(PufferOracleV2);
      expect(result.read).toBeDefined();
      expect(result.write).toBeDefined();
    });
  });

  describe('getValidatorTicketPrice', () => {
    it('should call contract getValidatorTicketPrice', async () => {
      const handler = new PufferOracleV2Handler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.getValidatorTicketPrice();

      expect(mockContract.read.getValidatorTicketPrice).toHaveBeenCalled();
    });
  });

  describe('getTotalNumberOfValidators', () => {
    it('should call contract getTotalNumberOfValidators', async () => {
      const handler = new PufferOracleV2Handler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.getTotalNumberOfValidators();

      expect(mockContract.read.getTotalNumberOfValidators).toHaveBeenCalled();
    });
  });

  describe('getLockedEthAmount', () => {
    it('should call contract getLockedEthAmount', async () => {
      const handler = new PufferOracleV2Handler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.getLockedEthAmount();

      expect(mockContract.read.getLockedEthAmount).toHaveBeenCalled();
    });
  });

  describe('isOverBurstThreshold', () => {
    it('should call contract isOverBurstThreshold', async () => {
      const handler = new PufferOracleV2Handler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.isOverBurstThreshold();

      expect(mockContract.read.isOverBurstThreshold).toHaveBeenCalled();
    });
  });

  describe('provisionNode', () => {
    it('should call contract provisionNode with correct parameters', async () => {
      const handler = new PufferOracleV2Handler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.provisionNode();

      expect(mockContract.write.provisionNode).toHaveBeenCalledWith({
        account: mockWalletClient.account,
        chain: expect.any(Object),
      });
    });
  });

  describe('exitValidators', () => {
    it('should call contract exitValidators with correct parameters', async () => {
      const handler = new PufferOracleV2Handler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const numberOfExits = 5n;
      await handler.exitValidators(numberOfExits);

      expect(mockContract.write.exitValidators).toHaveBeenCalledWith(
        [numberOfExits],
        {
          account: mockWalletClient.account,
          chain: expect.any(Object),
        },
      );
    });
  });

  describe('setMintPrice', () => {
    it('should call contract setMintPrice with correct parameters', async () => {
      const handler = new PufferOracleV2Handler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const newPrice = 1000000000000000000n; // 1 ETH
      await handler.setMintPrice(newPrice);

      expect(mockContract.write.setMintPrice).toHaveBeenCalledWith([newPrice], {
        account: mockWalletClient.account,
        chain: expect.any(Object),
      });
    });
  });

  describe('setTotalNumberOfValidators', () => {
    it('should call contract setTotalNumberOfValidators with correct parameters', async () => {
      const handler = new PufferOracleV2Handler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const newTotalNumberOfValidators = 1000n;
      const epochNumber = 12345n;
      const guardianEOASignatures = [
        '0x1234567890123456789012345678901234567890123456789012345678901234',
        '0x5678901234567890123456789012345678901234567890123456789012345678',
      ] as `0x${string}`[];

      await handler.setTotalNumberOfValidators(
        newTotalNumberOfValidators,
        epochNumber,
        guardianEOASignatures,
      );

      expect(
        mockContract.write.setTotalNumberOfValidators,
      ).toHaveBeenCalledWith(
        [newTotalNumberOfValidators, epochNumber, guardianEOASignatures],
        {
          account: mockWalletClient.account,
          chain: expect.any(Object),
        },
      );
    });
  });
});
