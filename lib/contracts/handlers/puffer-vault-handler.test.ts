import { toHex } from 'viem';
import { mockRpcRequest } from '../../../test/mocks/mock-request';
import {
  setupMockWalletClient,
  setupMockPublicClient,
} from '../../../test/mocks/setup-mock-clients';
import { Chain } from '../../chains/constants';
import { PufferVaultHandler } from './puffer-vault-handler';

describe('PufferVaultHandler', () => {
  it('should check pufETH balance', async () => {
    const mockAddress = '0x8d37d81e29d11cd7557ceaca25e4e4a4255b1159';
    const mockBalance = BigInt(1);
    const mockCallHex = toHex(mockBalance, { size: 32 });

    const walletClient = setupMockWalletClient();
    const publicRequest = mockRpcRequest({ eth_call: mockCallHex });
    const publicClient = setupMockPublicClient(publicRequest);

    const handler = new PufferVaultHandler(
      Chain.Anvil,
      walletClient,
      publicClient,
    );
    const balance = await handler.balanceOf(mockAddress);

    expect(balance).toBe(mockBalance);
  });

  it('should be able to deposit ETH', async () => {
    const mockAddress = '0xEB77D02f8122B32273444a1b544C147Fb559CB41';
    const mockGas = BigInt(1);

    const walletRequest = mockRpcRequest({
      eth_sendTransaction: mockAddress,
    });
    const walletClient = setupMockWalletClient(walletRequest);
    const publicRequest = mockRpcRequest({ eth_estimateGas: mockGas });
    const publicClient = setupMockPublicClient(publicRequest);

    const handler = new PufferVaultHandler(
      Chain.Anvil,
      walletClient,
      publicClient,
    );
    const { transact, estimate } = handler.depositETH(mockAddress);

    expect(await transact(BigInt(1))).toBe(mockAddress);
    expect(await estimate()).toBe(mockGas);
  });
});
