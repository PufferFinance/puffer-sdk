import React, { createContext, useContext, useEffect, useState } from 'react';

import { useWeb3 } from './Web3Context';

import defaultConfig from '../../config/networks/default';
import { networkEnumToString } from '../../config/networks';
import { NetworkConfig } from '../../types/networkConfig';

const NetworkConfigContext = createContext<NetworkConfig | null>(null);

export const NetworkConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isConnected, networkName } = useWeb3();
  const [config, setConfig] = useState<NetworkConfig | null>(null);

  useEffect(() => {
    async function loadConfig() {
      if (isConnected) {
        const network = networkEnumToString(networkName).toLowerCase();
        const importedModule = await import(`../config/${network}.ts`).catch(
          () => ({ default: defaultConfig }),
        );
        setConfig(importedModule.default);
      } else {
        setConfig(defaultConfig); // Set default config if not connected
      }
    }

    loadConfig();
  }, [networkName, isConnected]);

  // Optionally, render a loading screen or spinner while config is null
  // (this needs designer attention if decided to keep)
  if (!config) {
    return <div>Loading configuration...</div>;
  }

  return (
    <NetworkConfigContext.Provider value={config}>
      {children}
    </NetworkConfigContext.Provider>
  );
};

export const useNetworkConfig = () => useContext(NetworkConfigContext);
