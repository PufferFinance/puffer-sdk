import { Address } from 'viem';

export class WalletConnector {
  constructor() {
    this.validateEnvironment();
  }

  public async requestAddresses(): Promise<Address[]> {
    return await window.ethereum!.request({ method: 'eth_requestAccounts' });
  }

  public async requestAddress(): Promise<Address> {
    return (await this.requestAddresses())[0];
  }

  /**
   * Validates that the browser environment has everything required.
   */
  private validateEnvironment() {
    if (!window.ethereum) {
      throw new Error('JSON-RPC account not accessible.');
    }
  }
}
