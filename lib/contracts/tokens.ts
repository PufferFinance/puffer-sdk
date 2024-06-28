import { Address } from 'viem';
import { Chain } from '../chains/constants';

export enum Token {
  ETH = 'ETH',
  stETH = 'stETH',
  wstETH = 'wstETH',
  // Wrapped PufTokens.
  pufETH = 'pufETH',
  pufWETH = 'pufWETH',
  pufStETH = 'pufStETH',
  pufWstETH = 'pufWstETH',
  pufALT = 'pufALT',
  pufEETH = 'pufEETH',
}

export type PufToken = Extract<
  Token,
  'pufWETH' | 'pufStETH' | 'pufWstETH' | 'pufALT' | 'pufEETH'
>;

export const TOKENS_ADDRESSES: {
  [key in Token]: { [chain in Chain]: Address };
} = {
  [Token.stETH]: {
    [Chain.Mainnet]: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
    [Chain.Holesky]: '0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034',
  },
  [Token.wstETH]: {
    [Chain.Mainnet]: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
    [Chain.Holesky]: '0x8d09a4502Cc8Cf1547aD300E066060D043f6982D',
  },
  [Token.pufETH]: {
    [Chain.Mainnet]: '0xd9a442856c234a39a81a089c06451ebaa4306a72',
    [Chain.Holesky]: '0x9196830bB4c05504E0A8475A0aD566AceEB6BeC9',
  },
  [Token.ETH]: {},
  // TODO: Update the addresses once the contracts are deployed on chain.
  // See https://dev.azure.com/pufferfi/Frontend/_workitems/edit/1797.
  // Wrapper PufTokens.
  [Token.pufWETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0xfcf6c4e0387a523b73691d5604e5a6da1607c8a0',
  },
  [Token.pufStETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.pufWstETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.pufALT]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.pufEETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
};
