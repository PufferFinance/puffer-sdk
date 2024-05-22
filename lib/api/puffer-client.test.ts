import { Chain } from '../chains/constants';
import { AccountError } from '../errors/validation-errors';
import {
  setupMockPublicClient,
  setupMockWalletClient,
} from '../../test/mocks/setup-mock-clients';
import { PufferClient } from './puffer-client';
import { mockRpcRequest } from '../../test/mocks/mock-request';

describe('PufferClient', () => {
  it('should throw error if the environment is invalid', async () => {
    expect(() => new PufferClient(Chain.Anvil)).toThrow(AccountError);
  });

  it('should use the default wallet client', () => {
    window.ethereum = {} as any;
    expect(() => new PufferClient(Chain.Anvil)).not.toThrow(AccountError);
    window.ethereum = undefined;
  });

  describe('PufferClient Valid Environment', () => {
    it('should request addresses', async () => {
      const mockAddress = '0xEB77D02f8122B32273444a1b544C147Fb559CB41';

      const walletRequest = mockRpcRequest({
        eth_requestAccounts: [mockAddress],
      });
      const walletClient = setupMockWalletClient(walletRequest);

      const pufferClient = new PufferClient(Chain.Anvil, walletClient);
      const [address] = await pufferClient.requestAddresses();

      expect(address).toBe(mockAddress);
      expect(walletRequest).toHaveBeenCalled();
    });

    it('should deposit ETH', async () => {
      const mockAddress = '0xEB77D02f8122B32273444a1b544C147Fb559CB41';
      const mockGas = BigInt(1);

      const walletRequest = mockRpcRequest({
        eth_sendTransaction: mockAddress,
      });
      const walletClient = setupMockWalletClient(walletRequest);
      const publicRequest = mockRpcRequest({ eth_estimateGas: mockGas });
      const publicClient = setupMockPublicClient(publicRequest);

      const pufferClient = new PufferClient(
        Chain.Anvil,
        walletClient,
        publicClient,
      );
      const { transact, estimate } = pufferClient.depositETH(mockAddress);

      expect(await transact(BigInt(1))).toBe(mockAddress);
      expect(await estimate()).toBe(mockGas);
    });
  });
});
