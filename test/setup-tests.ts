import { generateTestingUtils } from 'eth-testing';

// Mock web3 stuff.
export const testingUtils = generateTestingUtils({ providerType: 'MetaMask' });

afterEach(() => {
  testingUtils.clearAllMocks();
});
