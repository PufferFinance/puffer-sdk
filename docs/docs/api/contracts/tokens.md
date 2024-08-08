# contracts/tokens

## Enumerations

### PufToken

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| `pufALT` | `"pufALT"` | [lib/contracts/tokens.ts:26](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L26) |
| `pufDAI` | `"pufDAI"` | [lib/contracts/tokens.ts:21](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L21) |
| `pufUSDC` | `"pufUSDC"` | [lib/contracts/tokens.ts:20](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L20) |
| `pufUSDT` | `"pufUSDT"` | [lib/contracts/tokens.ts:19](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L19) |
| `pufWETH` | `"pufWETH"` | [lib/contracts/tokens.ts:23](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L23) |
| `pufeETH` | `"pufeETH"` | [lib/contracts/tokens.ts:27](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L27) |
| `pufpufETH` | `"pufpufETH"` | [lib/contracts/tokens.ts:22](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L22) |
| `pufpufETHwstE` | `"pufpufETHwstE"` | [lib/contracts/tokens.ts:28](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L28) |
| `pufstETH` | `"pufstETH"` | [lib/contracts/tokens.ts:24](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L24) |
| `pufwstETH` | `"pufwstETH"` | [lib/contracts/tokens.ts:25](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L25) |

***

### Token

#### Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| `ALT` | `"ALT"` | [lib/contracts/tokens.ts:12](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L12) |
| `DAI` | `"DAI"` | [lib/contracts/tokens.ts:7](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L7) |
| `ETH` | `"ETH"` | [lib/contracts/tokens.ts:8](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L8) |
| `USDC` | `"USDC"` | [lib/contracts/tokens.ts:6](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L6) |
| `USDT` | `"USDT"` | [lib/contracts/tokens.ts:5](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L5) |
| `WETH` | `"WETH"` | [lib/contracts/tokens.ts:9](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L9) |
| `eETH` | `"eETH"` | [lib/contracts/tokens.ts:13](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L13) |
| `pufETH` | `"pufETH"` | [lib/contracts/tokens.ts:15](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L15) |
| `pufETHwstE` | `"pufETHwstE"` | [lib/contracts/tokens.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L14) |
| `stETH` | `"stETH"` | [lib/contracts/tokens.ts:10](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L10) |
| `wstETH` | `"wstETH"` | [lib/contracts/tokens.ts:11](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L11) |

## Type Aliases

### AnyToken

> **AnyToken**: [`Token`](tokens.md#token) \| [`PufToken`](tokens.md#puftoken)

#### Defined in

[lib/contracts/tokens.ts:31](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L31)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: \{ \[key in Token \| PufToken\]: \{ \[chain in Chain\]: Address \} \}

#### Defined in

[lib/contracts/tokens.ts:47](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L47)

***

### TOKENS\_PERMIT\_VERSION

> `const` **TOKENS\_PERMIT\_VERSION**: \{ \[key in Token \| PufToken\]: string \}

#### Defined in

[lib/contracts/tokens.ts:138](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L138)

***

### TOKEN\_TO\_PUF\_TOKEN\_MAP

> `const` **TOKEN\_TO\_PUF\_TOKEN\_MAP**: `object`

#### Type declaration

##### ALT

> **ALT**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufALT`

##### DAI

> **DAI**: [`PufToken`](tokens.md#puftoken) = `PufToken.pufDAI`

##### ETH

> **ETH**: `undefined` = `undefined`

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

#### Defined in

[lib/contracts/tokens.ts:33](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/contracts/tokens.ts#L33)
