import {
  createTestClient,
  custom,
  walletActions,
  publicActions,
  WalletClient,
  PublicClient,
} from 'viem';
import { anvil } from 'viem/chains';
import { TransportProvider } from '../lib/utils/types';
import { testingUtils } from './setup-tests';

export const setupTestClient = () => {
  return createTestClient({
    mode: 'anvil',
    chain: anvil,
    transport: custom(testingUtils.getProvider()),
  });
};

export const setupTestWalletClient = () => {
  const client = setupTestClient();
  return client.extend(walletActions) as WalletClient;
};

export const setupTestPublicClient = () => {
  const client = setupTestClient();
  return client.extend(publicActions) as PublicClient;
};
