# contracts/tokens

## Enumerations

### Token

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `ALT` | `"ALT"` |
| `DAI` | `"DAI"` |
| `USDC` | `"USDC"` |
| `USDT` | `"USDT"` |
| `WETH` | `"WETH"` |
| `eETH` | `"eETH"` |
| `pufETH` | `"pufETH"` |
| `pufETHwstE` | `"pufETHwstE"` |
| `stETH` | `"stETH"` |
| `wstETH` | `"wstETH"` |

***

### UnifiToken

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `unifiETH` | `"unifiETH"` |

## Type Aliases

### AnyToken

> **AnyToken**: [`Token`](tokens.md#token) \| [`UnifiToken`](tokens.md#unifitoken)

#### Source

[lib/contracts/tokens.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/0be1bec30fd92606682cd2b2062122b82c51e20f/lib/contracts/tokens.ts#L21)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: `{ [key in AnyToken]: { [chain in Chain]: Address } }`

#### Source

[lib/contracts/tokens.ts:23](https://github.com/PufferFinance/puffer-sdk/blob/0be1bec30fd92606682cd2b2062122b82c51e20f/lib/contracts/tokens.ts#L23)

***

### TOKENS\_PERMIT\_VERSION

> `const` **TOKENS\_PERMIT\_VERSION**: `{ [key in AnyToken]: string }`

#### Source

[lib/contracts/tokens.ts:77](https://github.com/PufferFinance/puffer-sdk/blob/0be1bec30fd92606682cd2b2062122b82c51e20f/lib/contracts/tokens.ts#L77)

***

### TOKENS\_SALT

> `const` **TOKENS\_SALT**: `Partial`\<`{ [key in AnyToken]: { [chain in Chain]: Address } }`\>

#### Source

[lib/contracts/tokens.ts:99](https://github.com/PufferFinance/puffer-sdk/blob/0be1bec30fd92606682cd2b2062122b82c51e20f/lib/contracts/tokens.ts#L99)
