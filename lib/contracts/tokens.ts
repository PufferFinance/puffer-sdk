import { Address } from 'viem';
import { Chain } from '../chains/constants';

export enum Token {
  USDT = 'USDT',
  USDC = 'USDC',
  DAI = 'DAI',
  WETH = 'WETH',
  stETH = 'stETH',
  wstETH = 'wstETH',
  eETH = 'eETH',
  cbETH = 'cbETH',
  ALT = 'ALT',
  pufETHwstE = 'pufETHwstE',
  pufETH = 'pufETH',
  xPufETH = 'xPufETH',
  ctTACpufETH = 'ctTACpufETH',
  tacpufETH = 'tacpufETH',
  WBTC = 'WBTC',
  LBTC = 'LBTC',
  tBTC = 'tBTC',
  cbBTC = 'cbBTC',
  pumpBTC = 'pumpBTC',
  SolvBTC = 'SolvBTC',
  FBTC = 'FBTC',
  PUFFER = 'PUFFER',
  vePUFFER = 'vePUFFER',
  CARROT = 'CARROT',
  lvlUSD = 'lvlUSD',
  slvlUSD = 'slvlUSD',
  mtwCARROT = 'mtwCARROT',
  sCARROT = 'sCARROT',
  LINK = 'LINK',
  TEST = 'TEST',
  VT = 'VT',
  EIGEN = 'EIGEN',
  ARPA = 'ARPA',
  vlPUFFER = 'vlPUFFER',
}

export enum UnifiToken {
  unifiETH = 'unifiETH',
  unifiUSD = 'unifiUSD',
  unifiBTC = 'unifiBTC',
  // Symbiotic pufETH.
  pufETHs = 'pufETHs',
}

export type AnyToken = Token | UnifiToken;

export const TOKENS_ADDRESSES: {
  [key in AnyToken]: { [chain in Chain]: Address };
} = {
  [Token.VT]: {
    [Chain.Mainnet]: '0x7D26AD6F6BA9D6bA1de0218Ae5e20CD3a273a55A',
    [Chain.Holesky]: '0xB028194785178a94Fe608994A4d5AD84c285A640',
    [Chain.Hoodi]: '0x2246a5CF6050F6980719a62b53D6261e35650fdd',
  },
  [Token.TEST]: {
    [Chain.Sepolia]: '0xd26e3540a0a368845b234736a0700e0a5a821bba',
    [Chain.OptimismSepolia]: '0x7Fa13D6CB44164ea09dF8BCc673A8849092D435b',
  },
  [Token.LINK]: {
    [Chain.BaseSepolia]: '0xe4ab69c077896252fafbd49efd26b5d171a32410',
    [Chain.OptimismSepolia]: '0xE4aB69C077896252FAFBD49EFD26B5D171A32410',
  },
  [Token.USDT]: {
    [Chain.Mainnet]: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    [Chain.Holesky]: '0xd5bef2c64f418fd460319521d37862327122e3bc',
    [Chain.Sepolia]: '0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0',
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
    [Chain.Hoodi]: '0x251609d3e04165CA5CfaBa5DEE70A4e47863D060',
  },
  [Token.stETH]: {
    [Chain.Mainnet]: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
    [Chain.Holesky]: '0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034',
    [Chain.Hoodi]: '0x3508A952176b3c15387C97BE809eaffB1982176a',
  },
  [Token.wstETH]: {
    [Chain.Mainnet]: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
    [Chain.Holesky]: '0x8d09a4502Cc8Cf1547aD300E066060D043f6982D',
  },
  [Token.eETH]: {
    [Chain.Mainnet]: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
    [Chain.Holesky]: '0x7ba2ee123b5977e3da040e1eacb3a61c82c17876',
  },
  [Token.cbETH]: {
    [Chain.Mainnet]: '0xbe9895146f7af43049ca1c1ae358b0541ea49704',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.ALT]: {
    [Chain.Mainnet]: '0x8457ca5040ad67fdebbcc8edce889a335bc0fbfb',
    [Chain.Holesky]: '0xaf5588a571b42c7e50bd440d80f9bf94a4db94ee',
  },
  [Token.pufETHwstE]: {
    [Chain.Mainnet]: '0xeeda34a377dd0ca676b9511ee1324974fa8d980d',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.pufETH]: {
    [Chain.Mainnet]: '0xd9a442856c234a39a81a089c06451ebaa4306a72',
    [Chain.Holesky]: '0x9196830bB4c05504E0A8475A0aD566AceEB6BeC9',
    [Chain.Soneium]: '0x6c460b2c6D6719562D5dA43E5152B375e79B9A8B',
    [Chain.Arbitrum]: '0x37D6382B6889cCeF8d6871A8b60E667115eDDBcF',
    [Chain.Berachain]: '0x417b0Ff8358Eb72867Da92225CaB99BCD5e6F205',
    [Chain.TAC]: '0x37D6382B6889cCeF8d6871A8b60E667115eDDBcF',
    [Chain.Hoodi]: '0xe8870da7ceabDC16016bdF22b1528cA7625Dbc9C',
  },
  [Token.xPufETH]: {
    [Chain.Mainnet]: '0xD7D2802f6b19843ac4DfE25022771FD83b5A7464',
    [Chain.Base]: '0x23dA5F2d509cb43A59d43C108a43eDf34510eff1',
    [Chain.Bsc]: '0x64274835D88F5c0215da8AADd9A5f2D2A2569381',
    [Chain.ApeChain]: '0x6234E5ef39B12EFdFcbd99dd7F452F27F3fEAE3b',
    [Chain.Zircuit]: '0x9346A5043C590133FE900aec643D9622EDddBA57',
  },
  [Token.ctTACpufETH]: {
    [Chain.Mainnet]: '0x78f314241df1ac151bfd0413eeb51979515f6abd',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.tacpufETH]: {
    // This is the pre-deposit contract.
    [Chain.Mainnet]: '0xf2e97704a567e003ed97f2d0976c45b2dda766a0',
    [Chain.TAC]: '0x85AF3C2755f17bA26D7326E8069Bf10719441068',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.WBTC]: {
    [Chain.Mainnet]: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.LBTC]: {
    [Chain.Mainnet]: '0x8236a87084f8b84306f72007f36f2618a5634494',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.tBTC]: {
    [Chain.Mainnet]: '0x18084fbA666a33d37592fA2633fD49a74DD93a88',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.cbBTC]: {
    [Chain.Mainnet]: '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.pumpBTC]: {
    [Chain.Mainnet]: '0xf469fbd2abcd6b9de8e169d128226c0fc90a012e',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.SolvBTC]: {
    [Chain.Mainnet]: '0x7a56e1c57c7475ccf742a1832b028f0456652f97',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.FBTC]: {
    [Chain.Mainnet]: '0xC96dE26018A54D51c097160568752c4E3BD6C364',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.PUFFER]: {
    [Chain.Mainnet]: '0x4d1c297d39c5c1277964d0e3f8aa901493664530',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.vePUFFER]: {
    [Chain.Mainnet]: '0xA55eD5808aeCDF23AE3782C1443185f5D2363ce7',
  },
  [Token.CARROT]: {
    [Chain.Mainnet]: '0x282a69142bac47855c3fbe1693fcc4ba3b4d5ed6',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.lvlUSD]: {
    [Chain.Mainnet]: '0x7C1156E515aA1A2E851674120074968C905aAF37',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.slvlUSD]: {
    [Chain.Mainnet]: '0x4737d9b4592b40d51e110b94c9c043c6654067ae',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.mtwCARROT]: {
    [Chain.Mainnet]: '0x8A5A5DE9db5770123Ff2145F59e9F20047f0A8EC',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.sCARROT]: {
    [Chain.Mainnet]: '0x99c599227c65132822f0290d9e5b4b0430d6c0d6',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.EIGEN]: {
    [Chain.Mainnet]: '0xec53bF9167f50cDEB3Ae105f56099aaaB9061F83',
  },
  [Token.ARPA]: {
    [Chain.Mainnet]: '0xBA50933C268F567BDC86E1aC131BE072C6B0b71a',
  },

  // UniFi Tokens
  [UnifiToken.unifiETH]: {
    [Chain.Mainnet]: '0x196ead472583bc1e9af7a05f860d9857e1bd3dcc',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [UnifiToken.unifiUSD]: {
    [Chain.Mainnet]: '0x82c40e07277eBb92935f79cE92268F80dDc7caB4',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [UnifiToken.unifiBTC]: {
    [Chain.Mainnet]: '0x170d847a8320f3b6a77ee15b0cae430e3ec933a0',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [UnifiToken.pufETHs]: {
    [Chain.Mainnet]: '0x62a4ce0722ee65635c0f8339dd814d549b6f6735',
    [Chain.Holesky]: '0x0000000000000000000000000000000000000000',
  },
  [Token.vlPUFFER]: {
    [Chain.Mainnet]: '0x1e168460ea0cf3f126ddd3183dc2e376515a5e91',
  },
};

export const TOKENS_PERMIT_VERSION: { [key in AnyToken]: string } = {
  // USDC does not support permit signatures (ERC20Permit).
  // https://ethereum.stackexchange.com/questions/166254/usdt-contract-dont-have-erc20permit
  [Token.USDT]: '',
  // USDC does not support permit signatures (ERC20Permit).
  [Token.USDC]: '',
  // DAI does not support permit signatures (ERC20Permit).
  [Token.DAI]: '',
  // WETH does not support permit signatures (ERC20Permit).
  [Token.WETH]: '',
  [Token.stETH]: '2',
  // Puffer Quest v1 uses version 1 for wstETH.
  [Token.wstETH]: '1',
  // https://github.com/etherfi-protocol/smart-contracts/blob/7c66e571df4fe7ec502a3c325b623bc52349ef9d/src/EETH.sol#L55
  [Token.eETH]: '1',
  // https://etherscan.io/token/0xbe9895146f7af43049ca1c1ae358b0541ea49704#readProxyContract#F26
  [Token.cbETH]: '2',
  [Token.ALT]: '1',
  [Token.pufETHwstE]: 'v7.0.0',
  [Token.pufETH]: '1',
  [Token.xPufETH]: '1',
  [Token.ctTACpufETH]: '',
  // https://etherscan.io/address/0xf2e97704a567e003ed97f2d0976c45b2dda766a0#readProxyContract#F39
  [Token.tacpufETH]: 'v0.5.0',
  [Token.WBTC]: '',
  [Token.LBTC]: '',
  [Token.tBTC]: '',
  [Token.cbBTC]: '',
  [Token.pumpBTC]: '',
  [Token.SolvBTC]: '',
  [Token.FBTC]: '',
  [Token.PUFFER]: '1',
  [Token.vePUFFER]: '1',
  [Token.CARROT]: '1',
  [Token.lvlUSD]: '1',
  // `slvlUSD` supports permit but the transactions are reverting now
  // for some reason.
  [Token.slvlUSD]: '',
  [Token.mtwCARROT]: '',
  [Token.sCARROT]: '',
  [Token.LINK]: '',
  [Token.TEST]: '',
  [Token.VT]: '1',
  [Token.EIGEN]: '1',
  [Token.ARPA]: '1',

  // UniFi Tokens
  // https://etherscan.io/address/0x196ead472583bc1e9af7a05f860d9857e1bd3dcc#code#F7#L172
  [UnifiToken.unifiETH]: '1',
  // https://etherscan.io/address/0x82c40e07277eBb92935f79cE92268F80dDc7caB4#code#F7#L172
  [UnifiToken.unifiUSD]: '1',
  // https://etherscan.io/address/0x170d847a8320f3b6a77ee15b0cae430e3ec933a0#code#F7#L172
  [UnifiToken.unifiBTC]: '1',
  // https://etherscan.io/address/0x62a4ce0722ee65635c0f8339dd814d549b6f6735#code#F7#L172
  [UnifiToken.pufETHs]: '1',
  [Token.vlPUFFER]: '1',
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
