import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { TOKENS_ADDRESSES, UnifiToken } from '../tokens';
import { BORING_VAULT_ABIS } from '../abis/boring-vault-abis';

/**
 * Handler for the `BoringVault` contract for a given token exposing
 * methods to interact with the contract.
 */
export class NucleusBoringVaultHandler {
  private viemChain: ViemChain;
  private token: UnifiToken;

  /**
   * Create the handler for processing tokens.
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
   * Set the token to use for executing transactions on the contract.
   *
   * @param token Token to use for the handler.
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
    const address = TOKENS_ADDRESSES[this.token][this.chain];
    const abi = BORING_VAULT_ABIS[this.chain].BoringVault;
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
}
