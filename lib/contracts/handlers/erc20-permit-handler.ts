import { WalletClient, PublicClient, getContract, Address } from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { ERC20PERMIT_ABI, TOKENS_ABIS } from '../abis/tokens-abis';
import { TOKENS_ADDRESSES, Token } from '../tokens';
import { CHAIN_ADDRESSES } from '../addresses';
import { getTimestampInSeconds } from '../../utils/time';
import { AccountError } from '../../errors/validation-errors';

export class ERC20PermitHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the `PufferVaultV2` contract exposing
   * methods to interact with the contract.
   *
   * @param chain Chain to use for the client.
   * @param walletClient The wallet client to use for wallet
   * interactions.
   * @param publicClient The public client to use for public
   * interactions.
   */
  constructor(
    private chain: Chain,
    private token: Token,
    private walletClient: WalletClient,
    private publicClient: PublicClient,
  ) {
    this.viemChain = VIEM_CHAINS[chain];
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

  public async getSignature(value: bigint) {
    if (!this.walletClient.account) {
      throw new AccountError('The wallet client does not have an account', {
        fixMessage: 'Make sure the wallet client is correctly initialized',
      });
    }

    const walletAddress = this.walletClient.account.address;
    const contract = this.getContract();

    const permitNonce = await contract.read.nonces([walletAddress]);
    const [_fields, name, version] = await contract.read.eip712Domain();
    const domain = <const>{
      name,
      version,
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

    const signature = await this.walletClient.signTypedData({
      account: walletAddress,
      domain,
      types,
      primaryType: 'Permit',
      message: {
        owner: walletAddress,
        spender: CHAIN_ADDRESSES[Chain.Mainnet].PufferDepositor as Address,
        value,
        nonce: permitNonce,
        // Valid from 2 hours.
        deadline: BigInt(getTimestampInSeconds() + 60 * 60 * 2),
      },
    });

    return signature;
  }
}
