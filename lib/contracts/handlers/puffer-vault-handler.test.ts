import { toHex } from 'viem';
import { mockRpcRequest } from '../../../test/mocks/mock-request';
import {
  setupMockWalletClient,
  setupMockPublicClient,
} from '../../../test/mocks/setup-mock-clients';
import { Chain } from '../../chains/constants';
import { PufferVaultHandler } from './puffer-vault-handler';

describe('PufferVaultHandler', () => {
  it('should deposit ETH', async () => {
    const mockAddress = '0xEB77D02f8122B32273444a1b544C147Fb559CB41';
    const mockGas = BigInt(1);

    const walletRequest = mockRpcRequest({
      eth_sendTransaction: mockAddress,
    });
    const walletClient = setupMockWalletClient(walletRequest);
    const publicRequest = mockRpcRequest({ eth_estimateGas: mockGas });
    const publicClient = setupMockPublicClient(publicRequest);

    const handler = new PufferVaultHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
    const { transact, estimate } = handler.depositETH(mockAddress);

    expect(await transact(BigInt(1))).toBe(mockAddress);
    expect(await estimate()).toBe(mockGas);
  });

  it('should deposit stETH', async () => {
    const mockAddress = '0xEB77D02f8122B32273444a1b544C147Fb559CB41';
    const mockGas = BigInt(1);
    const mockValue = BigInt(1);

    const walletRequest = mockRpcRequest({
      eth_sendTransaction: mockAddress,
    });
    const walletClient = setupMockWalletClient(walletRequest);
    const publicRequest = mockRpcRequest({ eth_estimateGas: mockGas });
    const publicClient = setupMockPublicClient(publicRequest);

    const handler = new PufferVaultHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
    const { transact, estimate } = handler.depositStETH(mockAddress, mockValue);

    expect(await transact()).toBe(mockAddress);
    expect(await estimate()).toBe(mockGas);
  });

  it('should check pufETH balance', async () => {
    const mockAddress = '0xEB77D02f8122B32273444a1b544C147Fb559CB41';
    const mockBalance = BigInt(1);
    const mockCallHex = toHex(mockBalance, { size: 32 });

    const walletClient = setupMockWalletClient();
    const publicRequest = mockRpcRequest({ eth_call: mockCallHex });
    const publicClient = setupMockPublicClient(publicRequest);

    const handler = new PufferVaultHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
    const balance = await handler.balanceOf(mockAddress);

    expect(balance).toBe(mockBalance);
  });

  it('should check pufETH rate', async () => {
    const mockRate = BigInt(1e18);
    const mockCallHex = toHex(mockRate, { size: 32 });

    const walletClient = setupMockWalletClient();
    const publicRequest = mockRpcRequest({ eth_call: mockCallHex });
    const publicClient = setupMockPublicClient(publicRequest);

    const handler = new PufferVaultHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
    const rate = await handler.getPufETHRate();

    expect(rate).toBe(mockRate);
  });

  it('should get allowance', async () => {
    const mockAllowance = BigInt(1);
    const mockCallHex = toHex(mockAllowance, { size: 32 });

    const walletClient = setupMockWalletClient();
    const publicRequest = mockRpcRequest({ eth_call: mockCallHex });
    const publicClient = setupMockPublicClient(publicRequest);

    const handler = new PufferVaultHandler(
      Chain.Holesky,
      walletClient,
      publicClient,
    );
    const rate = await handler.getAllowance(
      '0xEB77D02f8122B32273444a1b544C147Fb559CB41',
      '0x92e01fbccae21eed10ab2f278f47905d482df202',
    );

    expect(rate).toBe(mockAllowance);
  });
});
