import { Chain as ViemChain } from 'viem';
import { mainnet, anvil, holesky } from 'viem/chains';

export enum Chain {
  Mainnet = 'mainnet',
  Holesky = 'holesky',
  Anvil = 'anvil',
}

export const VIEM_CHAINS: { [key in Chain]: ViemChain } = {
  [Chain.Mainnet]: mainnet,
  [Chain.Holesky]: holesky,
  [Chain.Anvil]: anvil,
};

export { type ViemChain };
