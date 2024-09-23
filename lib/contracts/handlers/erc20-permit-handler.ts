import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  parseSignature,
  GetContractReturnType,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { ERC20PERMIT_ABI } from '../abis/tokens-abis';
import {
  AnyToken,
  TOKENS_ADDRESSES,
  TOKENS_SALT,
  TOKENS_PERMIT_VERSION,
  Token,
} from '../tokens';
import { getTimestampInSeconds } from '../../utils/time';

/**
 * Handler for performing operations for and with ERC20Permit tokens.
 */
export class ERC20PermitHandler {
  private viemChain: ViemChain;
  private token: AnyToken;

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
    this.token = Token.WETH;
  }

  /**
   * Set the token to use for executing transactions on the contract.
   *
   * @param token Token to use for the handler.
   * @returns The handler.
   */
  public withToken(token: AnyToken) {
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
    const abi = ERC20PERMIT_ABI;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Process and get permit signature for the given token to perform
   * transactions through the `PufferDepositor` contract.
   *
   * @param ownerAddress Address of the token owner.
   * @param spenderAddress Address of the spender who needs the permit.
   * @param value Value of the transaction.
   * @returns Permit signature in the form `{ r, s, v?, yParity }`.
   */
  public async getPermitSignature(
    ownerAddress: Address,
    spenderAddress: Address,
    value: bigint,
  ) {
    const contract = this.getContract();

    const permitNonces = await contract.read.nonces([ownerAddress]);
    const name = await contract.read.name();
    const domain = <const>{
      name,
      version: this.getPermitVersion(this.token),
      chainId: this.chain,
      verifyingContract: TOKENS_ADDRESSES[this.token][this.chain],
      salt: this.getPermitSalt(this.token),
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
      account: ownerAddress,
      domain,
      types,
      primaryType: 'Permit',
      message: {
        owner: ownerAddress,
        spender: spenderAddress,
        value,
        nonce: permitNonces,
        deadline,
      },
    });

    return { ...parseSignature(signature), deadline };
  }

  private getPermitVersion(token: AnyToken): string {
    return TOKENS_PERMIT_VERSION[token];
  }

  /**
   * Approve transaction for the spender to spend the owner's tokens.
   *
   * @param ownerAddress Address of the caller of the transaction.
   * @param spenderAddress Address of the spender.
   * @param value Value to approve for the spender.
   * @returns Hash of the transaction.
   */
  public approve(
    ownerAddress: Address,
    spenderAddress: Address,
    value: bigint,
  ) {
    return this.getContract().write.approve([spenderAddress, value], {
      account: ownerAddress,
      chain: this.viemChain,
    });
  }

  private getPermitSalt(token: AnyToken) {
    return TOKENS_SALT?.[token]?.[this.chain];
  }
}
