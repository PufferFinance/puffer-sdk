import { Chain } from '../../../chains/constants';
import { ConcreteVaultHandler } from '../concrete-vault-handler';
import { Token } from '../../tokens';
import { ConcreteMultiStrategyVault } from '../../abis/mainnet/ConcreteMultiStrategyVault';
import { VAULTS_ADDRESSES } from '../../vaults-addresses';

describe('ConcreteVaultHandler', () => {
  const mockWalletClient = {
    account: '0x123',
  };
  const mockPublicClient = {};
  const mockChain = Chain.Mainnet;

  const mockContract = {
    address:
      VAULTS_ADDRESSES[Token.pufETH][Chain.Mainnet].ConcreteMultiStrategyVault,
    abi: ConcreteMultiStrategyVault,
    read: {
      allowance: jest.fn(),
      balanceOf: jest.fn(),
      totalSupply: jest.fn(),
      previewDeposit: jest.fn(),
      previewWithdraw: jest.fn(),
    },
    write: {
      approve: jest.fn(),
      deposit: jest.fn(),
      withdraw: jest.fn(),
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should initialize with correct token', () => {
      const handler = new ConcreteVaultHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      expect(handler['token']).toBe(Token.pufETH);
    });
  });

  describe('withToken', () => {
    it('should update token and return handler', () => {
      const handler = new ConcreteVaultHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      const result = handler.withToken(Token.pufETH);
      expect(result).toBe(handler);
      expect(handler['token']).toBe(Token.pufETH);
    });
  });

  describe('getContract', () => {
    it('should return the contract with correct configuration', () => {
      const handler = new ConcreteVaultHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      const result = handler.getContract();

      expect(result.address).toBe(
        VAULTS_ADDRESSES[Token.pufETH][Chain.Mainnet]
          .ConcreteMultiStrategyVault,
      );
      expect(result.abi).toBe(ConcreteMultiStrategyVault);
      expect(result.read).toBeDefined();
      expect(result.write).toBeDefined();
    });
  });

  describe('approve', () => {
    it('should call contract approve with correct parameters', async () => {
      const handler = new ConcreteVaultHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const spender = '0x456';
      const amount = 1000n;
      await handler.approve(spender, amount);

      expect(mockContract.write.approve).toHaveBeenCalledWith(
        [spender, amount],
        {
          account: mockWalletClient.account,
          chain: expect.any(Object),
        },
      );
    });
  });

  describe('getAllowance', () => {
    it('should call contract allowance with correct parameters', async () => {
      const handler = new ConcreteVaultHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const owner = '0x123';
      const spender = '0x456';
      await handler.getAllowance(owner, spender);

      expect(mockContract.read.allowance).toHaveBeenCalledWith([
        owner,
        spender,
      ]);
    });
  });

  describe('getBalance', () => {
    it('should call contract balanceOf with correct parameters', async () => {
      const handler = new ConcreteVaultHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const address = '0x123';
      await handler.getBalance(address);

      expect(mockContract.read.balanceOf).toHaveBeenCalledWith([address]);
    });
  });

  describe('getTotalSupply', () => {
    it('should call contract totalSupply', async () => {
      const handler = new ConcreteVaultHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.getTotalSupply();

      expect(mockContract.read.totalSupply).toHaveBeenCalled();
    });
  });

  describe('deposit', () => {
    it('should call contract deposit with correct parameters', async () => {
      const handler = new ConcreteVaultHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const amount = 1000n;
      await handler.deposit(amount);

      expect(mockContract.write.deposit).toHaveBeenCalledWith([amount], {
        account: mockWalletClient.account,
        chain: expect.any(Object),
      });
    });
  });

  describe('withdraw', () => {
    it('should call contract withdraw with correct parameters', async () => {
      const handler = new ConcreteVaultHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const amount = 1000n;
      await handler.withdraw(amount);

      expect(mockContract.write.withdraw).toHaveBeenCalledWith([amount], {
        account: mockWalletClient.account,
        chain: expect.any(Object),
      });
    });
  });

  describe('previewDeposit', () => {
    it('should call contract previewDeposit with correct parameters', async () => {
      const handler = new ConcreteVaultHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const amount = 1000n;
      await handler.previewDeposit(amount);

      expect(mockContract.read.previewDeposit).toHaveBeenCalledWith([amount]);
    });
  });

  describe('previewWithdraw', () => {
    it('should call contract previewWithdraw with correct parameters', async () => {
      const handler = new ConcreteVaultHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const amount = 1000n;
      await handler.previewWithdraw(amount);

      expect(mockContract.read.previewWithdraw).toHaveBeenCalledWith([amount]);
    });
  });
});
