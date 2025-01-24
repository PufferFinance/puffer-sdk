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

[lib/contracts/tokens.ts:33](https://github.com/PufferFinance/puffer-sdk/blob/902dcf689642fbd8f30bfc32811a64f4ce4ce61f/lib/contracts/tokens.ts#L33)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: `{ [key in AnyToken]: { [chain in Chain]: Address } }`

#### Source

[lib/contracts/tokens.ts:35](https://github.com/PufferFinance/puffer-sdk/blob/902dcf689642fbd8f30bfc32811a64f4ce4ce61f/lib/contracts/tokens.ts#L35)

***

### TOKENS\_PERMIT\_VERSION

> `const` **TOKENS\_PERMIT\_VERSION**: `{ [key in AnyToken]: string }`

#### Source

[lib/contracts/tokens.ts:134](https://github.com/PufferFinance/puffer-sdk/blob/902dcf689642fbd8f30bfc32811a64f4ce4ce61f/lib/contracts/tokens.ts#L134)

***

### TOKENS\_SALT

> `const` **TOKENS\_SALT**: `Partial`\<`{ [key in AnyToken]: { [chain in Chain]: Address } }`\>

#### Source

[lib/contracts/tokens.ts:170](https://github.com/PufferFinance/puffer-sdk/blob/902dcf689642fbd8f30bfc32811a64f4ce4ce61f/lib/contracts/tokens.ts#L170)
