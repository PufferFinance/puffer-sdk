import { Account, isHash, PublicClient, WalletClient } from 'viem';
import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../../test/setup-test-clients';
import { Chain } from '../../../chains/constants';
import { mockAccount, testingUtils } from '../../../../test/setup-tests';
import { NucleusAtomicQueueHandler } from '../nucleus-atomic-queue-handler';
import { TOKENS_ADDRESSES, UnifiToken, Token } from '../../tokens';
import { AtomicQueue } from '../../abis/mainnet/AtomicQueue';

describe('NucleusAtomicQueueHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(AtomicQueue);
  let handler: NucleusAtomicQueueHandler;
  let walletClient: WalletClient;
  let publicClient: PublicClient;

  beforeEach(() => {
    testingUtils.mockConnectedWallet([mockAccount], { chainId: Chain.Mainnet });
    walletClient = setupTestWalletClient(
      Chain.Mainnet,
      undefined,
      mockAccount as unknown as Account,
    );
    publicClient = setupTestPublicClient();

    handler = new NucleusAtomicQueueHandler(
      Chain.Mainnet,
      walletClient,
      publicClient,
    );
  });

  it('should get the user request', async () => {
    const mockResponse = [
      1730977828n,
      1000000000000000000n,
      50000000000000000n,
      false,
    ];
    contractTestingUtils.mockCall('getUserAtomicRequest', [mockResponse], {
      callValues: [
        mockAccount,
        TOKENS_ADDRESSES[UnifiToken.unifiETH][Chain.Mainnet],
        TOKENS_ADDRESSES[Token.pufETH][Chain.Mainnet],
      ],
    });

    const result = await handler.getUserAtomicRequest(
      mockAccount,
      TOKENS_ADDRESSES[UnifiToken.unifiETH][Chain.Mainnet],
      TOKENS_ADDRESSES[Token.pufETH][Chain.Mainnet],
    );

    expect(result).toEqual({
      atomicPrice: 1000000000000000000n,
      offerAmount: 50000000000000000n,
      deadline: 1730977828n,
      inSolve: false,
    });
  });

  it('should check if an atomic request is valid', async () => {
    contractTestingUtils.mockCall('isAtomicRequestValid', [true]);

    const result = await handler.isAtomicRequestValid(
      TOKENS_ADDRESSES[UnifiToken.unifiETH][Chain.Mainnet],
      mockAccount,
      {
        atomicPrice: 1n,
        deadline: 1n,
        offerAmount: 1n,
        inSolve: false,
      },
    );

    expect(result).toBe(true);
  });

  it('should return a user request', async () => {
    const mockResponse = [
      1730977828n,
      1000000000000000000n,
      50000000000000000n,
      false,
    ];
    contractTestingUtils.mockCall('userAtomicRequest', mockResponse, {
      callValues: [
        mockAccount,
        TOKENS_ADDRESSES[UnifiToken.unifiETH][Chain.Mainnet],
        TOKENS_ADDRESSES[Token.pufETH][Chain.Mainnet],
      ],
    });

    const result = await handler.userAtomicRequest(
      mockAccount,
      TOKENS_ADDRESSES[UnifiToken.unifiETH][Chain.Mainnet],
      TOKENS_ADDRESSES[Token.pufETH][Chain.Mainnet],
    );

    expect(result).toMatchSnapshot([
      1730977828n,
      1000000000000000000n,
      50000000000000000n,
      false,
    ]);
  });

  it('should update atomic request', async () => {
    contractTestingUtils.mockTransaction('updateAtomicRequest');

    const result = await handler.updateAtomicRequest(
      TOKENS_ADDRESSES[UnifiToken.unifiETH][Chain.Mainnet],
      TOKENS_ADDRESSES[Token.pufETH][Chain.Mainnet],
      {
        offerAmount: 100n,
        atomicPrice: 1n,
        deadline: 1234567890n,
        inSolve: false,
      },
      mockAccount,
    );

    expect(isHash(result)).toBe(true);
  });

  it('should solve atomic requests', async () => {
    contractTestingUtils.mockTransaction('solve', { from: mockAccount });

    const result = await handler.solve(
      TOKENS_ADDRESSES[Token.pufETH][Chain.Mainnet],
      TOKENS_ADDRESSES[UnifiToken.unifiETH][Chain.Mainnet],
      [mockAccount],
      '0x',
      mockAccount,
    );

    expect(isHash(result)).toBe(true);
  });
});
