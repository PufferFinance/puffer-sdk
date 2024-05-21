import {
  createTestClient,
  custom,
  walletActions,
  publicActions,
  WalletClient,
  PublicClient,
  EIP1193RequestFn,
} from 'viem';
import { foundry } from 'viem/chains';

export const setupTestClient = (requestMock: EIP1193RequestFn = jest.fn()) => {
  return createTestClient({
    mode: 'anvil',
    chain: foundry,
    transport: custom({ request: requestMock }),
  });
};

export const setupTestWalletClient = (requestMock: EIP1193RequestFn = jest.fn()) => {
  const client = setupTestClient(requestMock);
  return client.extend(walletActions) as WalletClient;
};

export const setupTestPublicClient = (requestMock: EIP1193RequestFn = jest.fn()) => {
  const client = setupTestClient(requestMock);
  return client.extend(publicActions) as PublicClient;
};
