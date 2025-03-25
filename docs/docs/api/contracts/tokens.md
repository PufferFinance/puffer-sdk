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

[lib/contracts/tokens.ts:41](https://github.com/PufferFinance/puffer-sdk/blob/9a075aecd66cb0e2ee296f8c298140e2fa31335e/lib/contracts/tokens.ts#L41)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: `{ [key in AnyToken]: { [chain in Chain]: Address } }`

#### Source

[lib/contracts/tokens.ts:43](https://github.com/PufferFinance/puffer-sdk/blob/9a075aecd66cb0e2ee296f8c298140e2fa31335e/lib/contracts/tokens.ts#L43)

***

### TOKENS\_PERMIT\_VERSION

> `const` **TOKENS\_PERMIT\_VERSION**: `{ [key in AnyToken]: string }`

#### Source

[lib/contracts/tokens.ts:174](https://github.com/PufferFinance/puffer-sdk/blob/9a075aecd66cb0e2ee296f8c298140e2fa31335e/lib/contracts/tokens.ts#L174)

***

### TOKENS\_SALT

> `const` **TOKENS\_SALT**: `Partial`\<`{ [key in AnyToken]: { [chain in Chain]: Address } }`\>

#### Source

[lib/contracts/tokens.ts:221](https://github.com/PufferFinance/puffer-sdk/blob/9a075aecd66cb0e2ee296f8c298140e2fa31335e/lib/contracts/tokens.ts#L221)
