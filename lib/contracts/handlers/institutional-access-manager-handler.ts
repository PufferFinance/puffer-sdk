import {
  Chain as ViemChain,
  WalletClient,
  PublicClient,
  getContract,
  GetContractReturnType,
  Address,
  Hex,
  stringToBytes,
  bytesToHex,
  hexToBigInt,
  toHex,
  toBytes,
  bytesToString,
} from 'viem';
import { InstitutionalAccessManager } from '../abis/mainnet/InstitutionalAccessManager';
import { Chain, VIEM_CHAINS } from '../../chains/constants';
import { InvalidContractAddressError } from '../../errors/validation-errors';

/**
 * Handler for the `InstitutionalAccessManager` contract exposing methods to
 * interact with the contract.
 */
export class InstitutionalAccessManagerHandler {
  private viemChain: ViemChain;
  private address?: Address;
  private selectorsMap: Record<Hex, string> = {
    '0x6056b271':
      'completeQueuedWithdrawals((address,address,address,uint256,uint32,address[],uint256[])[],bool[])',
    '0x29d85402': 'customExternalCall(address,bytes,uint256)',
    '0x6e553f65': 'deposit(uint256,address)',
    '0x2d2da806': 'depositETH(address)',
    '0xba087652': 'redeem(uint256,address,address)',
    '0xb460af94': 'withdraw(uint256,address,address)',
    '0xa9059cbb': 'transfer(address,uint256)',
    '0x23b872dd': 'transferFrom(address,address,uint256)',
    '0x94bf804d': 'mint(uint256,address)',
    '0x61c17990': 'startRestakingValidators(bytes[],bytes[],bytes32[])',
    '0x3e5e60c6': 'startNonRestakingValidators(bytes[],bytes[],bytes32[])',
    '0x852aa33d': 'queueWithdrawals(uint256)',
    '0xad0cdf3e': 'setValidatorsETH(uint128,uint128)',
  };

  /**
   * Create the handler for the Institutional `AccessManager` contract
   * exposing methods to interact with the contract.
   *
   * @param chain Chain to use for the client.
   * @param walletClient The wallet client to use for wallet
   * interactions.
   * @param publicClient The public client to use for public
   * interactions.
   */
  constructor(
    chain: Chain,
    private walletClient: WalletClient,
    private publicClient: PublicClient,
  ) {
    this.viemChain = VIEM_CHAINS[chain];
  }

  /**
   * Set the address of the contract for this handler.
   *
   * @param address The address of the contract.
   * @returns The handler.
   */
  public withAddress(address: Address) {
    this.address = address;

    return this;
  }

  /**
   * Get the address of the contract for this handler.
   *
   * @returns The address of the contract.
   */
  public getAddress() {
    return this.address;
  }

  /**
   * Get the contract. This is a method because the typings are complex
   * and lost when trying to make it a member.
   *
   * @returns The viem contract.
   */
  public getContract() {
    if (!this.address) {
      throw new InvalidContractAddressError(
        `No address specified for the contract`,
        {
          fixMessage: `Set the contract address in the handler by using the setAddress method`,
        },
      );
    }

    const abi = InstitutionalAccessManager;
    const client = { public: this.publicClient, wallet: this.walletClient };

    return getContract({
      address: this.address,
      abi,
      client,
    }) as GetContractReturnType<typeof abi, typeof client, Address>;
  }

  /**
   * Get the admin role.
   *
   * @returns The admin role.
   */
  public getAdminRole() {
    return this.getContract().read.ADMIN_ROLE();
  }

  /**
   * Get the public role.
   *
   * @returns The public role.
   */
  public getPublicRole() {
    return this.getContract().read.PUBLIC_ROLE();
  }

  /**
   * Check if a caller can call a target with a specific selector.
   *
   * @param caller The caller address.
   * @param target The target contract address.
   * @param selector The function selector.
   * @returns Whether the caller can call the target and the delay.
   */
  public canCall(caller: Address, target: Address, selector: Hex) {
    return this.getContract().read.canCall([caller, target, selector]);
  }

  /**
   * Cancel a scheduled operation.
   *
   * @param caller The caller address.
   * @param target The target contract address.
   * @param data The operation data.
   * @returns The nonce.
   */
  public cancel(caller: Address, target: Address, data: Hex) {
    return this.getContract().write.cancel([caller, target, data], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Execute a target with data.
   *
   * @param target The target contract address.
   * @param data The data to execute.
   * @param value The value to send.
   * @returns The nonce.
   */
  public execute(target: Address, data: Hex, value?: bigint) {
    return this.getContract().write.execute([target, data], {
      account: this.walletClient.account!,
      chain: this.viemChain,
      value,
    });
  }

  /**
   * Get access information for a role and account.
   *
   * @param roleIdOrLabel The role ID or role label generated with
   * `labelToRoleId`.
   * @param account The account address.
   * @returns The access information.
   */
  public getAccess(roleIdOrLabel: bigint | string, account: Address) {
    const roleId = this.processRoleIdOrLabel(roleIdOrLabel);
    return this.getContract().read.getAccess([roleId, account]);
  }

  /**
   * Get the nonce for an operation ID.
   *
   * @param id The operation ID.
   * @returns The nonce.
   */
  public getNonce(id: Hex) {
    return this.getContract().read.getNonce([id]);
  }

  /**
   * Get the admin role for a role ID.
   *
   * @param roleIdOrLabel The role ID or role label generated with
   * `labelToRoleId`.
   * @returns The admin role ID.
   */
  public getRoleAdmin(roleIdOrLabel: bigint | string) {
    const roleId = this.processRoleIdOrLabel(roleIdOrLabel);
    return this.getContract().read.getRoleAdmin([roleId]);
  }

  /**
   * Get the grant delay for a role ID.
   *
   * @param roleIdOrLabel The role ID or role label generated with
   * `labelToRoleId`.
   * @returns The grant delay.
   */
  public getRoleGrantDelay(roleIdOrLabel: bigint | string) {
    const roleId = this.processRoleIdOrLabel(roleIdOrLabel);
    return this.getContract().read.getRoleGrantDelay([roleId]);
  }

  /**
   * Get the guardian role for a role ID.
   *
   * @param roleIdOrLabel The role ID or role label generated with
   * `labelToRoleId`.
   * @returns The guardian role ID.
   */
  public getRoleGuardian(roleIdOrLabel: bigint | string) {
    const roleId = this.processRoleIdOrLabel(roleIdOrLabel);
    return this.getContract().read.getRoleGuardian([roleId]);
  }

  /**
   * Get the schedule for an operation ID.
   *
   * @param id The operation ID.
   * @returns The schedule time.
   */
  public getSchedule(id: Hex) {
    return this.getContract().read.getSchedule([id]);
  }

  /**
   * Get the admin delay for a target.
   *
   * @param target The target contract address.
   * @returns The admin delay.
   */
  public getTargetAdminDelay(target: Address) {
    return this.getContract().read.getTargetAdminDelay([target]);
  }

  /**
   * Get the function role for a target and selector.
   *
   * @param target The target contract address.
   * @param selector The function selector.
   * @returns The role ID.
   */
  public getTargetFunctionRole(target: Address, selector: Hex) {
    return this.getContract().read.getTargetFunctionRole([target, selector]);
  }

  /**
   * Grant a role to an account.
   *
   * @param roleIdOrLabel The role ID or role label generated with
   * `labelToRoleId`.
   * @param account The account address.
   * @param executionDelay The execution delay.
   */
  public grantRole(
    roleIdOrLabel: bigint | string,
    account: Address,
    executionDelay: number,
  ) {
    const roleId = this.processRoleIdOrLabel(roleIdOrLabel);

    return this.getContract().write.grantRole(
      [roleId, account, executionDelay],
      {
        account: this.walletClient.account!,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Check if an account has a role.
   *
   * @param roleIdOrLabel The role ID or role label generated with
   * `labelToRoleId`.
   * @param account The account address.
   * @returns Whether the account has the role and the execution delay.
   */
  public hasRole(roleIdOrLabel: bigint | string, account: Address) {
    const roleId = this.processRoleIdOrLabel(roleIdOrLabel);
    return this.getContract().read.hasRole([roleId, account]);
  }

  /**
   * Hash an operation.
   *
   * @param caller The caller address.
   * @param target The target address.
   * @param data The operation data.
   * @returns The operation hash.
   */
  public hashOperation(caller: Address, target: Address, data: Hex) {
    return this.getContract().read.hashOperation([caller, target, data]);
  }

  /**
   * Check if a target is closed.
   *
   * @param target The target contract address.
   * @returns Whether the target is closed.
   */
  public isTargetClosed(target: Address) {
    return this.getContract().read.isTargetClosed([target]);
  }

  /**
   * Label a role.
   *
   * @param roleIdOrLabel The role ID or role label generated with
   * `labelToRoleId`.
   * @param label The label.
   * @returns The role ID.
   */
  public labelRole(roleIdOrLabel: bigint | string, label: string) {
    const roleId = this.processRoleIdOrLabel(roleIdOrLabel);

    return this.getContract().write.labelRole([roleId, label], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Get the minimum setback.
   *
   * @returns The minimum setback.
   */
  public getMinSetback() {
    return this.getContract().read.minSetback();
  }

  /**
   * Execute multiple calls.
   *
   * @param data Array of call data.
   * @returns Array of results.
   */
  public multicall(data: Hex[]) {
    return this.getContract().write.multicall([data], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Renounce a role.
   *
   * @param roleIdOrLabel The role ID or role label generated with
   * `labelToRoleId`.
   * @param callerConfirmation The caller confirmation address.
   */
  public renounceRole(
    roleIdOrLabel: bigint | string,
    callerConfirmation: Address,
  ) {
    const roleId = this.processRoleIdOrLabel(roleIdOrLabel);

    return this.getContract().write.renounceRole([roleId, callerConfirmation], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Revoke a role from an account.
   *
   * @param roleIdOrLabel The role ID or role label generated with
   * `labelToRoleId`.
   * @param account The account address.
   */
  public revokeRole(roleIdOrLabel: bigint | string, account: Address) {
    const roleId = this.processRoleIdOrLabel(roleIdOrLabel);

    return this.getContract().write.revokeRole([roleId, account], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Schedule an operation.
   *
   * @param target The target contract address.
   * @param data The operation data.
   * @param when The execution time.
   * @returns The operation ID and nonce.
   */
  public schedule(target: Address, data: Hex, when: number) {
    return this.getContract().write.schedule([target, data, when], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Set the grant delay for a role.
   *
   * @param roleIdOrLabel The role ID or role label generated with
   * `labelToRoleId`.
   * @param newDelay The new delay.
   */
  public setGrantDelay(roleIdOrLabel: bigint | string, newDelay: number) {
    const roleId = this.processRoleIdOrLabel(roleIdOrLabel);

    return this.getContract().write.setGrantDelay([roleId, newDelay], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Set the admin role for a role.
   *
   * @param roleIdOrLabel The role ID or role label generated with
   * `labelToRoleId`.
   * @param admin The admin role ID.
   */
  public setRoleAdmin(roleIdOrLabel: bigint | string, admin: bigint) {
    const roleId = this.processRoleIdOrLabel(roleIdOrLabel);

    return this.getContract().write.setRoleAdmin([roleId, admin], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Set the guardian role for a role.
   *
   * @param roleIdOrLabel The role ID or role label generated with
   * `labelToRoleId`.
   * @param guardian The guardian role ID.
   */
  public setRoleGuardian(roleIdOrLabel: bigint | string, guardian: bigint) {
    const roleId = this.processRoleIdOrLabel(roleIdOrLabel);

    return this.getContract().write.setRoleGuardian([roleId, guardian], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Set the admin delay for a target.
   *
   * @param target The target contract address.
   * @param newDelay The new delay.
   */
  public setTargetAdminDelay(target: Address, newDelay: number) {
    return this.getContract().write.setTargetAdminDelay([target, newDelay], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Set whether a target is closed.
   *
   * @param target The target contract address.
   * @param closed Whether the target is closed.
   */
  public setTargetClosed(target: Address, closed: boolean) {
    return this.getContract().write.setTargetClosed([target, closed], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**
   * Set the function role for a target.
   *
   * @param target The target address.
   * @param selectors Array of function selectors.
   * @param roleIdOrLabel The role ID or role label generated with
   * `labelToRoleId`.
   */
  public setTargetFunctionRole(
    target: Address,
    selectors: Hex[],
    roleIdOrLabel: bigint | string,
  ) {
    const roleId = this.processRoleIdOrLabel(roleIdOrLabel);

    return this.getContract().write.setTargetFunctionRole(
      [target, selectors, roleId],
      {
        account: this.walletClient.account!,
        chain: this.viemChain,
      },
    );
  }

  /**
   * Update the authority for a target.
   *
   * @param target The target address.
   * @param newAuthority The new authority address.
   */
  public updateAuthority(target: Address, newAuthority: Address) {
    return this.getContract().write.updateAuthority([target, newAuthority], {
      account: this.walletClient.account!,
      chain: this.viemChain,
    });
  }

  /**************************************************/
  /****************** Helper Methods ****************/
  /**************************************************/

  /**
   * Convert a label to a role ID. Useful if you want to create a roleId
   * from a label which can then be used to get the label back using
   * `roleIdToLabel`.
   *
   * @param label The label to convert.
   * @returns The role ID.
   */
  public labelToRoleId(label: string) {
    const bytes = stringToBytes(label);
    // Reverse the bytes to make it little-endian.
    const leBytes = bytes.reverse();
    const hex = bytesToHex(leBytes);

    return hexToBigInt(hex);
  }

  /**
   * Convert a role ID to a label. Only useful if the `roleId` was
   * created using `labelToRoleId`.
   *
   * @param roleId The role ID to convert.
   * @returns The label.
   */
  public roleIdToLabel(roleId: bigint) {
    const hex = toHex(roleId);
    // Reverse the bytes to make it little-endian.
    const leBytes = toBytes(hex).reverse();

    return bytesToString(leBytes);
  }

  /**
   * Get the selector for a function name.
   *
   * @param functionName The function name.
   * @returns The selector.
   */
  public getSelectorFromFunctionName(functionName: string) {
    return Object.entries(this.selectorsMap).find(([, value]) =>
      value.includes(functionName),
    )?.[0];
  }

  /**
   * Get the function name for a selector.
   *
   * @param selector The selector.
   * @returns The function name.
   */
  public getFunctionNameFromSelector(selector: Hex) {
    return Object.entries(this.selectorsMap).find(
      ([key]) => key === selector,
    )?.[1];
  }

  private processRoleIdOrLabel(roleIdOrLabel: bigint | string) {
    if (typeof roleIdOrLabel === 'string') {
      return this.labelToRoleId(roleIdOrLabel);
    }

    return roleIdOrLabel;
  }
}
