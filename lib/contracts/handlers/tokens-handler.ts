import { WalletClient, PublicClient, getContract, Address } from 'viem';
import { Chain } from '../../chains/constants';
import { ERC20PERMIT_ABI } from '../abis/tokens-abis';
import { TOKENS_ADDRESSES, Token } from '../tokens';
import { CHAIN_ADDRESSES } from '../addresses';
import { getTimestampInSeconds } from '../../utils/time';

/**
 * Handler for performing operations for and with tokens.
 */
export class TokensHandler {
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
  ) {}

  private getContract(token: Token) {
    return getContract({
      address: TOKENS_ADDRESSES[token][this.chain],
      abi: ERC20PERMIT_ABI,
      client: {
        wallet: this.walletClient,
        public: this.publicClient,
      },
    });
  }

  public async getPermitSignature(
    token: Token,
    walletAddress: Address,
    value: bigint,
  ) {
    const contract = this.getContract(token);

    const permitNonces = await contract.read.nonces([walletAddress]);
    const name = await contract.read.name();
    const domain = <const>{
      name,
      version: this.getPermitVersion(token),
      chainId: this.chain,
      verifyingContract: TOKENS_ADDRESSES[token][this.chain],
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
        // Valid for 2 hours.
        deadline: BigInt(getTimestampInSeconds() + 60 * 60 * 2),
      },
    });

    return signature;
  }

  private getPermitVersion(token: Token): string {
    // stETH and USDC have permit version 2.
    if (token === Token.stETH) {
      return '2';
    }

    return '1';
  }
}
