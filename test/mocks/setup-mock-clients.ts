import {
  createTestClient,
  custom,
  walletActions,
  publicActions,
  WalletClient,
  PublicClient,
} from 'viem';
import { anvil } from 'viem/chains';
import { MockRequestFn } from '../utils/types';

export const setupMockClient = (requestMock: MockRequestFn = jest.fn()) => {
  return createTestClient({
    mode: 'anvil',
    chain: anvil,
    transport: custom({
      request: (...args: any[]) => {
        if (args[0].method === 'eth_chainId') {
          return Promise.resolve(anvil.id);
        }

        return requestMock(...args);
      },
    }),
  });
};

export const setupMockWalletClient = (
  requestMock: MockRequestFn = jest.fn(),
) => {
  const client = setupMockClient(requestMock);
  return client.extend(walletActions) as WalletClient;
};

export const setupMockPublicClient = (
  requestMock: MockRequestFn = jest.fn(),
) => {
  const client = setupMockClient(requestMock);
  return client.extend(publicActions) as PublicClient;
};
