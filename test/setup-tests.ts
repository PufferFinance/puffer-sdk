import { generateTestingUtils } from 'eth-testing';
import { Chain } from '../lib/chains/constants';
import { Address } from 'viem';

// Mock web3 stuff.
export const mockAccount: Address =
  '0xEB77D02f8122B32273444a1b544C147Fb559CB41';
export const testingUtils = generateTestingUtils({ providerType: 'MetaMask' });

beforeEach(() => {
  testingUtils.mockConnectedWallet([mockAccount], { chainId: Chain.Holesky });
});

afterEach(() => {
  testingUtils.clearAllMocks();
});
