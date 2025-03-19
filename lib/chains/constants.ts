import { Chain as ViemChain } from 'viem';
import {
  mainnet,
  holesky,
  base,
  bsc,
  sepolia,
  optimismSepolia,
  baseSepolia,
} from 'viem/chains';

export enum Chain {
  Mainnet = mainnet.id,
  Holesky = holesky.id,
  Base = base.id,
  Bsc = bsc.id,
  Sepolia = sepolia.id,
  OptimismSepolia = optimismSepolia.id,
  BaseSepolia = baseSepolia.id,
}

export const VIEM_CHAINS: { [key in Chain]: ViemChain } = {
  [Chain.Mainnet]: mainnet,
  [Chain.Holesky]: holesky,
  [Chain.Base]: base,
  [Chain.Bsc]: bsc,
  [Chain.Sepolia]: sepolia,
  [Chain.OptimismSepolia]: optimismSepolia,
  [Chain.BaseSepolia]: baseSepolia,
};

export { type ViemChain };
