import { Address } from 'viem';
import { Chain } from '../chains/constants';

export enum Token {
  USDT = 'USDT',
  USDC = 'USDC',
  DAI = 'DAI',
  WETH = 'WETH',
  stETH = 'stETH',
  wstETH = 'wstETH',
  ALT = 'ALT',
  eETH = 'eETH',
  pufETHwstE = 'pufETHwstE',
  pufETH = 'pufETH',
}

export enum UnifiToken {
  unifiETH = 'unifiETH',
}

export type AnyToken = Token | UnifiToken;

export const TOKEN_TO_UNIFI_TOKEN_MAP = {};

export const TOKENS_ADDRESSES: {
  [key in AnyToken]: { [chain in Chain]: Address };
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
  [Token.pufETHwstE]: {
    [Chain.Mainnet]: '0xeeda34a377dd0ca676b9511ee1324974fa8d980d',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.pufETH]: {
    [Chain.Mainnet]: '0xd9a442856c234a39a81a089c06451ebaa4306a72',
    [Chain.Holesky]: '0x9196830bB4c05504E0A8475A0aD566AceEB6BeC9',
  },

  // TODO: Update the addresses once the contracts are deployed on chain.
  // See https://dev.azure.com/pufferfi/Frontend/_workitems/edit/1797.

  // UniFi Tokens
  [UnifiToken.unifiETH]: {
    [Chain.Mainnet]: '0x196ead472583bc1e9af7a05f860d9857e1bd3dcc',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
};

export const TOKENS_PERMIT_VERSION: { [key in AnyToken]: string } = {
  [Token.USDT]: '2',
  // USDC does not support permit signatures (ERC20Permit).
  [Token.USDC]: '',
  // DAI does not support permit signatures (ERC20Permit).
  [Token.DAI]: '',
  // WETH does not support permit signatures (ERC20Permit).
  [Token.WETH]: '',
  [Token.stETH]: '2',
  // Puffer Quest v1 uses version 1 for wstETH.
  [Token.wstETH]: '1',
  [Token.ALT]: '1',
  // https://github.com/etherfi-protocol/smart-contracts/blob/7c66e571df4fe7ec502a3c325b623bc52349ef9d/src/EETH.sol#L55
  [Token.eETH]: '1',
  [Token.pufETHwstE]: 'v7.0.0',
  [Token.pufETH]: '1',

  // UniFi Tokens
  [UnifiToken.unifiETH]: '1',
};

export const TOKENS_SALT: Partial<{
  [key in AnyToken]: { [chain in Chain]: Address };
}> = {
  [Token.pufETHwstE]: {
    // Taken from
    // https://etherscan.io/token/0xeeda34a377dd0ca676b9511ee1324974fa8d980d#readContract#F39.
    [Chain.Mainnet]:
      '0x0e986ed5610121905f03fd3850cebcc00f66166fc3ab760acb4e087d735d9457',
    [Chain.Holesky]:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
};
