import { Address } from 'viem';
import { Chain } from '../chains/constants';

export enum Token {
  USDT = 'USDT',
  USDC = 'USDC',
  DAI = 'DAI',
  ETH = 'ETH',
  WETH = 'WETH',
  stETH = 'stETH',
  wstETH = 'wstETH',
  pufETH = 'pufETH',
}

export enum PufToken {
  pufUSDT = 'pufUSDT',
  pufUSDC = 'pufUSDC',
  pufDAI = 'pufDAI',
  pufpufETH = 'pufpufETH',
  pufWETH = 'pufWETH',
  pufStETH = 'pufStETH',
  pufWstETH = 'pufWstETH',
  pufALT = 'pufALT',
  pufEETH = 'pufEETH',
}

export type AnyToken = Token | PufToken;

export const TOKEN_TO_PUF_TOKEN_MAP = {
  [Token.USDT]: PufToken.pufUSDT,
  [Token.USDC]: PufToken.pufUSDC,
  [Token.DAI]: PufToken.pufDAI,
  [Token.ETH]: PufToken.pufEETH,
  [Token.WETH]: PufToken.pufWETH,
  [Token.stETH]: PufToken.pufStETH,
  [Token.wstETH]: PufToken.pufWstETH,
  [Token.pufETH]: PufToken.pufpufETH,
};

export const TOKENS_ADDRESSES: {
  [key in Token | PufToken]: { [chain in Chain]: Address };
} = {
  [Token.USDT]: {
    [Chain.Mainnet]: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    [Chain.Holesky]: '0xd5bef2c64f418fd460319521d37862327122e3bc',
  },
  [Token.USDC]: {
    [Chain.Mainnet]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    [Chain.Holesky]: '0x64Cc0de0429bcb87e875905a0c313ec88f6d1d3E',
  },
  [Token.DAI]: {
    [Chain.Mainnet]: '0x6b175474e89094c44da98b954eedeac495271d0f',
    [Chain.Holesky]: '0x4478905505ddfb7eA1c8A9f46eAEC3695cE542ac',
  },
  [Token.ETH]: {},
  // WETH does not support permit signatures (ERC20Permit).
  [Token.WETH]: {
    [Chain.Mainnet]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [Chain.Holesky]: '0x35B1167b4D37931540F4e5189004d1756d1381B0',
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
    [Chain.Holesky]: '0x9196830bb4c05504e0a8475a0ad566aceeb6bec9',
  },

  // TODO: Update the addresses once the contracts are deployed on chain.
  // See https://dev.azure.com/pufferfi/Frontend/_workitems/edit/1797.

  // Wrapped PufTokens.
  [PufToken.pufUSDT]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x61e7C87c387178D6e0aE6c04748b7FF753fC9b81',
  },
  [PufToken.pufUSDC]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0xC4731029b6F4fEd5930A56F0FFa3E8Ae688f9dA8',
  },
  [PufToken.pufDAI]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0xcA1C3DBC6Ea41f018B8d91C3AbE6FacDBDd4F63e',
  },
  [PufToken.pufEETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [PufToken.pufWETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x2207119500757bDD269F98d86Dca6356535b876E',
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
  [PufToken.pufpufETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0xECa244cBBe52A68EB6c4fdC266c2c50D568bcd22',
  },
};

export const TOKENS_PERMIT_VERSION: { [key in Token | PufToken]: string } = {
  [Token.USDT]: '2',
  // USDC does not support permit signatures (ERC20Permit).
  [Token.USDC]: '2',
  [Token.DAI]: '1',
  [Token.ETH]: '',
  // WETH does not support permit signatures (ERC20Permit).
  [Token.WETH]: '',
  [Token.stETH]: '2',
  // Puffer Quest v1 uses version 1 for wstETH.
  [Token.wstETH]: '1',
  [Token.pufETH]: '1',

  // Wrapped PufTokens
  [PufToken.pufUSDT]: '1',
  [PufToken.pufUSDC]: '1',
  [PufToken.pufDAI]: '1',
  [PufToken.pufEETH]: '1',
  [PufToken.pufWETH]: '1',
  [PufToken.pufStETH]: '1',
  [PufToken.pufWstETH]: '1',
  [PufToken.pufALT]: '1',
  [PufToken.pufpufETH]: '1',
};
