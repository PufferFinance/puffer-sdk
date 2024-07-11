# contracts/tokens

## Enumerations

### Token

#### Enumeration Members

| Enumeration Member | Value |
| :------ | :------ |
| `DAI` | `"DAI"` |
| `ETH` | `"ETH"` |
| `USDC` | `"USDC"` |
| `WETH` | `"wETH"` |
| `pufALT` | `"pufALT"` |
| `pufDAI` | `"pufDAI"` |
| `pufEETH` | `"pufEETH"` |
| `pufETH` | `"pufETH"` |
| `pufStETH` | `"pufStETH"` |
| `pufUSDC` | `"pufUSDC"` |
| `pufWETH` | `"pufWETH"` |
| `pufWstETH` | `"pufWstETH"` |
| `pufpufETH` | `"pufpufETH"` |
| `stETH` | `"stETH"` |
| `wstETH` | `"wstETH"` |

## Type Aliases

### NonPufToken

> **NonPufToken**: `Extract` \<[`Token`](tokens.md#token), `"USDC"` \| `"DAI"` \| `"ETH"` \| `"WETH"` \| `"stETH"` \| `"wstETH"` \| `"pufETH"`\>

#### Source

[lib/contracts/tokens.ts:23](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/tokens.ts#L23)

***

### PufToken

> **PufToken**: `Extract` \<[`Token`](tokens.md#token), `"pufUSDC"` \| `"pufDAI"` \| `"pufpufETH"` \| `"pufWETH"` \| `"pufStETH"` \| `"pufWstETH"` \| `"pufALT"` \| `"pufEETH"`\>

#### Source

[lib/contracts/tokens.ts:28](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/tokens.ts#L28)

## Variables

### TOKENS\_ADDRESSES

> `const` **TOKENS\_ADDRESSES**: `{ [key in Token]: { [chain in Chain]: Address } }`

#### Source

[lib/contracts/tokens.ts:40](https://github.com/PufferFinance/puffer-sdk/blob/5b8e95e55759b0a70f69b5a76cb4e3fcff78f807/lib/contracts/tokens.ts#L40)
