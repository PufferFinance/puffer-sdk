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
   * @returns The handler.
   */
  public withPufToken(pufToken: PufToken) {
    this.pufToken = pufToken;
    return this;
  }

  /**
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
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
  public balanceOf(walletAddress: Address) {
    return this.getContract().read.balanceOf([walletAddress]);
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
   * Withdraws the PufToken and returns the underlying token to the
   * given wallet. This doesn't make the transaction but returns two
   * methods namely `transact` and `estimate`.
   *
   * @param walletAddress Wallet address to withdraw the PufToken from.
   * @param value Value of the withdrawal.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public withdraw(walletAddress: Address, value: bigint) {
    const transact = () =>
      this.getContract().write.withdraw([walletAddress, value], {
        account: walletAddress,
        chain: this.viemChain,
      });
    const estimate = () =>
      this.getContract().estimateGas.withdraw([walletAddress, value], {
        account: walletAddress,
      });

    return { transact, estimate };
  }

  /**
   * Deposits the underlying token in exchange for the wrapped PufToken.
   * This doesn't make the transaction but returns two methods namely
   * `transact` and `estimate`.
   *
   * @param depositorAddress Depositor of the underlying token.
   * @param walletAddress Wallet address of the recipient of the
   * deposit.
   * @param value Value of the deposit.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public deposit(
    depositorAddress: Address,
    walletAddress: Address,
    value: bigint,
  ) {
    console.log(this.getContract().address);
    const transact = () =>
      this.getContract().write.deposit(
        [depositorAddress, walletAddress, value],
        {
          account: walletAddress,
          chain: this.viemChain,
        },
      );
    const estimate = () =>
      this.getContract().estimateGas.deposit(
        [depositorAddress, walletAddress, value],
        {
          account: walletAddress,
        },
      );

    return { transact, estimate };
  }

  /**
   * Migrate tokens using an allowed `migratorContract` to the given
   * wallet address. This doesn't make the transaction but returns two
   * methods namely `transact` and `estimate`.
   *
   * @param walletAddress Address to migrate the tokens to.
   * @param migratorContract Address of the migrator contract.
   * @param value Value of the tokens to migrate.
   * @returns `transact: () => Promise<Address>` - Used to make the
   * transaction.
   *
   * `estimate: () => Promise<bigint>` - Gas estimate of the
   * transaction.
   */
  public migrate(
    walletAddress: Address,
    migratorContract: Address,
    value: bigint,
  ) {
    const transact = () =>
      this.getContract().write.migrate(
        [value, migratorContract, walletAddress],
        {
          account: walletAddress,
          chain: this.viemChain,
        },
      );
    const estimate = () =>
      this.getContract().estimateGas.migrate(
        [value, migratorContract, walletAddress],
        {
          account: walletAddress,
        },
      );

    return { transact, estimate };
  }

  /**
   * Approve transaction for the spender to spend the owner's tokens.
   *
   * @param spenderAddress Address of the spender.
   * @param value Value to approve for the spender.
   * @returns Hash of the transaction.
   */
  public approve(spenderAddress: Address, value: bigint) {
    return this.getContract().write.approve([spenderAddress, value], {
      account: spenderAddress,
      chain: this.viemChain,
    });
  }
}
