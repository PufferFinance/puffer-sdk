import { WalletClient, PublicClient, getContract, Address, padHex } from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { PUFFER_L2_DEPOSITOR_ABIS } from '../abis/puffer-depositor-abis';
import { CHAIN_ADDRESSES } from '../addresses';
import { NonPufToken, TOKENS_ADDRESSES } from '../tokens';
import { ERC20PermitHandler } from './erc20-permit-handler';

/**
 * Handler for the `PufferL2Depositor` contract exposing methods to
 * interact with the contract.
 */
export class PufferL2DepositorHandler {
  private viemChain: ViemChain;
  private erc20PermitHandler: ERC20PermitHandler;

  /**
   * Create the handler for the `PufferL2Depositor` contract exposing
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
    private walletClient: WalletClient,
    private publicClient: PublicClient,
  ) {
    this.viemChain = VIEM_CHAINS[chain];
    this.erc20PermitHandler = new ERC20PermitHandler(
      chain,
      walletClient,
      publicClient,
    );
  }

  /**
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    return getContract({
      address: CHAIN_ADDRESSES[this.chain].PufferL2Depositor as Address,
      abi: PUFFER_L2_DEPOSITOR_ABIS[this.chain].PufferL2Depositor,
      client: {
        wallet: this.walletClient,
        public: this.publicClient,
      },
    });
  }

  /**
   * Deposit the given token which is pre-approved using
   * `token.approve()` in exchange for pufETH. This doesn't make the
   * transaction but returns two methods namely `transact` and
   * `estimate`.
   *
   * @param token Token to deposit.
   * @param walletAddress Wallet address to take the token from.
   * @param value Value in wei of the token to deposit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public depositAfterApproval(
    token: NonPufToken,
    walletAddress: Address,
    value: bigint,
  ) {
    const depositArgs = <const>[
      TOKENS_ADDRESSES[token][this.chain],
      walletAddress,
      // Only `amount` is needed if `token.approve()` is already called.
      // So using mock values for other properties.
      {
        r: padHex('0x', { size: 32 }),
        s: padHex('0x', { size: 32 }),
        v: 0,
        deadline: 0n,
        amount: value,
      },
      value,
    ];

    const transact = () =>
      this.getContract().write.deposit(depositArgs, {
        account: walletAddress,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.deposit(depositArgs, {
        account: walletAddress,
      });

    return { transact, estimate };
  }

  /**
   * Deposit the given token in exchange for pufETH. This doesn't make
   * the transaction but returns two methods namely `transact` and
   * `estimate`.
   *
   * Note that not all token contracts support permit signatures (e.g.
   * USDC). If a token's contract doesn't support permit signatures, use
   * `Token.approve()` and call `depositAfterApproval()` instead.
   *
   * @param token Token to deposit.
   * @param walletAddress Wallet address to take the token from.
   * @param value Value in wei of the token to deposit.
   * @param referralCode Referral code for the deposit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public async deposit(
    token: NonPufToken,
    walletAddress: Address,
    value: bigint,
    referralCode: bigint = 0n,
  ) {
    const { r, s, v, yParity, deadline } = await this.erc20PermitHandler
      .withToken(token)
      .getPermitSignature(
        walletAddress,
        CHAIN_ADDRESSES[this.chain].PufferL2Depositor as Address,
        value,
      );
    /* istanbul ignore next */
    const permitData = {
      r,
      s,
      v: Number(v ?? yParity),
      deadline,
      amount: value,
    };

    const depositArgs = <const>[
      TOKENS_ADDRESSES[token][this.chain],
      walletAddress,
      permitData,
      referralCode,
    ];

    const transact = () =>
      this.getContract().write.deposit(depositArgs, {
        account: walletAddress,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.deposit(depositArgs, {
        account: walletAddress,
      });

    return { transact, estimate };
  }
}
