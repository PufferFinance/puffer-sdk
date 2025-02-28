import { Chain } from '../../chains/constants';
import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../test/setup-test-clients';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { DistributorHandler } from './distributor-handler';
import { Distributor } from '../abis/mainnet/Distributor';
import { CONTRACT_ADDRESSES } from '../addresses';
import { isHash, padHex } from 'viem';

describe('DistributorHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(
    Distributor,
    (CONTRACT_ADDRESSES[Chain.Mainnet] as any).Distributor,
  );
  let handler: DistributorHandler;

  beforeEach(() => {
    testingUtils.mockConnectedWallet([mockAccount], { chainId: Chain.Mainnet });
    const walletClient = setupTestWalletClient(Chain.Mainnet);
    const publicClient = setupTestPublicClient(Chain.Mainnet);

    handler = new DistributorHandler(Chain.Mainnet, walletClient, publicClient);
  });

  it('should check if an address can update merkle root', async () => {
    const mockCanUpdate = 1n;
    contractTestingUtils.mockCall('canUpdateMerkleRoot', [mockCanUpdate]);

    const canUpdate = await handler.canUpdateMerkleRoot(mockAccount);
    expect(canUpdate).toEqual(mockCanUpdate);
  });

  it('should claim tokens for multiple users', async () => {
    contractTestingUtils.mockTransaction('claim');
    const mockUsers = [
      padHex('0x1', { size: 20 }),
      padHex('0x2', { size: 20 }),
    ];
    const mockTokens = [
      padHex('0x3', { size: 20 }),
      padHex('0x4', { size: 20 }),
    ];
    const mockAmounts = [100n, 200n];
    const mockProofs = [
      [padHex('0x5', { size: 32 })],
      [padHex('0x6', { size: 32 })],
    ];

    const txHash = await handler.claim(mockAccount, {
      users: mockUsers,
      tokens: mockTokens,
      amounts: mockAmounts,
      proofs: mockProofs,
    });
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should get claim information', async () => {
    const mockClaimInfo = {
      amount: 100n,
      timestamp: 1000n,
      merkleRoot: padHex('0x', { size: 32 }),
    };
    contractTestingUtils.mockCall('claimed', [
      mockClaimInfo.amount,
      Number(mockClaimInfo.timestamp),
      mockClaimInfo.merkleRoot,
    ]);

    const claimInfo = await handler.claimed(
      mockAccount,
      padHex('0x', { size: 20 }),
    );
    expect(claimInfo).toEqual(mockClaimInfo);
  });

  it('should get the core contract address', async () => {
    const mockCore = padHex('0x', { size: 20 });
    contractTestingUtils.mockCall('core', [mockCore]);

    const core = await handler.core();
    expect(core).toEqual(mockCore);
  });

  it('should get the dispute amount', async () => {
    const mockDisputeAmount = 100n;
    contractTestingUtils.mockCall('disputeAmount', [mockDisputeAmount]);

    const disputeAmount = await handler.disputeAmount();
    expect(disputeAmount).toEqual(mockDisputeAmount);
  });

  it('should get the dispute period', async () => {
    const mockDisputePeriod = 100;
    contractTestingUtils.mockCall('disputePeriod', [mockDisputePeriod]);

    const disputePeriod = await handler.disputePeriod();
    expect(disputePeriod).toEqual(mockDisputePeriod);
  });

  it('should get the dispute token address', async () => {
    const mockDisputeToken = padHex('0x', { size: 20 });
    contractTestingUtils.mockCall('disputeToken', [mockDisputeToken]);

    const disputeToken = await handler.disputeToken();
    expect(disputeToken).toEqual(mockDisputeToken);
  });

  it('should dispute the tree', async () => {
    contractTestingUtils.mockTransaction('disputeTree');
    const mockReason = 'Invalid merkle root';

    const txHash = await handler.disputeTree(mockAccount, mockReason);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should get the disputer address', async () => {
    const mockDisputer = padHex('0x', { size: 20 });
    contractTestingUtils.mockCall('disputer', [mockDisputer]);

    const disputer = await handler.disputer();
    expect(disputer).toEqual(mockDisputer);
  });

  it('should get the end of dispute period', async () => {
    const mockEndOfDisputePeriod = 100;
    contractTestingUtils.mockCall('endOfDisputePeriod', [
      mockEndOfDisputePeriod,
    ]);

    const endOfDisputePeriod = await handler.endOfDisputePeriod();
    expect(endOfDisputePeriod).toEqual(mockEndOfDisputePeriod);
  });

  it('should get the merkle root', async () => {
    const mockMerkleRoot = padHex('0x', { size: 32 });
    contractTestingUtils.mockCall('getMerkleRoot', [mockMerkleRoot]);

    const merkleRoot = await handler.getMerkleRoot();
    expect(merkleRoot).toEqual(mockMerkleRoot);
  });

  it('should get the last tree information', async () => {
    const mockTree = {
      merkleRoot: padHex('0x1', { size: 32 }),
      ipfsHash: padHex('0x2', { size: 32 }),
    };
    contractTestingUtils.mockCall('lastTree', [
      mockTree.merkleRoot,
      mockTree.ipfsHash,
    ]);

    const tree = await handler.lastTree();
    expect(tree).toEqual(mockTree);
  });

  it('should check if only operators can claim for a user', async () => {
    const mockOnlyOperatorCanClaim = 1n;
    contractTestingUtils.mockCall('onlyOperatorCanClaim', [
      mockOnlyOperatorCanClaim,
    ]);

    const onlyOperatorCanClaim =
      await handler.onlyOperatorCanClaim(mockAccount);
    expect(onlyOperatorCanClaim).toEqual(mockOnlyOperatorCanClaim);
  });

  it('should check if an address is an operator for a user', async () => {
    const mockIsOperator = 1n;
    contractTestingUtils.mockCall('operators', [mockIsOperator]);

    const isOperator = await handler.operators(
      mockAccount,
      padHex('0x', { size: 20 }),
    );
    expect(isOperator).toEqual(mockIsOperator);
  });

  it('should recover ERC20 tokens', async () => {
    contractTestingUtils.mockTransaction('recoverERC20');
    const mockTokenAddress = padHex('0x1', { size: 20 });
    const mockTo = padHex('0x2', { size: 20 });
    const mockAmountToRecover = 100n;

    const txHash = await handler.recoverERC20(
      mockAccount,
      mockTokenAddress,
      mockTo,
      mockAmountToRecover,
    );
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should resolve a dispute', async () => {
    contractTestingUtils.mockTransaction('resolveDispute');
    const mockValid = true;

    const txHash = await handler.resolveDispute(mockAccount, mockValid);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should revoke the tree', async () => {
    contractTestingUtils.mockTransaction('revokeTree');

    const txHash = await handler.revokeTree(mockAccount);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should set the dispute amount', async () => {
    contractTestingUtils.mockTransaction('setDisputeAmount');
    const mockDisputeAmount = 100n;

    const txHash = await handler.setDisputeAmount(
      mockAccount,
      mockDisputeAmount,
    );
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should set the dispute period', async () => {
    contractTestingUtils.mockTransaction('setDisputePeriod');
    const mockDisputePeriod = 100;

    const txHash = await handler.setDisputePeriod(
      mockAccount,
      mockDisputePeriod,
    );
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should set the dispute token', async () => {
    contractTestingUtils.mockTransaction('setDisputeToken');
    const mockDisputeToken = padHex('0x', { size: 20 });

    const txHash = await handler.setDisputeToken(mockAccount, mockDisputeToken);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should toggle only operator can claim', async () => {
    contractTestingUtils.mockTransaction('toggleOnlyOperatorCanClaim');
    const mockUser = padHex('0x', { size: 20 });

    const txHash = await handler.toggleOnlyOperatorCanClaim(
      mockAccount,
      mockUser,
    );
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should toggle operator', async () => {
    contractTestingUtils.mockTransaction('toggleOperator');
    const mockUser = padHex('0x1', { size: 20 });
    const mockOperator = padHex('0x2', { size: 20 });

    const txHash = await handler.toggleOperator(
      mockAccount,
      mockUser,
      mockOperator,
    );
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should toggle trusted status', async () => {
    contractTestingUtils.mockTransaction('toggleTrusted');
    const mockEoa = padHex('0x', { size: 20 });

    const txHash = await handler.toggleTrusted(mockAccount, mockEoa);
    expect(isHash(txHash)).toBeTruthy();
  });

  it('should get the current tree information', async () => {
    const mockTree = {
      merkleRoot: padHex('0x1', { size: 32 }),
      ipfsHash: padHex('0x2', { size: 32 }),
    };
    contractTestingUtils.mockCall('tree', [
      mockTree.merkleRoot,
      mockTree.ipfsHash,
    ]);

    const tree = await handler.tree();
    expect(tree).toEqual(mockTree);
  });

  it('should update the merkle tree', async () => {
    contractTestingUtils.mockTransaction('updateTree');
    const mockTree = {
      merkleRoot: padHex('0x1', { size: 32 }),
      ipfsHash: padHex('0x2', { size: 32 }),
    };

    const txHash = await handler.updateTree(mockAccount, mockTree);
    expect(isHash(txHash)).toBeTruthy();
  });
});
