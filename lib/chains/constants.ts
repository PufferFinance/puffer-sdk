import { Chain as ViemChain } from 'viem';
import { mainnet, holesky, base, bsc } from 'viem/chains';

export enum Chain {
  Mainnet = mainnet.id,
  Holesky = holesky.id,
  Base = base.id,
  Bsc = bsc.id,
}

export const VIEM_CHAINS: { [key in Chain]: ViemChain } = {
  [Chain.Mainnet]: mainnet,
  [Chain.Holesky]: holesky,
  [Chain.Base]: base,
  [Chain.Bsc]: bsc,
};

export { type ViemChain };
