# contracts/tokens

## Enumerations

### Token

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `ALT` | `"ALT"` |
| `DAI` | `"DAI"` |
| `LBTC` | `"LBTC"` |
| `USDC` | `"USDC"` |
| `USDT` | `"USDT"` |
| `WBTC` | `"WBTC"` |
| `WETH` | `"WETH"` |
| `cbBTC` | `"cbBTC"` |
| `eETH` | `"eETH"` |
| `pufETH` | `"pufETH"` |
| `pufETHwstE` | `"pufETHwstE"` |
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

[lib/contracts/tokens.ts:27](https://github.com/PufferFinance/puffer-sdk/blob/f7546e5e9a7742d28c2acc6d473bdf05079d711c/lib/contracts/tokens.ts#L27)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: `{ [key in AnyToken]: { [chain in Chain]: Address } }`

#### Source

[lib/contracts/tokens.ts:29](https://github.com/PufferFinance/puffer-sdk/blob/f7546e5e9a7742d28c2acc6d473bdf05079d711c/lib/contracts/tokens.ts#L29)

***

### TOKENS\_PERMIT\_VERSION

> `const` **TOKENS\_PERMIT\_VERSION**: `{ [key in AnyToken]: string }`

#### Source

[lib/contracts/tokens.ts:104](https://github.com/PufferFinance/puffer-sdk/blob/f7546e5e9a7742d28c2acc6d473bdf05079d711c/lib/contracts/tokens.ts#L104)

***

### TOKENS\_SALT

> `const` **TOKENS\_SALT**: `Partial`\<`{ [key in AnyToken]: { [chain in Chain]: Address } }`\>

#### Source

[lib/contracts/tokens.ts:134](https://github.com/PufferFinance/puffer-sdk/blob/f7546e5e9a7742d28c2acc6d473bdf05079d711c/lib/contracts/tokens.ts#L134)
