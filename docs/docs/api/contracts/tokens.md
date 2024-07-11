# contracts/tokens

## Enumerations

### Token

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `DAI` | `"DAI"` |
| `ETH` | `"ETH"` |
| `USDC` | `"USDC"` |
| `USDT` | `"USDT"` |
| `WETH` | `"wETH"` |
| `pufALT` | `"pufALT"` |
| `pufDAI` | `"pufDAI"` |
| `pufEETH` | `"pufEETH"` |
| `pufETH` | `"pufETH"` |
| `pufStETH` | `"pufStETH"` |
| `pufUSDC` | `"pufUSDC"` |
| `pufUSDT` | `"pufUSDT"` |
| `pufWETH` | `"pufWETH"` |
| `pufWstETH` | `"pufWstETH"` |
| `pufpufETH` | `"pufpufETH"` |
| `stETH` | `"stETH"` |
| `wstETH` | `"wstETH"` |

## Type Aliases

### NonPufToken

> **NonPufToken**: `Extract` \<[`Token`](tokens.md#token), `"USDT"` \| `"USDC"` \| `"DAI"` \| `"ETH"` \| `"WETH"` \| `"stETH"` \| `"wstETH"` \| `"pufETH"`\>

#### Source

[lib/contracts/tokens.ts:26](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/tokens.ts#L26)

***

### PufToken

> **PufToken**: `Extract` \<[`Token`](tokens.md#token), `"pufUSDT"` \| `"pufUSDC"` \| `"pufDAI"` \| `"pufpufETH"` \| `"pufWETH"` \| `"pufStETH"` \| `"pufWstETH"` \| `"pufALT"` \| `"pufEETH"`\>

#### Source

[lib/contracts/tokens.ts:31](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/tokens.ts#L31)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: `{ [key in Token]: { [chain in Chain]: Address } }`

#### Source

[lib/contracts/tokens.ts:44](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/tokens.ts#L44)

***

### TOKENS\_PERMIT\_VERSION

> `const` **TOKENS\_PERMIT\_VERSION**: `object`

#### Type declaration

##### DAI

> **DAI**: `string` = `'1'`

##### ETH

> **ETH**: `string` = `''`

##### USDC

> **USDC**: `string` = `'2'`

##### USDT

> **USDT**: `string` = `'2'`

##### pufALT

> **pufALT**: `string` = `'1'`

##### pufDAI

> **pufDAI**: `string` = `'1'`

##### pufEETH

> **pufEETH**: `string` = `'1'`

##### pufETH

> **pufETH**: `string` = `'1'`

##### pufStETH

> **pufStETH**: `string` = `'1'`

##### pufUSDC

> **pufUSDC**: `string` = `'1'`

##### pufUSDT

> **pufUSDT**: `string` = `'1'`

##### pufWETH

> **pufWETH**: `string` = `'1'`

##### pufWstETH

> **pufWstETH**: `string` = `'1'`

##### pufpufETH

> **pufpufETH**: `string` = `'1'`

##### stETH

> **stETH**: `string` = `'2'`

##### wETH

> **wETH**: `string` = `''`

##### wstETH

> **wstETH**: `string` = `'1'`

#### Source

[lib/contracts/tokens.ts:120](https://github.com/PufferFinance/puffer-sdk/blob/b5daa782ae6806e90fac58668a99d5205505589f/lib/contracts/tokens.ts#L120)
