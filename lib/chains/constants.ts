import { Chain as ViemChain } from 'viem';
import { mainnet, holesky } from 'viem/chains';

export enum Chain {
  Mainnet = mainnet.id,
  Holesky = holesky.id,
}

export const VIEM_CHAINS: { [key in Chain]: ViemChain } = {
  [Chain.Mainnet]: mainnet,
  [Chain.Holesky]: holesky,
};

export { type ViemChain };
