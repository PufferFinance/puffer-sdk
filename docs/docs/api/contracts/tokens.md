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

[lib/contracts/tokens.ts:42](https://github.com/PufferFinance/puffer-sdk/blob/ffbb31200179ce3d38953a8f9042fee9aa2a784a/lib/contracts/tokens.ts#L42)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: `{ [key in AnyToken]: { [chain in Chain]: Address } }`

#### Source

[lib/contracts/tokens.ts:44](https://github.com/PufferFinance/puffer-sdk/blob/ffbb31200179ce3d38953a8f9042fee9aa2a784a/lib/contracts/tokens.ts#L44)

***

### TOKENS\_PERMIT\_VERSION

> `const` **TOKENS\_PERMIT\_VERSION**: `{ [key in AnyToken]: string }`

#### Source

[lib/contracts/tokens.ts:180](https://github.com/PufferFinance/puffer-sdk/blob/ffbb31200179ce3d38953a8f9042fee9aa2a784a/lib/contracts/tokens.ts#L180)

***

### TOKENS\_SALT

> `const` **TOKENS\_SALT**: `Partial`\<`{ [key in AnyToken]: { [chain in Chain]: Address } }`\>

#### Source

[lib/contracts/tokens.ts:228](https://github.com/PufferFinance/puffer-sdk/blob/ffbb31200179ce3d38953a8f9042fee9aa2a784a/lib/contracts/tokens.ts#L228)
