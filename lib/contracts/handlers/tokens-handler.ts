import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  parseSignature,
} from 'viem';
import { Chain } from '../../chains/constants';
import { ERC20PERMIT_ABI } from '../abis/tokens-abis';
import { TOKENS_ADDRESSES, Token } from '../tokens';
import { CHAIN_ADDRESSES } from '../addresses';
import { getTimestampInSeconds } from '../../utils/time';

/**
 * Handler for performing operations for and with tokens.
 */
export class TokensHandler {
  private token: Token;

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
    this.token = Token.ETH;
  }

  /**
   * Set the token to use for executing transactions on the contract.
   *
   * @param token Token to use for the handler.
   * @returns The handler.
   */
  public withToken(token: Token) {
    this.token = token;
    return this;
  }

  private getContract() {
    return getContract({
      address: TOKENS_ADDRESSES[this.token][this.chain],
      abi: ERC20PERMIT_ABI,
      client: {
        wallet: this.walletClient,
        public: this.publicClient,
      },
    });
  }

  /**
   * Process and get permit signature for the given token to perform
   * transactions through the `PufferDepositor` contract.
   *
   * @param walletAddress Wallet address making the transaction.
   * @param value Value of the transaction.
   * @returns Permit signature in the form `{ r, s, v?, yParity }`.
   */
  public async getPermitSignature(walletAddress: Address, value: bigint) {
    const contract = this.getContract();

    const permitNonces = await contract.read.nonces([walletAddress]);
    const name = await contract.read.name();
    const domain = <const>{
      name,
      version: this.getPermitVersion(this.token),
      chainId: this.chain,
      verifyingContract: TOKENS_ADDRESSES[this.token][this.chain],
    };
    const types = <const>{
      Permit: [
        { name: 'owner', type: 'address' },
        { name: 'spender', type: 'address' },
        { name: 'value', type: 'uint256' },
        { name: 'nonce', type: 'uint256' },
        { name: 'deadline', type: 'uint256' },
      ],
    };
    // Valid for 2 hours.
    const deadline = BigInt(getTimestampInSeconds() + 60 * 60 * 2);

    const signature = await this.walletClient.signTypedData({
      account: walletAddress,
      domain,
      types,
      primaryType: 'Permit',
      message: {
        owner: walletAddress,
        spender: CHAIN_ADDRESSES[this.chain].PufferDepositor as Address,
        value,
        nonce: permitNonces,
        deadline,
      },
    });

    return { ...parseSignature(signature), deadline };
  }

  private getPermitVersion(token: Token): string {
    // stETH and USDC have permit version 2.
    if (token === Token.stETH) {
      return '2';
    }

    return '1';
  }
}
