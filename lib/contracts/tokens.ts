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
  ALT = 'ALT',
  eETH = 'eETH',
  pufETH = 'pufETH',
}

export enum PufToken {
  pufUSDT = 'pufUSDT',
  pufUSDC = 'pufUSDC',
  pufDAI = 'pufDAI',
  pufpufETH = 'pufpufETH',
  pufWETH = 'pufWETH',
  pufstETH = 'pufstETH',
  pufwstETH = 'pufwstETH',
  pufALT = 'pufALT',
  pufeETH = 'pufeETH',
}

export type AnyToken = Token | PufToken;

export const TOKEN_TO_PUF_TOKEN_MAP = {
  [Token.USDT]: PufToken.pufUSDT,
  [Token.USDC]: PufToken.pufUSDC,
  [Token.DAI]: PufToken.pufDAI,
  [Token.ETH]: undefined,
  [Token.WETH]: PufToken.pufWETH,
  [Token.stETH]: PufToken.pufstETH,
  [Token.wstETH]: PufToken.pufwstETH,
  [Token.ALT]: PufToken.pufALT,
  [Token.eETH]: PufToken.pufeETH,
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
  [Token.WETH]: {
    [Chain.Mainnet]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [Chain.Holesky]: '0x1d181cBd1825e9eBC6AD966878D555A7215FF4F0',
  },
  [Token.stETH]: {
    [Chain.Mainnet]: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
    [Chain.Holesky]: '0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034',
  },
  [Token.wstETH]: {
    [Chain.Mainnet]: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
    [Chain.Holesky]: '0x8d09a4502Cc8Cf1547aD300E066060D043f6982D',
  },
  [Token.ALT]: {
    [Chain.Mainnet]: '0x8457ca5040ad67fdebbcc8edce889a335bc0fbfb',
    [Chain.Holesky]: '0xaf5588a571b42c7e50bd440d80f9bf94a4db94ee',
  },
  [Token.eETH]: {
    [Chain.Mainnet]: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
    [Chain.Holesky]: '0x7ba2ee123b5977e3da040e1eacb3a61c82c17876',
  },
  [Token.pufETH]: {
    [Chain.Mainnet]: '0xd9a442856c234a39a81a089c06451ebaa4306a72',
    [Chain.Holesky]: '0x9196830bB4c05504E0A8475A0aD566AceEB6BeC9',
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
    [Chain.Holesky]: '0x6D900a9f5784A2cA0004B5c3D3e08D7A9cE4A1b3',
  },
  [PufToken.pufDAI]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x2D6B705e118198A02F00490BA323B17eC5D58109',
  },
  [PufToken.pufWETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x5335f231C22d472Ab31CC2690A2247d25efd76a5',
  },
  [PufToken.pufstETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [PufToken.pufwstETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [PufToken.pufALT]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [PufToken.pufeETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [PufToken.pufpufETH]: {
    [Chain.Mainnet]: '0x0000000000000000000000000000000000000000',
    [Chain.Holesky]: '0x638fd1Fe8205285E8497Eb8E6037c8254EDdB0ae',
  },
};

export const TOKENS_PERMIT_VERSION: { [key in Token | PufToken]: string } = {
  [Token.USDT]: '2',
  // USDC does not support permit signatures (ERC20Permit).
  [Token.USDC]: '',
  // DAI does not support permit signatures (ERC20Permit).
  [Token.DAI]: '',
  [Token.ETH]: '',
  // WETH does not support permit signatures (ERC20Permit).
  [Token.WETH]: '',
  [Token.stETH]: '2',
  // Puffer Quest v1 uses version 1 for wstETH.
  [Token.wstETH]: '1',
  [Token.ALT]: '1',
  // https://github.com/etherfi-protocol/smart-contracts/blob/7c66e571df4fe7ec502a3c325b623bc52349ef9d/src/EETH.sol#L55
  [Token.eETH]: '1',
  [Token.pufETH]: '1',

  // Wrapped PufTokens
  [PufToken.pufUSDT]: '1',
  [PufToken.pufUSDC]: '1',
  [PufToken.pufDAI]: '1',
  [PufToken.pufWETH]: '1',
  [PufToken.pufstETH]: '1',
  [PufToken.pufwstETH]: '1',
  [PufToken.pufALT]: '1',
  [PufToken.pufeETH]: '1',
  [PufToken.pufpufETH]: '1',
};
