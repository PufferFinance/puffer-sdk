import { Chain } from '../chains/constants';
import { AccountError } from '../errors/validation-errors';
import { setupTestWalletClient } from '../../test/utills/setup-test-clients';
import { PufferClient } from './puffer-client';

describe('PufferClient', () => {
  it('should throw error if the environment is invalid', async () => {
    expect(() => new PufferClient(Chain.Anvil)).toThrow(AccountError);
  });

  describe('PufferClient Valid Environment', () => {
    it('should request addresses', async () => {
      const mockAddress = '0xEB77D02f8122B32273444a1b544C147Fb559CB41';

      const walletRequest = jest.fn().mockReturnValue([mockAddress]);
      const walletClient = setupTestWalletClient(walletRequest);

      const pufferClient = new PufferClient(Chain.Anvil, walletClient);
      const [address] = await pufferClient.requestAddresses();

      expect(address).toBe(mockAddress);
      expect(walletRequest).toHaveBeenCalled();
    });
  });
});
