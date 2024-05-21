import { Chain } from '../../chains/constants';
import { AccountError } from '../../errors/validation-errors';
import { setupTestWalletClient } from '../../test/utills/setup-test-client';
import { PufferClient } from '../puffer-client';

describe('PufferClient', () => {
  it('should throw error if the environment is invalid', async () => {
    expect(() => new PufferClient(Chain.Anvil)).toThrow(AccountError);
  });

  describe('PufferClient Valid Environment', () => {
    it('should request addresses', async () => {
      const mockAddress = '0xf770bF9384c5aaD8b8a6EFAb5951CF089656A371';

      const walletRequest = jest.fn().mockReturnValue([mockAddress]);
      const walletClient = setupTestWalletClient(walletRequest);

      const pufferClient = new PufferClient(Chain.Anvil, walletClient);
      const [address] = await pufferClient.requestAddresses();

      expect(address).toBe(mockAddress);
      expect(walletRequest).toHaveBeenCalled();
    });
  });
});
