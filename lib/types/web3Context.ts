import { ethers } from 'ethers';
import Web3 from 'web3';

import { Network } from '../config/networks';

export type IWeb3Context = {
  web3: Web3 | null;
  networkName: Network;
  walletAddress: string;
  isConnected: boolean;
  isMainnet: boolean;
  ethersProvider: ethers.BrowserProvider | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
};
