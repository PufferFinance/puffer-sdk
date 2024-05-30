import {
  CustomTransportConfig,
  createPublicClient as createPublicClientViem,
  createWalletClient as createWalletClientViem,
  http,
  fallback,
  custom,
  Transport,
  PublicClient,
  WalletClient,
} from 'viem';
import { Chain, VIEM_CHAINS } from '../chains/constants';
import { TransportProvider } from '../utils/types';

export type ClientConfig = {
  chain: Chain;
} & (
  | { rpcUrls: string[] }
  | { provider: TransportProvider; config?: CustomTransportConfig }
);

/**
 * Helper methods for the main `PufferClient`.
 */
export class PufferClientHelpers {
  /**
   * Helper method for creating a public client based on the
   * configuration
   *
   * @param config Configuration for the public client.
   * @returns The public client created with viem.
   */
  public static createPublicClient(config: ClientConfig): PublicClient {
    return createPublicClientViem({
      chain: VIEM_CHAINS[config.chain],
      transport: PufferClientHelpers.extractTransportConfig(config),
    });
  }

  /**
   * Helper method for creating a wallet client based on the
   * configuration
   *
   * @param config Configuration for the wallet client.
   * @returns The wallet client created with viem.
   */
  public static createWalletClient(config: ClientConfig): WalletClient {
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
