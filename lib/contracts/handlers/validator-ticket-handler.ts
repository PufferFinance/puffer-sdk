import {
  WalletClient,
  PublicClient,
  getContract,
  Address,
  GetContractReturnType,
  Account,
} from 'viem';
import { Chain, VIEM_CHAINS, ViemChain } from '../../chains/constants';
import { CONTRACT_ADDRESSES } from '../addresses';
import { ValidatorTicket } from '../abis/mainnet/ValidatorTicket';

export type PermitData = {
  deadline: bigint;
  amount: bigint;
  v: number;
  r: Address;
  s: Address;
};

/**
 * Handler for the `ValidatorTicket` contract exposing methods to interact
 * with the contract.
 */
export class ValidatorTicketHandler {
  private viemChain: ViemChain;

  /**
   * Create the handler for the `ValidatorTicket` contract exposing
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
  }

  /**
   * Get the contract.
   *
   * @returns The viem contract.
   */
  public getContract() {
    const address = CONTRACT_ADDRESSES[this.chain].ValidatorTicket as Address;
    const abi = ValidatorTicket;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({ address, abi, client }) as GetContractReturnType<
      typeof abi,
      typeof client,
      Address
    >;
  }

  /**
   * Purchase validator ticket with ETH.
   *
   * @param recipient The recipient of the validator ticket.
   * @param payableAmount The amount of ETH to send with the transaction.
   * @returns The transaction.
   */
  public purchaseValidatorTicket(recipient: Address, payableAmount: bigint) {
    return this.getContract().write.purchaseValidatorTicket([recipient], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
      value: payableAmount,
    });
  }

  /**
   * Purchase validator ticket with pufETH.
   *
   * @param recipient The recipient of the validator ticket.
   * @param vtAmount The amount of validator tickets to purchase.
   * @returns The transaction.
   */
  public purchaseValidatorTicketWithPufETH(
    recipient: Address,
    vtAmount: bigint,
  ) {
    return this.getContract().write.purchaseValidatorTicketWithPufETH(
      [recipient, vtAmount],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Purchase validator ticket with pufETH and permit.
   *
   * @param recipient The recipient of the validator ticket.
   * @param vtAmount The amount of validator tickets to purchase.
   * @param permitData The permit data for pufETH approval.
   * @returns The transaction.
   */
  public purchaseValidatorTicketWithPufETHAndPermit(
    recipient: Address,
    vtAmount: bigint,
    permitData: PermitData,
  ) {
    return this.getContract().write.purchaseValidatorTicketWithPufETHAndPermit(
      [recipient, vtAmount, permitData],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Approve a spender to spend the validator ticket.
   *
   * @param spender The spender of the validator ticket.
   * @param amount The amount to approve.
   * @returns The transaction.
   */
  public approve(spender: Address, amount: bigint) {
    return this.getContract().write.approve([spender, amount], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Get the allowance of the owner for the spender.
   *
   * @param owner The owner of the allowance.
   * @param spender The spender of the allowance.
   * @returns The allowance.
   */
  public getAllowance(owner: Address, spender: Address) {
    return this.getContract().read.allowance([owner, spender]);
  }

  /**
   * Get the balance for the address.
   *
   * @param address The address to get the balance of.
   * @returns The balance.
   */
  public getBalance(address: Address) {
    return this.getContract().read.balanceOf([address]);
  }

  /**
   * Get the total supply of the validator ticket.
   *
   * @returns The total supply.
   */
  public getTotalSupply() {
    return this.getContract().read.totalSupply();
  }

  /**
   * Burn validator tickets.
   *
   * @param amount The amount to burn.
   * @returns The transaction.
   */
  public burn(amount: bigint) {
    return this.getContract().write.burn([amount], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Transfer validator tickets.
   *
   * @param to The recipient address.
   * @param amount The amount to transfer.
   * @returns The transaction.
   */
  public transfer(to: Address, amount: bigint) {
    return this.getContract().write.transfer([to, amount], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Transfer validator tickets from another address.
   *
   * @param from The sender address.
   * @param to The recipient address.
   * @param amount The amount to transfer.
   * @returns The transaction.
   */
  public transferFrom(from: Address, to: Address, amount: bigint) {
    return this.getContract().write.transferFrom([from, to, amount], {
      account: this.walletClient.account as Account,
      chain: this.viemChain,
    });
  }

  /**
   * Get the guardians fee rate.
   *
   * @returns The guardians fee rate.
   */
  public getGuardiansFeeRate() {
    return this.getContract().read.getGuardiansFeeRate();
  }

  /**
   * Get the protocol fee rate.
   *
   * @returns The protocol fee rate.
   */
  public getProtocolFeeRate() {
    return this.getContract().read.getProtocolFeeRate();
  }

  /**
   * Get the domain separator for EIP-712 signatures.
   *
   * @returns The domain separator.
   */
  public getDomainSeparator() {
    return this.getContract().read.DOMAIN_SEPARATOR();
  }

  /**
   * Get the nonce for an owner.
   *
   * @param owner The owner address.
   * @returns The nonce.
   */
  public getNonce(owner: Address) {
    return this.getContract().read.nonces([owner]);
  }

  /**
   * Permit function for EIP-2612 approval.
   *
   * @param owner The owner address.
   * @param spender The spender address.
   * @param value The amount to approve.
   * @param deadline The deadline for the permit.
   * @param v The v component of the signature.
   * @param r The r component of the signature.
   * @param s The s component of the signature.
   * @returns The transaction.
   */
  public permit(
    owner: Address,
    spender: Address,
    value: bigint,
    deadline: bigint,
    v: number,
    r: Address,
    s: Address,
  ) {
    return this.getContract().write.permit(
      [owner, spender, value, deadline, v, r, s],
      {
        account: this.walletClient.account as Account,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Get the EIP-712 domain information.
   *
   * @returns The EIP-712 domain information.
   */
  public getEip712Domain() {
    return this.getContract().read.eip712Domain();
  }

  /**
   * Get the name of the token.
   *
   * @returns The token name.
   */
  public getName() {
    return this.getContract().read.name();
  }

  /**
   * Get the symbol of the token.
   *
   * @returns The token symbol.
   */
  public getSymbol() {
    return this.getContract().read.symbol();
  }

  /**
   * Get the decimals of the token.
   *
   * @returns The token decimals.
   */
  public getDecimals() {
    return this.getContract().read.decimals();
  }
}
