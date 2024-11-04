/* istanbul ignore file */
import {
  setupTestPublicClient,
  setupTestWalletClient,
} from '../../../test/setup-test-clients';
import { Chain } from '../../chains/constants';
import { mockAccount, testingUtils } from '../../../test/setup-tests';
import { NUCLEUS_ATOMIC_QUEUE_ABIS } from '../abis/nucleus-atomic-queue-abis';
import { NucleusAtomicQueueHandler } from './nucleus-atomic-queue-handler';
import { TOKENS_ADDRESSES, UnifiToken, Token } from '../tokens';
import { Account, isHash, PublicClient, WalletClient } from 'viem';

describe('NucleusAtomicQueueHandler', () => {
  const contractTestingUtils = testingUtils.generateContractUtils(
    NUCLEUS_ATOMIC_QUEUE_ABIS[Chain.Mainnet].AtomicQueue,
  );
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
