# contracts/tokens

## Enumerations

### PufToken

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `pufALT` | `"pufALT"` |
| `pufDAI` | `"pufDAI"` |
| `pufUSDC` | `"pufUSDC"` |
| `pufUSDT` | `"pufUSDT"` |
| `pufWETH` | `"pufWETH"` |
| `pufeETH` | `"pufeETH"` |
| `pufpufETH` | `"pufpufETH"` |
| `pufpufETHwstE` | `"pufpufETHwstE"` |
| `pufstETH` | `"pufstETH"` |
| `pufwstETH` | `"pufwstETH"` |

***

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

## Type Aliases

### AnyToken

> **AnyToken**: [`Token`](tokens.md#token) \| [`PufToken`](tokens.md#puftoken)

#### Source

[lib/contracts/tokens.ts:30](https://github.com/PufferFinance/puffer-sdk/blob/2dba95d045033c5e0830b258a1aac29a7e630ff1/lib/contracts/tokens.ts#L30)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: \{ \[key in Token \| PufToken\]: \{ \[chain in Chain\]: Address \} \}

#### Source

[lib/contracts/tokens.ts:45](https://github.com/PufferFinance/puffer-sdk/blob/2dba95d045033c5e0830b258a1aac29a7e630ff1/lib/contracts/tokens.ts#L45)

***

### TOKENS\_PERMIT\_VERSION

> `const` **TOKENS\_PERMIT\_VERSION**: \{ \[key in Token \| PufToken\]: string \}

#### Source

[lib/contracts/tokens.ts:135](https://github.com/PufferFinance/puffer-sdk/blob/2dba95d045033c5e0830b258a1aac29a7e630ff1/lib/contracts/tokens.ts#L135)

***

### TOKEN\_TO\_PUF\_TOKEN\_MAP

> `const` **TOKEN\_TO\_PUF\_TOKEN\_MAP**: `object`

#### Type declaration

##### ALT

> **ALT**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufALT`

##### DAI

> **DAI**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufDAI`

##### USDC

> **USDC**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufUSDC`

##### USDT

> **USDT**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufUSDT`

##### WETH

> **WETH**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufWETH`

##### eETH

> **eETH**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufeETH`

##### pufETH

> **pufETH**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufpufETH`

##### pufETHwstE

> **pufETHwstE**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufpufETHwstE`

##### stETH

> **stETH**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufstETH`

##### wstETH

> **wstETH**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufwstETH`

#### Source

[lib/contracts/tokens.ts:32](https://github.com/PufferFinance/puffer-sdk/blob/2dba95d045033c5e0830b258a1aac29a7e630ff1/lib/contracts/tokens.ts#L32)
