# contracts/tokens

## Enumerations

### Token

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `ALT` | `"ALT"` |
| `ARPA` | `"ARPA"` |
| `CARROT` | `"CARROT"` |
| `DAI` | `"DAI"` |
| `EIGEN` | `"EIGEN"` |
| `LBTC` | `"LBTC"` |
| `LINK` | `"LINK"` |
| `PUFFER` | `"PUFFER"` |
| `SolvBTC` | `"SolvBTC"` |
| `TEST` | `"TEST"` |
| `USDC` | `"USDC"` |
| `USDT` | `"USDT"` |
| `VT` | `"VT"` |
| `WBTC` | `"WBTC"` |
| `WETH` | `"WETH"` |
| `cbBTC` | `"cbBTC"` |
| `cbETH` | `"cbETH"` |
| `ctTACpufETH` | `"ctTACpufETH"` |
| `eETH` | `"eETH"` |
| `lvlUSD` | `"lvlUSD"` |
| `mtwCARROT` | `"mtwCARROT"` |
| `pufETH` | `"pufETH"` |
| `pufETHwstE` | `"pufETHwstE"` |
| `pumpBTC` | `"pumpBTC"` |
| `sCARROT` | `"sCARROT"` |
| `slvlUSD` | `"slvlUSD"` |
| `stETH` | `"stETH"` |
| `tBTC` | `"tBTC"` |
| `tacpufETH` | `"tacpufETH"` |
| `vePUFFER` | `"vePUFFER"` |
| `vlPUFFER` | `"vlPUFFER"` |
| `wstETH` | `"wstETH"` |
| `xPufETH` | `"xPufETH"` |

***

### UnifiToken

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `pufETHs` | `"pufETHs"` |
| `unifiBTC` | `"unifiBTC"` |
| `unifiETH` | `"unifiETH"` |
| `unifiUSD` | `"unifiUSD"` |

## Type Aliases

### AnyToken

> **AnyToken**: [`Token`](tokens.md#token) \| [`UnifiToken`](tokens.md#unifitoken)

#### Source

[lib/contracts/tokens.ts:48](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/tokens.ts#L48)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: `{ [key in AnyToken]: { [chain in Chain]: Address } }`

#### Source

[lib/contracts/tokens.ts:50](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/tokens.ts#L50)

***

### TOKENS\_PERMIT\_VERSION

> `const` **TOKENS\_PERMIT\_VERSION**: `{ [key in AnyToken]: string }`

#### Source

[lib/contracts/tokens.ts:212](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/tokens.ts#L212)

***

### TOKENS\_SALT

> `const` **TOKENS\_SALT**: `Partial`\<`{ [key in AnyToken]: { [chain in Chain]: Address } }`\>

#### Source

[lib/contracts/tokens.ts:269](https://github.com/PufferFinance/puffer-sdk/blob/d1d818887a153c4e95fcbe23c233149dda199ecd/lib/contracts/tokens.ts#L269)
