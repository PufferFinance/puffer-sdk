import {
  createTestClient,
  custom,
  walletActions,
  publicActions,
  WalletClient,
  PublicClient,
} from 'viem';
import { holesky } from 'viem/chains';
import { testingUtils } from './setup-tests';
import { TransportProvider } from '../lib/utils/types';

export const setupTestClient = (
  rpcRequestMock?: TransportProvider['request'],
) => {
  return createTestClient({
    mode: 'anvil',
    chain: holesky,
    transport: custom(
      rpcRequestMock === undefined
        ? testingUtils.getProvider()
        : {
            request: (...args: any[]) => {
              if (args[0].method === 'eth_chainId') {
                return Promise.resolve(holesky.id);
              }

              return rpcRequestMock(...args);
            },
          },
    ),
  });
};

export const setupTestWalletClient = (
  rpcRequestMock?: TransportProvider['request'],
) => {
  const client = setupTestClient(rpcRequestMock);
  return client.extend(walletActions) as WalletClient;
};

export const setupTestPublicClient = (
  rpcRequestMock?: TransportProvider['request'],
) => {
  const client = setupTestClient(rpcRequestMock);
  return client.extend(publicActions) as PublicClient;
};
