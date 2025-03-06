---
sidebar_position: 1
---

# Puffer UniFi Vaults

Puffer vaults are a way to earn optimized yield across top DeFi protocols, along with points from select partners by depositing your assets into our strategy vaults.

## How It Works

1. Deposit your assets into a Puffer vault.
2. Earn yield on your assets from the vaults.
3. Withdraw your assets from the vaults.

## Vault Contracts

Each Puffer vault consists of a set of the following contracts:

- `BoringVault`: The main vault ERC20 token contract which represents the vault's share of the deposited assets.
- `AccountantWithRateProviders`: Accountant contract with rate providers for the vault.
- `TellerWithMultiAssetSupport`: The contract that handles deposits to the vault.
- `AtomicQueue`: The contract that handles withdrawals from the vault in the form withdrawal queues.

## Puffer Vaults

- UniFi ETH Vault
  - [BoringVault](https://etherscan.io/address/0x196ead472583bc1e9af7a05f860d9857e1bd3dcc)
  - [AccountantWithRateProviders](https://etherscan.io/address/0xa9fb7e2922216debe3fd5e1bbe7591ee446dc21c)
  - [TellerWithMultiAssetSupport](https://etherscan.io/address/0x08eb2eccdf6ebd7aba601791f23ec5b5f68a1d53)
- UniFi USD Vault
  - [BoringVault](https://etherscan.io/address/0x82c40e07277eBb92935f79cE92268F80dDc7caB4)
  - [AccountantWithRateProviders](https://etherscan.io/address/0xe0bDb7b9225A2CeB42998dc2E51D4D3CDeb7e3Be)
  - [TellerWithMultiAssetSupport](https://etherscan.io/address/0x5d3Fb47FE7f3F4Ce8fe55518f7E4F7D6061B54DD)
- UniFi BTC Vault
  - [BoringVault](https://etherscan.io/address/0x170d847a8320f3b6a77ee15b0cae430e3ec933a0)
  - [AccountantWithRateProviders](https://etherscan.io/address/0x2afb28b0561d99b5e00829ec2ef54946a00a35f7)
  - [TellerWithMultiAssetSupport](https://etherscan.io/address/0x0743647a607822781f9d0a639454e76289182f0b)
