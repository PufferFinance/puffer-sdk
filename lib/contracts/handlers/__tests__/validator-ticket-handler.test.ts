import { Chain } from '../../../chains/constants';
import { ValidatorTicketHandler } from '../validator-ticket-handler';
import { ValidatorTicket } from '../../abis/mainnet/ValidatorTicket';
import { CONTRACT_ADDRESSES } from '../../addresses';
import { Address } from 'viem';

describe('ValidatorTicketHandler', () => {
  const mockWalletClient = {
    account: '0x123',
  };
  const mockPublicClient = {};
  const mockChain = Chain.Mainnet;

  const mockContract = {
    address: CONTRACT_ADDRESSES[Chain.Mainnet].ValidatorTicket,
    abi: ValidatorTicket,
    read: {
      allowance: jest.fn(),
      balanceOf: jest.fn(),
      totalSupply: jest.fn(),
      getGuardiansFeeRate: jest.fn(),
      getProtocolFeeRate: jest.fn(),
      DOMAIN_SEPARATOR: jest.fn(),
      nonces: jest.fn(),
      eip712Domain: jest.fn(),
      name: jest.fn(),
      symbol: jest.fn(),
      decimals: jest.fn(),
    },
    write: {
      purchaseValidatorTicket: jest.fn(),
      purchaseValidatorTicketWithPufETH: jest.fn(),
      purchaseValidatorTicketWithPufETHAndPermit: jest.fn(),
      approve: jest.fn(),
      burn: jest.fn(),
      transfer: jest.fn(),
      transferFrom: jest.fn(),
      permit: jest.fn(),
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should initialize correctly', () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      expect(handler).toBeDefined();
    });
  });

  describe('getContract', () => {
    it('should return the contract with correct configuration', () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      const result = handler.getContract();

      expect(result.address).toBe(
        CONTRACT_ADDRESSES[Chain.Mainnet].ValidatorTicket,
      );
      expect(result.abi).toBe(ValidatorTicket);
      expect(result.read).toBeDefined();
      expect(result.write).toBeDefined();
    });
  });

  describe('purchaseValidatorTicket', () => {
    it('should call contract purchaseValidatorTicket with correct parameters', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const recipient = '0x456';
      const payableAmount = 1000000000000000000n; // 1 ETH
      await handler.purchaseValidatorTicket(recipient, payableAmount);

      expect(mockContract.write.purchaseValidatorTicket).toHaveBeenCalledWith(
        [recipient],
        {
          account: mockWalletClient.account,
          chain: expect.any(Object),
          value: payableAmount,
        },
      );
    });
  });

  describe('purchaseValidatorTicketWithPufETH', () => {
    it('should call contract purchaseValidatorTicketWithPufETH with correct parameters', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const recipient = '0x456';
      const vtAmount = 1000n;
      await handler.purchaseValidatorTicketWithPufETH(recipient, vtAmount);

      expect(
        mockContract.write.purchaseValidatorTicketWithPufETH,
      ).toHaveBeenCalledWith([recipient, vtAmount], {
        account: mockWalletClient.account,
        chain: expect.any(Object),
      });
    });
  });

  describe('purchaseValidatorTicketWithPufETHAndPermit', () => {
    it('should call contract purchaseValidatorTicketWithPufETHAndPermit with correct parameters', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const recipient = '0x456';
      const vtAmount = 1000n;
      const permitData = {
        deadline: 1234567890n,
        amount: 1000n,
        v: 27,
        r: '0x1234567890123456789012345678901234567890123456789012345678901234' as Address,
        s: '0x1234567890123456789012345678901234567890123456789012345678901234' as Address,
      };
      await handler.purchaseValidatorTicketWithPufETHAndPermit(
        recipient,
        vtAmount,
        permitData,
      );

      expect(
        mockContract.write.purchaseValidatorTicketWithPufETHAndPermit,
      ).toHaveBeenCalledWith([recipient, vtAmount, permitData], {
        account: mockWalletClient.account,
        chain: expect.any(Object),
      });
    });
  });

  describe('approve', () => {
    it('should call contract approve with correct parameters', async () => {
      const handler = new ValidatorTicketHandler(
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
      const handler = new ValidatorTicketHandler(
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
      const handler = new ValidatorTicketHandler(
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
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.getTotalSupply();

      expect(mockContract.read.totalSupply).toHaveBeenCalled();
    });
  });

  describe('burn', () => {
    it('should call contract burn with correct parameters', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const amount = 1000n;
      await handler.burn(amount);

      expect(mockContract.write.burn).toHaveBeenCalledWith([amount], {
        account: mockWalletClient.account,
        chain: expect.any(Object),
      });
    });
  });

  describe('transfer', () => {
    it('should call contract transfer with correct parameters', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const to = '0x456';
      const amount = 1000n;
      await handler.transfer(to, amount);

      expect(mockContract.write.transfer).toHaveBeenCalledWith([to, amount], {
        account: mockWalletClient.account,
        chain: expect.any(Object),
      });
    });
  });

  describe('transferFrom', () => {
    it('should call contract transferFrom with correct parameters', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const from = '0x123';
      const to = '0x456';
      const amount = 1000n;
      await handler.transferFrom(from, to, amount);

      expect(mockContract.write.transferFrom).toHaveBeenCalledWith(
        [from, to, amount],
        {
          account: mockWalletClient.account,
          chain: expect.any(Object),
        },
      );
    });
  });

  describe('getGuardiansFeeRate', () => {
    it('should call contract getGuardiansFeeRate', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.getGuardiansFeeRate();

      expect(mockContract.read.getGuardiansFeeRate).toHaveBeenCalled();
    });
  });

  describe('getProtocolFeeRate', () => {
    it('should call contract getProtocolFeeRate', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.getProtocolFeeRate();

      expect(mockContract.read.getProtocolFeeRate).toHaveBeenCalled();
    });
  });

  describe('getDomainSeparator', () => {
    it('should call contract DOMAIN_SEPARATOR', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.getDomainSeparator();

      expect(mockContract.read.DOMAIN_SEPARATOR).toHaveBeenCalled();
    });
  });

  describe('getNonce', () => {
    it('should call contract nonces with correct parameters', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const owner = '0x123';
      await handler.getNonce(owner);

      expect(mockContract.read.nonces).toHaveBeenCalledWith([owner]);
    });
  });

  describe('permit', () => {
    it('should call contract permit with correct parameters', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      const owner = '0x123';
      const spender = '0x456';
      const value = 1000n;
      const deadline = 1234567890n;
      const v = 27;
      const r =
        '0x1234567890123456789012345678901234567890123456789012345678901234';
      const s =
        '0x1234567890123456789012345678901234567890123456789012345678901234';

      await handler.permit(owner, spender, value, deadline, v, r, s);

      expect(mockContract.write.permit).toHaveBeenCalledWith(
        [owner, spender, value, deadline, v, r, s],
        {
          account: mockWalletClient.account,
          chain: expect.any(Object),
        },
      );
    });
  });

  describe('getEip712Domain', () => {
    it('should call contract eip712Domain', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.getEip712Domain();

      expect(mockContract.read.eip712Domain).toHaveBeenCalled();
    });
  });

  describe('getName', () => {
    it('should call contract name', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.getName();

      expect(mockContract.read.name).toHaveBeenCalled();
    });
  });

  describe('getSymbol', () => {
    it('should call contract symbol', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.getSymbol();

      expect(mockContract.read.symbol).toHaveBeenCalled();
    });
  });

  describe('getDecimals', () => {
    it('should call contract decimals', async () => {
      const handler = new ValidatorTicketHandler(
        mockChain,
        mockWalletClient as any,
        mockPublicClient as any,
      );
      handler['getContract'] = jest.fn().mockReturnValue(mockContract);

      await handler.getDecimals();

      expect(mockContract.read.decimals).toHaveBeenCalled();
    });
  });
});
