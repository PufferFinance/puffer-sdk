import { Address } from 'viem';
import { Chain } from '../chains/constants';

export enum PufToken {
  pufWETH = 'pufWETH',
  pufStETH = 'pufStETH',
  pufWstETH = 'pufWstETH',
  pufALT = 'pufALT',
  pufEETH = 'pufEETH',
}

// TODO: Update the addresses once the contracts are deployed on chain.
export const PUF_TOKEN_ADDRESSES: {
  [key in PufToken]: { [chain in Chain]: Address };
} = {
  [PufToken.pufWETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0xfcf6c4e0387a523b73691d5604e5a6da1607c8a0',
  },
  [PufToken.pufStETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [PufToken.pufWstETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [PufToken.pufALT]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [PufToken.pufEETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
};
