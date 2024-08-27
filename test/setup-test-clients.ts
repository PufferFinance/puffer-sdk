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
import { Chain } from '../lib/chains/constants';

export const setupTestClient = (
  chain: Chain = Chain.Holesky,
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
                return Promise.resolve(chain);
              }

              return rpcRequestMock(...args);
            },
          },
    ),
  });
};

export const setupTestWalletClient = (
  chain: Chain = Chain.Holesky,
  rpcRequestMock?: TransportProvider['request'],
) => {
  const client = setupTestClient(chain, rpcRequestMock);
  return client.extend(walletActions) as WalletClient;
};

export const setupTestPublicClient = (
  chain: Chain = Chain.Holesky,
  rpcRequestMock?: TransportProvider['request'],
) => {
  const client = setupTestClient(chain, rpcRequestMock);
  return client.extend(publicActions) as PublicClient;
};
