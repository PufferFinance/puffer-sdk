import { Chain as ViemChain } from 'viem';
import {
  mainnet,
  holesky,
  base,
  bsc,
  arbitrum,
  apeChain,
  soneium,
  sepolia,
  optimismSepolia,
  baseSepolia,
  zircuit,
  berachain,
  hoodi,
} from 'viem/chains';

export enum Chain {
  Mainnet = mainnet.id,
  Holesky = holesky.id,
  Base = base.id,
  Bsc = bsc.id,
  Arbitrum = arbitrum.id,
  ApeChain = apeChain.id,
  Soneium = soneium.id,
  Sepolia = sepolia.id,
  OptimismSepolia = optimismSepolia.id,
  BaseSepolia = baseSepolia.id,
  Zircuit = zircuit.id,
  Berachain = berachain.id,
  Hoodi = hoodi.id,
}

export const VIEM_CHAINS: { [key in Chain]: ViemChain } = {
  [Chain.Mainnet]: mainnet,
  [Chain.Holesky]: holesky,
  [Chain.Base]: base,
  [Chain.Bsc]: bsc,
  [Chain.Arbitrum]: arbitrum,
  [Chain.ApeChain]: apeChain,
  [Chain.Soneium]: soneium,
  [Chain.Sepolia]: sepolia,
  [Chain.OptimismSepolia]: optimismSepolia,
  [Chain.BaseSepolia]: baseSepolia,
  [Chain.Zircuit]: zircuit,
  [Chain.Berachain]: berachain,
  [Chain.Hoodi]: hoodi,
};

export { type ViemChain };
