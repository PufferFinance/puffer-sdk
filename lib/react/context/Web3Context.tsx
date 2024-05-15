import { ethers } from 'ethers';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import Web3 from 'web3';

import { Network } from '../../config/networks';
import { IWeb3Context } from '../../types/web3Context';
import { del, get, set } from '../../utils/localStorage';

interface Web3ContextProps extends IWeb3Context {
  loading: boolean;
  hasMetamask: boolean;
}

const Web3Context = createContext<Web3ContextProps | undefined>(undefined);

interface Web3ProviderProps {
  children: ReactNode;
  mainnetFallback: ReactNode;
}

export const Web3Provider: React.FC<Web3ProviderProps> = ({
  children,
  mainnetFallback,
}) => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [networkName, setNetworkName] = useState<Network>(Network.None);
  const [ethersProvider, setEthersProvider] =
    useState<ethers.BrowserProvider | null>(null);
  const [isAllowed, setIsAllowed] = useState<boolean>(false);
  const [hasMetamask, setHasMetamask] = useState<boolean>(false);

  // Flag to determine if developer mode is enabled
  // const developerMode = false;
  const developerMode = true;

  useEffect(() => {
    setLoading(true);

    const loadProvider = async () => {
      const wallet = get('account');
      if (wallet) {
        setWalletAddress(wallet);
        setIsConnected(true);
      }

      try {
        const provider = (window as any).ethereum;
        if (provider.isMetaMask) {
          setHasMetamask(true);
        } else {
          console.error('Please install MetaMask!');
        }
        if (provider) {
          const web3Instance = new Web3(provider);
          setWeb3(web3Instance);
          setupEthersProvider(provider);
          const chainID = await web3Instance.eth.getChainId();
          setNetworkName(determineNetwork(chainID));
          if (isMainnet && !developerMode) {
            setIsAllowed(true); // Show modal when on Mainnet
          }
        } else {
          console.error('Please install MetaMask!');
        }
      } catch (error) {
        console.error('Error loading provider:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProvider();
  }, [isConnected, networkName, developerMode]);

  // useEffect(() => {
  //   const attemptSwitchNetwork = async () => {
  //     if (web3 && networkName === Network.None) {
  //       switchNetwork(BigInt(17000)); // change to Holesky
  //       setIsAllowed(false);
  //     }
  //   };

  //   attemptSwitchNetwork();
  // }, [web3, networkName]);

  const isMainnet = networkName === Network.Mainnet;

  const determineNetwork = (chainID: bigint) => {
    switch (chainID) {
      case BigInt(1):
        return Network.Mainnet;
      case BigInt(17000):
        return Network.Holesky;
      case BigInt(31337):
        return Network.Anvil;
      default:
        return Network.None;
    }
  };

  const connectWallet = async () => {
    if (web3) {
      try {
        const accounts = await web3.eth.requestAccounts();
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          set('account', accounts[0]);
          setIsConnected(true);
        }
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    }
  };

  const setupEthersProvider = (provider: any) => {
    const ethersProvider = new ethers.BrowserProvider(provider);
    setEthersProvider(ethersProvider);
  };

  const disconnectWallet = () => {
    setWalletAddress('');
    del('account');
    setIsConnected(false);
  };

  return (
    <Web3Context.Provider
      value={{
        loading,
        hasMetamask,
        web3,
        ethersProvider,
        walletAddress,
        isConnected,
        networkName,
        isMainnet,
        connectWallet,
        disconnectWallet,
      }}
    >
      {isAllowed && mainnetFallback}
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};
