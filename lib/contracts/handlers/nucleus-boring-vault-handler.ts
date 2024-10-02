/* istanbul ignore file */

import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { NUCLEUS_BORING_VAULT_ABIS } from '../abis/nucleus-boring-vault-abis';
import { CONTRACT_ADDRESSES } from '../addresses';

export type PermitParams = {
  owner: Address;
  spender: Address;
  value: bigint;
  deadline: bigint;
  v: number;
  r: Address;
  s: Address;
};

/**
 * Handler for the `BoringVault` contract for a given token exposing
 * methods to interact with the contract.
 */
export class NucleusBoringVaultHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for processing UniFi tokens.
   *
   * @param chain Chain to use for the client.
   * @param walletClient The wallet client to use for wallet
   * interactions.
   * @param publicClient The public client to use for public
   * interactions.
   */
  constructor(
    private chain: Chain,
    private walletClient: WalletClient,
    private publicClient: PublicClient,
  ) {
    this.viemChain = VIEM_CHAINS[chain];
  }

  /**
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = CONTRACT_ADDRESSES[this.chain]
      .NucleusBoringVault as Address;
    const abi = NUCLEUS_BORING_VAULT_ABIS[this.chain].BoringVault;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Get the allowance for the given owner and spender.
   *
   * @param owner Address of the owner.
   * @param spender Address of the spender.
   * @returns Allowance for the given owner and spender.
   */
  public getAllowance(owner: Address, spender: Address) {
    return this.getContract().read.allowance([owner, spender]);
  }

  /**
   * Get the total supply of the token.
   *
   * @returns Total supply of the token.
   */
  public getTotalSupply() {
    return this.getContract().read.totalSupply();
  }

  /**
   * Check the token balance of the wallet.
   *
   * @param walletAddress Wallet address to check the balance of.
   * @returns Token balance in wei.
   */
  public balanceOf(walletAddress: Address) {
    return this.getContract().read.balanceOf([walletAddress]);
  }

  /**
   * Get the total supply of the token.
   *
   * @returns Total supply of the token.
   */
  public totalSupply() {
    return this.getContract().read.totalSupply();
  }

  /**
   * Approve transaction for the spender to spend the owner's tokens.
   *
   * @param walletAddress Address of the caller of the transaction.
   * @param spenderAddress Address of the spender.
   * @param value Value to approve for the spender.
   * @returns Hash of the transaction.
   */
  public approve(
    walletAddress: Address,
    spenderAddress: Address,
    value: bigint,
  ) {
    return this.getContract().write.approve([spenderAddress, value], {
      account: walletAddress,
      chain: this.viemChain,
    });
  }

  /**
   * Transfer tokens from the owner's wallet to the given address.
   *
   * @param walletAddress Address of the owner's wallet.
   * @param toAddress Address to transfer the tokens to.
   * @param value Value to transfer.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction with the given value.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public transfer(walletAddress: Address, toAddress: Address, value: bigint) {
    const transact = () =>
      this.getContract().write.transfer([toAddress, value], {
        account: walletAddress,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.transfer([toAddress, value], {
        account: walletAddress,
      });

    return { transact, estimate };
  }

  /**
   * Transfer tokens from the given address to another address.
   *
   * @param walletAddress Address of the caller of the transaction.
   * @param fromAddress Address to transfer the tokens from.
   * @param toAddress Address to transfer the tokens to.
   * @param value Value to transfer.
   * @returns `transact: () => Promise<Address>` - Used to
   * make the transaction with the given value.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public transferFrom(
    walletAddress: Address,
    fromAddress: Address,
    toAddress: Address,
    value: bigint,
  ) {
    const transact = () =>
      this.getContract().write.transferFrom([fromAddress, toAddress, value], {
        account: walletAddress,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.transfer([toAddress, value], {
        account: walletAddress,
      });

    return { transact, estimate };
  }

  /**
   * Get permit to be able to use the token.
   *
   * @param walletAddress Address of the caller of the transaction.
   * @param params Permit parameters.
   * @param params.owner Address of the owner.
   * @param params.spender Address of the spender.
   * @param params.value Value to approve for the spender.
   * @param params.deadline Deadline for the permit.
   * @param params.v v value of the permit.
   * @param params.r r value of the permit.
   * @param params.s s value of the permit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction with the given value.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public permit(walletAddress: Address, params: PermitParams) {
    const { owner, spender, value, deadline, v, r, s } = params;
    const transact = () =>
      this.getContract().write.permit(
        [owner, spender, value, deadline, v, r, s],
        {
          account: walletAddress,
          chain: this.viemChain,
        },
      );
    const estimate = () =>
      this.getContract().estimateGas.permit(
        [owner, spender, value, deadline, v, r, s],
        {
          account: walletAddress,
        },
      );

    return { transact, estimate };
  }
}
