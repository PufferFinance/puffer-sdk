import { Address } from 'viem';
import { Chain } from '../chains/constants';

export enum Token {
  USDC = 'USDC',
  DAI = 'DAI',
  ETH = 'ETH',
  wETH = 'wETH',
  stETH = 'stETH',
  wstETH = 'wstETH',
  pufETH = 'pufETH',
  // Wrapped PufTokens.
  pufUSDC = 'pufUSDC',
  pufDAI = 'pufDAI',
  pufpufETH = 'pufpufETH',
  pufWETH = 'pufWETH',
  pufStETH = 'pufStETH',
  pufWstETH = 'pufWstETH',
  pufALT = 'pufALT',
  pufEETH = 'pufEETH',
}

export type NonPufToken = Extract<
  Token,
  'USDC' | 'DAI' | 'ETH' | 'wETH' | 'stETH' | 'wstETH' | 'pufETH'
>;

export type PufToken = Extract<
  Token,
  | 'pufUSDC'
  | 'pufDAI'
  | 'pufpufETH'
  | 'pufWETH'
  | 'pufStETH'
  | 'pufWstETH'
  | 'pufALT'
  | 'pufEETH'
>;

export const TOKENS_ADDRESSES: {
  [key in Token]: { [chain in Chain]: Address };
} = {
  [Token.USDC]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x64Cc0de0429bcb87e875905a0c313ec88f6d1d3E',
  },
  [Token.DAI]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x4478905505ddfb7eA1c8A9f46eAEC3695cE542ac',
  },
  [Token.ETH]: {},
  [Token.wETH]: {
    [Chain.Mainnet]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [Chain.Holesky]: '0x94373a4919b3240d86ea41593d5eba789fef3848',
  },
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
  // TODO: Update the addresses once the contracts are deployed on chain.
  // See https://dev.azure.com/pufferfi/Frontend/_workitems/edit/1797.
  // Wrapped PufTokens.
  [Token.pufUSDC]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x6D900a9f5784A2cA0004B5c3D3e08D7A9cE4A1b3',
  },
  [Token.pufDAI]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x3aDeeC5151FA881e76A3F42256CD78052372b362',
  },
  [Token.pufpufETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x083b6321F213C993B81a54BF4D6Cb38e175EFE68',
  },
  [Token.pufWETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0xfcF6c4e0387A523b73691D5604e5a6dA1607C8A0',
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
