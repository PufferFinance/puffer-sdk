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
| `unifiBTC` | `"unifiBTC"` |
| `unifiETH` | `"unifiETH"` |
| `unifiUSD` | `"unifiUSD"` |

## Type Aliases

### AnyToken

> **AnyToken**: [`Token`](tokens.md#token) \| [`UnifiToken`](tokens.md#unifitoken)

#### Source

[lib/contracts/tokens.ts:34](https://github.com/PufferFinance/puffer-sdk/blob/19acedcc3e7bfa8f4a1b86d9a874d641a82e9978/lib/contracts/tokens.ts#L34)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: `{ [key in AnyToken]: { [chain in Chain]: Address } }`

#### Source

[lib/contracts/tokens.ts:36](https://github.com/PufferFinance/puffer-sdk/blob/19acedcc3e7bfa8f4a1b86d9a874d641a82e9978/lib/contracts/tokens.ts#L36)

***

### TOKENS\_PERMIT\_VERSION

> `const` **TOKENS\_PERMIT\_VERSION**: `{ [key in AnyToken]: string }`

#### Source

[lib/contracts/tokens.ts:139](https://github.com/PufferFinance/puffer-sdk/blob/19acedcc3e7bfa8f4a1b86d9a874d641a82e9978/lib/contracts/tokens.ts#L139)

***

### TOKENS\_SALT

> `const` **TOKENS\_SALT**: `Partial`\<`{ [key in AnyToken]: { [chain in Chain]: Address } }`\>

#### Source

[lib/contracts/tokens.ts:178](https://github.com/PufferFinance/puffer-sdk/blob/19acedcc3e7bfa8f4a1b86d9a874d641a82e9978/lib/contracts/tokens.ts#L178)
