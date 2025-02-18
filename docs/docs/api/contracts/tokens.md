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
| `PUFFER` | `"PUFFER"` |
| `SolvBTC` | `"SolvBTC"` |
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
| `slvlUSD` | `"slvlUSD"` |
| `stETH` | `"stETH"` |
| `tBTC` | `"tBTC"` |
| `wstETH` | `"wstETH"` |

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

[lib/contracts/tokens.ts:37](https://github.com/PufferFinance/puffer-sdk/blob/f53ce5c8c68838d336922a0d48246fe792f772d6/lib/contracts/tokens.ts#L37)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: `{ [key in AnyToken]: { [chain in Chain]: Address } }`

#### Source

[lib/contracts/tokens.ts:39](https://github.com/PufferFinance/puffer-sdk/blob/f53ce5c8c68838d336922a0d48246fe792f772d6/lib/contracts/tokens.ts#L39)

***

### TOKENS\_PERMIT\_VERSION

> `const` **TOKENS\_PERMIT\_VERSION**: `{ [key in AnyToken]: string }`

#### Source

[lib/contracts/tokens.ts:150](https://github.com/PufferFinance/puffer-sdk/blob/f53ce5c8c68838d336922a0d48246fe792f772d6/lib/contracts/tokens.ts#L150)

***

### TOKENS\_SALT

> `const` **TOKENS\_SALT**: `Partial`\<`{ [key in AnyToken]: { [chain in Chain]: Address } }`\>

#### Source

[lib/contracts/tokens.ts:193](https://github.com/PufferFinance/puffer-sdk/blob/f53ce5c8c68838d336922a0d48246fe792f772d6/lib/contracts/tokens.ts#L193)
