import {
  createTestClient,
  custom,
  walletActions,
  publicActions,
  WalletClient,
  PublicClient,
} from 'viem';
import { anvil } from 'viem/chains';
import { TransportProvider } from '../../lib/utils/types';

export const setupMockClient = (
  requestMock: TransportProvider['request'] = jest.fn(),
) => {
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
  requestMock: TransportProvider['request'] = jest.fn(),
) => {
  const client = setupMockClient(requestMock);
  return client.extend(walletActions) as WalletClient;
};

export const setupMockPublicClient = (
  requestMock: TransportProvider['request'] = jest.fn(),
) => {
  const client = setupMockClient(requestMock);
  return client.extend(publicActions) as PublicClient;
};
