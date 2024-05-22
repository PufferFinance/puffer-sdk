import { CustomTransportConfig } from 'viem';
import { Chain } from '../chains/constants';

export type TransportProvider = {
  request: (...args: any) => Promise<any>;
};

export type PublicClientConfig = {
  chain: Chain;
  rpcUrls: string[];
};

export type WalletClientConfig = {
  provider: TransportProvider;
  config: CustomTransportConfig;
};
