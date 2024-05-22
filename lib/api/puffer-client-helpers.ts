import {
  CustomTransportConfig,
  createPublicClient as createPublicClientViem,
  createWalletClient as createWalletClientViem,
  http,
  fallback,
  custom,
  Transport,
} from 'viem';
import { Chain, VIEM_CHAINS } from '../chains/constants';
import { TransportProvider } from '../utils/types';

export type ClientConfig = {
  chain: Chain;
} & (
  | { rpcUrls: string[] }
  | { provider: TransportProvider; config?: CustomTransportConfig }
);

export class PufferClientHelpers {
  public static createPublicClient(config: ClientConfig) {
    return createPublicClientViem({
      chain: VIEM_CHAINS[config.chain],
      transport: PufferClientHelpers.extractTransportConfig(config),
    });
  }

  public static createWalletClient(config: ClientConfig) {
    return createWalletClientViem({
      chain: VIEM_CHAINS[config.chain],
      transport: PufferClientHelpers.extractTransportConfig(config),
    });
  }

  private static extractTransportConfig(config: ClientConfig): Transport {
    if ('rpcUrls' in config) {
      return fallback(config.rpcUrls.map((url) => http(url)));
    } else {
      return custom(config.provider, config.config);
    }
  }
}
