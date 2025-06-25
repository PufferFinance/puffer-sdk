# contracts/tokens

## Enumerations

### Token

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `ALT` | `"ALT"` |
| `CARROT` | `"CARROT"` |
| `DAI` | `"DAI"` |
| `LBTC` | `"LBTC"` |
| `LINK` | `"LINK"` |
| `PUFFER` | `"PUFFER"` |
| `SolvBTC` | `"SolvBTC"` |
| `TEST` | `"TEST"` |
| `USDC` | `"USDC"` |
| `USDT` | `"USDT"` |
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
| `vePUFFER` | `"vePUFFER"` |
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

[lib/contracts/tokens.ts:43](https://github.com/PufferFinance/puffer-sdk/blob/a99d16a4c81c9790bc5d674be8b4ae73da6c9ab6/lib/contracts/tokens.ts#L43)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: `{ [key in AnyToken]: { [chain in Chain]: Address } }`

#### Source

[lib/contracts/tokens.ts:45](https://github.com/PufferFinance/puffer-sdk/blob/a99d16a4c81c9790bc5d674be8b4ae73da6c9ab6/lib/contracts/tokens.ts#L45)

***

### TOKENS\_PERMIT\_VERSION

> `const` **TOKENS\_PERMIT\_VERSION**: `{ [key in AnyToken]: string }`

#### Source

[lib/contracts/tokens.ts:186](https://github.com/PufferFinance/puffer-sdk/blob/a99d16a4c81c9790bc5d674be8b4ae73da6c9ab6/lib/contracts/tokens.ts#L186)

***

### TOKENS\_SALT

> `const` **TOKENS\_SALT**: `Partial`\<`{ [key in AnyToken]: { [chain in Chain]: Address } }`\>

#### Source

[lib/contracts/tokens.ts:237](https://github.com/PufferFinance/puffer-sdk/blob/a99d16a4c81c9790bc5d674be8b4ae73da6c9ab6/lib/contracts/tokens.ts#L237)
