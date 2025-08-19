/* istanbul ignore file */

import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { VAULTS_ADDRESSES } from '../vaults-addresses';
import { UnifiToken } from '../tokens';
import { BoringVault } from '../abis/mainnet/BoringVault';
import { PermitData } from '../common/lib/types';

export type PermitParams = PermitData & {
  account: Address;
  owner: Address;
  spender: Address;
};

/**
 * Handler for the `BoringVault` contract for a given token exposing
 * methods to interact with the contract.
 */
export class NucleusBoringVaultHandler {
  private viemChain: ViemChain;
  private token: UnifiToken;

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
    this.token = UnifiToken.unifiETH;
  }

  /**
   * Set the UniFi token to use for executing transactions on the
   * contract.
   *
   * @param token UniFi token to use for the handler.
   * @returns The handler.
   */
  public withToken(token: UnifiToken) {
    this.token = token;
    return this;
  }

  /**
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = VAULTS_ADDRESSES[this.token][this.chain]
      .NucleusBoringVault as Address;
    const abi = BoringVault;
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
      this.getContract().estimateGas.transferFrom(
        [fromAddress, toAddress, value],
        { account: walletAddress },
      );

    return { transact, estimate };
  }

  /**
   * Get permit to be able to use the token.
   *
   * @param params Permit parameters.
   * @param params.account Address of the caller of the transaction.
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
  public permit(params: PermitParams) {
    const { account, owner, spender, amount, deadline, v, r, s } = params;
    const transact = () =>
      this.getContract().write.permit(
        [owner, spender, amount, deadline, v, r, s],
        { account, chain: this.viemChain },
      );
    const estimate = () =>
      this.getContract().estimateGas.permit(
        [owner, spender, amount, deadline, v, r, s],
        { account },
      );

    return { transact, estimate };
  }
}
