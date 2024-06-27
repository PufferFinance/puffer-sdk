import { WalletClient, PublicClient, getContract, Address } from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { PUF_TOKEN_ABIS } from '../abis/puf-token-abis';
import { PUF_TOKEN_ADDRESSES, PufToken } from '../puf-tokens';

/**
 * Handler for the `PufToken` contract exposing methods to interact with
 * the contract for each of the wrapped PufTokens (like pufWETH,
 * pufStETH, pufWstETH etc.).
 */
export class PufTokenHandler {
  private viemChain: ViemChain;
  private pufToken: PufToken;

  /**
   * Create the handler for the `PufToken` contract exposing methods to
   * interact with the contract.
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
    this.pufToken = PufToken.pufWETH;
    this.viemChain = VIEM_CHAINS[chain];
  }

  /**
   * Set the PufToken to use for executing transactions on the contract.
   *
   * @param pufToken The PufToken to use for the handler.
   */
  public withPufToken(pufToken: PufToken) {
    this.pufToken = pufToken;
  }

  // This is a method because the typings are complex and lost when
  // trying to make it a member.
  private getContract() {
    return getContract({
      address: PUF_TOKEN_ADDRESSES[this.pufToken][this.chain],
      abi: PUF_TOKEN_ABIS[this.chain].PufToken,
      client: {
        wallet: this.walletClient,
        public: this.publicClient,
      },
    });
  }

  /**
   * Check the wrapped token (PufToken) balance of the wallet.
   *
   * @param walletAddress Wallet address to check the balance of.
   * @returns The wrapped token's (PufToken) balance in wei.
   */
  public balanceOf(address: Address) {
    return this.getContract().read.balanceOf([address]);
  }

  /**
   * Get the allowance for the spender to spend the owner's tokens.
   *
   * @param ownerAddress Address of the owner.
   * @param spenderAddress Address of the spender.
   * @returns Allowance that can be used by the spender.
   */
  public getAllowance(ownerAddress: Address, spenderAddress: Address) {
    return this.getContract().read.allowance([ownerAddress, spenderAddress]);
  }

  /**
   * Get the total cap of the PufToken that can be deposited.
   *
   * @returns Total cap of the PufToken that can be deposited.
   */
  public getTotalDepositCap() {
    return this.getContract().read.totalDepositCap();
  }

  /**
   * Get the total supply of the PufToken.
   *
   * @returns Total supply of the PufToken.
   */
  public getTotalSupply() {
    return this.getContract().read.totalSupply();
  }

  /**
   * Withdraw the pufETH from the wallet back to the PufToken.
   *
   * @param walletAddress Wallet address to withdraw the pufETH from.
   * @param value Value of the withdrawal.
   * @returns Hash of the transaction.
   */
  public withdraw(walletAddress: Address, value: bigint) {
    return this.getContract().write.withdraw([walletAddress, value], {
      account: walletAddress,
      chain: this.viemChain,
    });
  }
}
