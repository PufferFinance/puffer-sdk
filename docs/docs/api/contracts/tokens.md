# contracts/tokens

## Enumerations

### PufToken

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `pufALT` | `"pufALT"` |
| `pufDAI` | `"pufDAI"` |
| `pufEETH` | `"pufEETH"` |
| `pufStETH` | `"pufStETH"` |
| `pufUSDC` | `"pufUSDC"` |
| `pufUSDT` | `"pufUSDT"` |
| `pufWETH` | `"pufWETH"` |
| `pufWstETH` | `"pufWstETH"` |
| `pufpufETH` | `"pufpufETH"` |

***

### Token

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `DAI` | `"DAI"` |
| `ETH` | `"ETH"` |
| `USDC` | `"USDC"` |
| `USDT` | `"USDT"` |
| `WETH` | `"WETH"` |
| `pufETH` | `"pufETH"` |
| `stETH` | `"stETH"` |
| `wstETH` | `"wstETH"` |

## Type Aliases

### AnyToken

> **AnyToken**: [`Token`](tokens.md#token) \| [`PufToken`](tokens.md#puftoken)

#### Source

[lib/contracts/tokens.ts:27](https://github.com/PufferFinance/puffer-sdk/blob/2ca4ca708a93d0fd96e57575e2b5bc924e934421/lib/contracts/tokens.ts#L27)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: \{ \[key in Token \| PufToken\]: \{ \[chain in Chain\]: Address \} \}

#### Source

[lib/contracts/tokens.ts:40](https://github.com/PufferFinance/puffer-sdk/blob/2ca4ca708a93d0fd96e57575e2b5bc924e934421/lib/contracts/tokens.ts#L40)

***

### TOKENS\_PERMIT\_VERSION

> `const` **TOKENS\_PERMIT\_VERSION**: \{ \[key in Token \| PufToken\]: string \}

#### Source

[lib/contracts/tokens.ts:116](https://github.com/PufferFinance/puffer-sdk/blob/2ca4ca708a93d0fd96e57575e2b5bc924e934421/lib/contracts/tokens.ts#L116)

***

### TOKEN\_TO\_PUF\_TOKEN\_MAP

> `const` **TOKEN\_TO\_PUF\_TOKEN\_MAP**: `object`

#### Type declaration

##### DAI

> **DAI**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufDAI`

##### ETH

> **ETH**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufEETH`

##### USDC

> **USDC**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufUSDC`

##### USDT

> **USDT**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufUSDT`

##### WETH

> **WETH**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufWETH`

##### pufETH

> **pufETH**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufpufETH`

##### stETH

> **stETH**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufStETH`

##### wstETH

> **wstETH**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufWstETH`

#### Source

[lib/contracts/tokens.ts:29](https://github.com/PufferFinance/puffer-sdk/blob/2ca4ca708a93d0fd96e57575e2b5bc924e934421/lib/contracts/tokens.ts#L29)
