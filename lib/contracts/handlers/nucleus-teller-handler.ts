import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { VAULTS_ADDRESSES } from '../vaults-addresses';
import { Token, TOKENS_ADDRESSES, UnifiToken } from '../tokens';
import { ERC20PermitHandler } from './erc20-permit-handler';
import { Teller } from '../abis/mainnet/Teller';

export type DepositParams = {
  account: Address;
  token: Token;
  unifiToken: UnifiToken;
  amount: bigint;
  minimumMint: bigint;
  isPreapproved?: boolean;
};

export type DepositWithPermitParams = {
  account: Address;
  depositAsset: Address;
  depositAmount: bigint;
  minimumMint: bigint;
  deadline: bigint;
  v: number;
  r: Address;
  s: Address;
};

/**
 * Handler for the `Teller` contract from nucleus.
 */
export class NucleusTellerHandler {
  private viemChain: ViemChain;
  private erc20PermitHandler: ERC20PermitHandler;
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
    this.erc20PermitHandler = new ERC20PermitHandler(
      chain,
      walletClient,
      publicClient,
    );
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
      .NucleusTeller as Address;
    const abi = Teller;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Get the address of the `Accountant` contract.
   *
   * @returns The address of the `Accountant` contract.
   */
  public accountant() {
    return this.getContract().read.accountant();
  }

  /**
   * Get the address of the `BoringVault` contract.
   *
   * @returns The address of the `BoringVault` contract.
   */
  public vault() {
    return this.getContract().read.vault();
  }

  /**
   * Get the share lock period.
   *
   * @returns The share lock period.
   */
  public shareLockPeriod() {
    return this.getContract().read.shareLockPeriod();
  }

  /**
   * Get the share unlock time for the given wallet address.
   *
   * @param walletAddress Address of the wallet.
   * @returns The share unlock time.
   */
  public shareUnlockTime(walletAddress: Address) {
    return this.getContract().read.shareUnlockTime([walletAddress]);
  }

  /**
   * Get the paused state of the contract.
   *
   * @returns The paused state of the contract.
   */
  public isPaused() {
    return this.getContract().read.isPaused();
  }

  /**
   * Deposit the given token for staking. This doesn't make the
   * transaction but returns two methods namely `transact` and
   * `estimate`.
   *
   * @param params Deposit parameters.
   * @param params.account Address of the caller of the transaction.
   * @param params.token Token to deposit.
   * @param params.unifiToken UniFi token to get in return of the deposit.
   * @param params.amount Amount of the token to deposit.
   * @param params.minimumMint Minimum amount of shares to mint.
   * @param params.isPreapproved Whether the token is preapproved.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction with the given value.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public async deposit(params: DepositParams) {
    const {
      token,
      unifiToken,
      account,
      amount,
      minimumMint,
      isPreapproved = false,
    } = params;
    const tokenAddress = TOKENS_ADDRESSES[token][this.chain];

    if (isPreapproved) {
      return {
        transact: () =>
          this.getContract().write.deposit(
            [tokenAddress, amount, minimumMint],
            {
              account,
              chain: this.viemChain,
            },
          ),
        estimate: () =>
          this.getContract().estimateGas.deposit(
            [tokenAddress, amount, minimumMint],
            { account },
          ),
      };
    }

    const { r, s, v, deadline } = await this.erc20PermitHandler
      .withToken(token)
      .getPermitSignature(
        account,
        // The UniFi token contract is the spender.
        TOKENS_ADDRESSES[unifiToken][this.chain],
        amount,
      );

    const depositArgs = <const>[
      tokenAddress,
      amount,
      minimumMint,
      deadline,
      Number(v),
      r,
      s,
    ];

    const transact = () =>
      this.getContract().write.depositWithPermit(depositArgs, {
        account,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.depositWithPermit(depositArgs, {
        account,
      });

    return { transact, estimate };
  }

  /**
   * Deposit an asset/token for staking with a permit.
   *
   * @param params Permit parameters.
   * @param params.account Address of the caller of the transaction.
   * @param params.depositAsset Address of the asset/token to deposit.
   * @param params.depositAmount Amount of the asset/token to deposit.
   * @param params.minimumMint Minimum amount of shares to mint.
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
  public depositWithPermit(params: DepositWithPermitParams) {
    const {
      account,
      depositAsset,
      depositAmount,
      minimumMint,
      deadline,
      v,
      r,
      s,
    } = params;

    const transact = () =>
      this.getContract().write.depositWithPermit(
        [depositAsset, depositAmount, minimumMint, deadline, v, r, s],
        {
          account,
          chain: this.viemChain,
        },
      );
    const estimate = () =>
      this.getContract().estimateGas.depositWithPermit(
        [depositAsset, depositAmount, minimumMint, deadline, v, r, s],
        {
          account,
        },
      );

    return { transact, estimate };
  }
}
