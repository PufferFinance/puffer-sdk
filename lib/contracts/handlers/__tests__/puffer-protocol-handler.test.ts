import {
  createPublicClient,
  createWalletClient,
  http,
  getContract as viemGetContract,
} from 'viem';
import { mainnet } from 'viem/chains';
import { Chain } from '../../../chains/constants';
import {
  PufferProtocolHandler,
  type PermitData,
  type ValidatorKeyData,
  type StoppedValidatorInfo,
} from '../puffer-protocol-handler';

jest.mock('viem', () => {
  const actual = jest.requireActual('viem');
  return {
    ...actual,
    getContract: jest.fn(),
  };
});

const mockPublicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

const mockAccount = {
  address: '0x1234567890123456789012345678901234567890' as const,
  type: 'json-rpc' as const,
};

const mockWalletClient = {
  ...createWalletClient({
    chain: mainnet,
    transport: http(),
  }),
  account: mockAccount,
};

const mockContract = {
  read: {
    getMinimumVtAmount: jest.fn(),
    getVTPenalty: jest.fn(),
    getValidatorTicketsBalance: jest.fn(),
    getModuleAddress: jest.fn(),
    getModuleWeights: jest.fn(),
    getNextValidatorToProvision: jest.fn(),
    getNodeInfo: jest.fn(),
    getValidators: jest.fn(),
    getValidatorInfo: jest.fn(),
    getModuleLimitInformation: jest.fn(),
    getWithdrawalCredentials: jest.fn(),
    getDepositDataRoot: jest.fn(),
  },
  write: {
    createPufferModule: jest.fn(),
    registerValidatorKey: jest.fn(),
    provisionNode: jest.fn(),
    depositValidatorTickets: jest.fn(),
    withdrawValidatorTickets: jest.fn(),
    batchHandleWithdrawals: jest.fn(),
    skipProvisioning: jest.fn(),
  },
};

// Set up the mock for getContract before all tests
beforeAll(() => {
  (viemGetContract as jest.Mock).mockImplementation(() => mockContract);
});

describe('PufferProtocolHandler', () => {
  let handler: PufferProtocolHandler;

  beforeEach(() => {
    handler = new PufferProtocolHandler(
      Chain.Mainnet,
      mockWalletClient,
      mockPublicClient,
    );
    jest.clearAllMocks();
  });

  it('should create a handler with the correct chain', () => {
    expect(handler).toBeInstanceOf(PufferProtocolHandler);
  });

  it('should return the contract instance', () => {
    const contract = handler.getContract();
    expect(contract).toBe(mockContract);
  });

  it('should call getMinimumVtAmount on the contract', async () => {
    const expectedAmount = 1000n;
    mockContract.read.getMinimumVtAmount.mockResolvedValue(expectedAmount);
    const result = await handler.getMinimumVtAmount();
    expect(mockContract.read.getMinimumVtAmount).toHaveBeenCalledWith();
    expect(result).toBe(expectedAmount);
  });

  it('should call getVTPenalty on the contract', async () => {
    const expectedPenalty = 500n;
    mockContract.read.getVTPenalty.mockResolvedValue(expectedPenalty);
    const result = await handler.getVTPenalty();
    expect(mockContract.read.getVTPenalty).toHaveBeenCalledWith();
    expect(result).toBe(expectedPenalty);
  });

  it('should call getValidatorTicketsBalance on the contract', async () => {
    const owner = '0x1234567890123456789012345678901234567890' as const;
    const expectedBalance = 1000n;
    mockContract.read.getValidatorTicketsBalance.mockResolvedValue(
      expectedBalance,
    );
    const result = await handler.getValidatorTicketsBalance(owner);
    expect(mockContract.read.getValidatorTicketsBalance).toHaveBeenCalledWith([
      owner,
    ]);
    expect(result).toBe(expectedBalance);
  });

  it('should call getModuleAddress on the contract', async () => {
    const moduleName =
      '0x7465737400000000000000000000000000000000000000000000000000000000' as const;
    const expectedAddress =
      '0x1234567890123456789012345678901234567890' as const;
    mockContract.read.getModuleAddress.mockResolvedValue(expectedAddress);
    const result = await handler.getModuleAddress(moduleName);
    expect(mockContract.read.getModuleAddress).toHaveBeenCalledWith([
      moduleName,
    ]);
    expect(result).toBe(expectedAddress);
  });

  it('should call getModuleWeights on the contract', async () => {
    const expectedWeights = [
      '0x7465737400000000000000000000000000000000000000000000000000000000',
    ] as const;
    mockContract.read.getModuleWeights.mockResolvedValue(expectedWeights);
    const result = await handler.getModuleWeights();
    expect(mockContract.read.getModuleWeights).toHaveBeenCalledWith();
    expect(result).toBe(expectedWeights);
  });

  it('should call getNextValidatorToProvision on the contract', async () => {
    const expectedResult = [
      '0x7465737400000000000000000000000000000000000000000000000000000000',
      1n,
    ] as const;
    mockContract.read.getNextValidatorToProvision.mockResolvedValue(
      expectedResult,
    );
    const result = await handler.getNextValidatorToProvision();
    expect(
      mockContract.read.getNextValidatorToProvision,
    ).toHaveBeenCalledWith();
    expect(result).toBe(expectedResult);
  });

  it('should call getNodeInfo on the contract', async () => {
    const node = '0x1234567890123456789012345678901234567890' as const;
    const expectedInfo = {
      activeValidatorCount: 5n,
      pendingValidatorCount: 2n,
      vtBalance: 1000n,
    };
    mockContract.read.getNodeInfo.mockResolvedValue(expectedInfo);
    const result = await handler.getNodeInfo(node);
    expect(mockContract.read.getNodeInfo).toHaveBeenCalledWith([node]);
    expect(result).toBe(expectedInfo);
  });

  it('should call getValidators on the contract', async () => {
    const moduleName =
      '0x7465737400000000000000000000000000000000000000000000000000000000' as const;
    const expectedValidators = [
      {
        node: '0x1234567890123456789012345678901234567890' as const,
        bond: 1000n,
        module: '0x1234567890123456789012345678901234567890' as const,
        status: 1,
        pubKey: '0x1234' as const,
      },
    ];
    mockContract.read.getValidators.mockResolvedValue(expectedValidators);
    const result = await handler.getValidators(moduleName);
    expect(mockContract.read.getValidators).toHaveBeenCalledWith([moduleName]);
    expect(result).toBe(expectedValidators);
  });

  it('should call getValidatorInfo on the contract', async () => {
    const moduleName =
      '0x7465737400000000000000000000000000000000000000000000000000000000' as const;
    const pufferModuleIndex = 1n;
    const expectedInfo = {
      node: '0x1234567890123456789012345678901234567890' as const,
      bond: 1000n,
      module: '0x1234567890123456789012345678901234567890' as const,
      status: 1,
      pubKey: '0x1234' as const,
    };
    mockContract.read.getValidatorInfo.mockResolvedValue(expectedInfo);
    const result = await handler.getValidatorInfo(
      moduleName,
      pufferModuleIndex,
    );
    expect(mockContract.read.getValidatorInfo).toHaveBeenCalledWith([
      moduleName,
      pufferModuleIndex,
    ]);
    expect(result).toBe(expectedInfo);
  });

  it('should call getModuleLimitInformation on the contract', async () => {
    const moduleName =
      '0x7465737400000000000000000000000000000000000000000000000000000000' as const;
    const expectedInfo = {
      allowedLimit: 100n,
      numberOfRegisteredValidators: 10n,
    };
    mockContract.read.getModuleLimitInformation.mockResolvedValue(expectedInfo);
    const result = await handler.getModuleLimitInformation(moduleName);
    expect(mockContract.read.getModuleLimitInformation).toHaveBeenCalledWith([
      moduleName,
    ]);
    expect(result).toBe(expectedInfo);
  });

  it('should call getWithdrawalCredentials on the contract', async () => {
    const module = '0x1234567890123456789012345678901234567890' as const;
    const expectedCreds = '0xdeadbeef' as const;
    mockContract.read.getWithdrawalCredentials.mockResolvedValue(expectedCreds);
    const result = await handler.getWithdrawalCredentials(module);
    expect(mockContract.read.getWithdrawalCredentials).toHaveBeenCalledWith([
      module,
    ]);
    expect(result).toBe(expectedCreds);
  });

  it('should call getDepositDataRoot on the contract', async () => {
    const pubKey = '0x1234' as const;
    const signature = '0x5678' as const;
    const withdrawalCredentials = '0xdeadbeef' as const;
    const expectedRoot = '0xfeed' as const;
    mockContract.read.getDepositDataRoot.mockResolvedValue(expectedRoot);
    const result = await handler.getDepositDataRoot(
      pubKey,
      signature,
      withdrawalCredentials,
    );
    expect(mockContract.read.getDepositDataRoot).toHaveBeenCalledWith([
      pubKey,
      signature,
      withdrawalCredentials,
    ]);
    expect(result).toBe(expectedRoot);
  });

  it('should call createPufferModule on the contract', async () => {
    const moduleName =
      '0x7465737400000000000000000000000000000000000000000000000000000000' as const;
    const expectedTx = { hash: '0xabc' };
    mockContract.write.createPufferModule.mockResolvedValue(expectedTx);
    const result = await handler.createPufferModule(moduleName);
    expect(mockContract.write.createPufferModule).toHaveBeenCalledWith(
      [moduleName],
      expect.objectContaining({
        account: mockAccount,
        chain: expect.anything(),
      }),
    );
    expect(result).toBe(expectedTx);
  });

  it('should call registerValidatorKey on the contract', async () => {
    const data: ValidatorKeyData = {
      blsPubKey: '0x1234',
      signature: '0x5678',
      depositDataRoot: '0xdeadbeef',
      blsEncryptedPrivKeyShares: ['0x1111'],
      blsPubKeySet: '0x2222',
      raveEvidence: '0x3333',
    };
    const moduleName =
      '0x7465737400000000000000000000000000000000000000000000000000000000' as const;
    const pufETHPermit: PermitData = {
      deadline: 1n,
      amount: 2n,
      v: 27,
      r: '0x0000000000000000000000000000000000000000',
      s: '0x0000000000000000000000000000000000000000',
    };
    const vtPermit: PermitData = {
      deadline: 3n,
      amount: 4n,
      v: 28,
      r: '0x0000000000000000000000000000000000000000',
      s: '0x0000000000000000000000000000000000000000',
    };
    const expectedTx = { hash: '0xabc' };
    mockContract.write.registerValidatorKey.mockResolvedValue(expectedTx);
    const result = await handler.registerValidatorKey(
      data,
      moduleName,
      pufETHPermit,
      vtPermit,
    );
    expect(mockContract.write.registerValidatorKey).toHaveBeenCalledWith(
      [data, moduleName, pufETHPermit, vtPermit],
      expect.objectContaining({
        account: mockAccount,
        chain: expect.anything(),
      }),
    );
    expect(result).toBe(expectedTx);
  });

  it('should call provisionNode on the contract', async () => {
    const guardianEnclaveSignatures = ['0x1111' as `0x${string}`];
    const validatorSignature = '0x2222';
    const depositRootHash = '0x3333';
    const expectedTx = { hash: '0xabc' };
    mockContract.write.provisionNode.mockResolvedValue(expectedTx);
    const result = await handler.provisionNode(
      guardianEnclaveSignatures,
      validatorSignature,
      depositRootHash,
    );
    expect(mockContract.write.provisionNode).toHaveBeenCalledWith(
      [guardianEnclaveSignatures, validatorSignature, depositRootHash],
      expect.objectContaining({
        account: mockAccount,
        chain: expect.anything(),
      }),
    );
    expect(result).toBe(expectedTx);
  });

  it('should call depositValidatorTickets on the contract', async () => {
    const permit: PermitData = {
      deadline: 1n,
      amount: 2n,
      v: 27,
      r: '0x0000000000000000000000000000000000000000',
      s: '0x0000000000000000000000000000000000000000',
    };
    const node = '0x1234567890123456789012345678901234567890' as const;
    const expectedTx = { hash: '0xabc' };
    mockContract.write.depositValidatorTickets.mockResolvedValue(expectedTx);
    const result = await handler.depositValidatorTickets(permit, node);
    expect(mockContract.write.depositValidatorTickets).toHaveBeenCalledWith(
      [permit, node],
      expect.objectContaining({
        account: mockAccount,
        chain: expect.anything(),
      }),
    );
    expect(result).toBe(expectedTx);
  });

  it('should call withdrawValidatorTickets on the contract', async () => {
    const amount = 100n;
    const recipient = '0x1234567890123456789012345678901234567890' as const;
    const expectedTx = { hash: '0xabc' };
    mockContract.write.withdrawValidatorTickets.mockResolvedValue(expectedTx);
    const result = await handler.withdrawValidatorTickets(amount, recipient);
    expect(mockContract.write.withdrawValidatorTickets).toHaveBeenCalledWith(
      [amount, recipient],
      expect.objectContaining({
        account: mockAccount,
        chain: expect.anything(),
      }),
    );
    expect(result).toBe(expectedTx);
  });

  it('should call batchHandleWithdrawals on the contract', async () => {
    const validatorInfos: StoppedValidatorInfo[] = [
      {
        module: '0x1234567890123456789012345678901234567890',
        startEpoch: 1n,
        endEpoch: 2n,
        wasSlashed: false,
        moduleName:
          '0x7465737400000000000000000000000000000000000000000000000000000000',
        pufferModuleIndex: 1n,
        withdrawalAmount: 100n,
      },
    ];
    const guardianEOASignatures = ['0x1111' as `0x${string}`];
    const expectedTx = { hash: '0xabc' };
    mockContract.write.batchHandleWithdrawals.mockResolvedValue(expectedTx);
    const result = await handler.batchHandleWithdrawals(
      validatorInfos,
      guardianEOASignatures,
    );
    expect(mockContract.write.batchHandleWithdrawals).toHaveBeenCalledWith(
      [validatorInfos, guardianEOASignatures],
      expect.objectContaining({
        account: mockAccount,
        chain: expect.anything(),
      }),
    );
    expect(result).toBe(expectedTx);
  });

  it('should call skipProvisioning on the contract', async () => {
    const moduleName =
      '0x7465737400000000000000000000000000000000000000000000000000000000' as const;
    const guardianEOASignatures = ['0x1111' as `0x${string}`];
    const expectedTx = { hash: '0xabc' };
    mockContract.write.skipProvisioning.mockResolvedValue(expectedTx);
    const result = await handler.skipProvisioning(
      moduleName,
      guardianEOASignatures,
    );
    expect(mockContract.write.skipProvisioning).toHaveBeenCalledWith(
      [moduleName, guardianEOASignatures],
      expect.objectContaining({
        account: mockAccount,
        chain: expect.anything(),
      }),
    );
    expect(result).toBe(expectedTx);
  });
});
