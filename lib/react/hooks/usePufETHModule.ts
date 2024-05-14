import { useState } from 'react';
import Web3 from 'web3';

import useContracts from './useContracts';

import { Network } from '../../config/networks';
import {
  ENCLAVE_VALIDATOR_BOND,
  NO_ENCLAVE_VALIDATOR_BOND,
} from '../../config/protocol';
import { ErrorProps } from '../../types/error';

const usePufETHModule = (web3: Web3, selector: Network) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { pufETHContract } = useContracts(web3, selector);
  const [pufETHError, setError] = useState<ErrorProps | null>(null);

  const addError = (newError: ErrorProps) => {
    setError(newError);
  };

  // ETH cost paid mint pufETHs
  const canAffordPufETH = async (
    walletAddress: any,
    ethDeposit: bigint,
  ): Promise<[boolean, BigInt]> => {
    setLoading(true);
    try {
      const ethBalance = await web3.eth.getBalance(walletAddress);
      const mintable = BigInt(
        await (await pufETHContract()).methods
          .previewDeposit(ethBalance)
          .call(),
      );
      const mintAmount = BigInt(
        await (await pufETHContract()).methods
          .previewDeposit(ethDeposit)
          .call(),
      );
      return [mintAmount <= mintable, mintAmount];
    } catch (error) {
      let errorMessage =
        'Failed to determine if wallet can afford pufETH: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Failed to determine if wallet can afford pufETH: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return [false, BigInt(0)];
    } finally {
      setLoading(false);
    }
  };

  // ETH to pufETHs ratio
  const getPufETHToEthRate = async (): Promise<bigint | null> => {
    setLoading(true);
    try {
      const ratio = BigInt(
        await (await pufETHContract()).methods.previewDeposit(1e18).call(),
      );
      return ratio;
    } catch (error) {
      let errorMessage =
        'Failed to determine pufETH to ETH rate: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Failed to determine pufETH to ETH rate: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Amount of gas to call mint pufETH tx
  const getPufETHGas = async (walletAddress: any): Promise<any> => {
    setLoading(true);
    try {
      return await (await pufETHContract()).methods
        .depositETH(walletAddress)
        .estimateGas();
    } catch (error) {
      let errorMessage =
        'Failed to determine gas for pufETH mint: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Failed to determine gas for pufETH mint: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    } finally {
      setLoading(false);
    }
  };

  // The requesting wallet addresses's pufETH ERC20 balance (18 decimals)
  const getPufETHBalance = async (walletAddress: any): Promise<any> => {
    setLoading(true);
    try {
      return await (await pufETHContract()).methods
        .balanceOf(walletAddress)
        .call();
    } catch (error) {
      let errorMessage = 'Failed to determine pufETH balance: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Failed to determine pufETH balance: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const enoughPufETH = async (
    walletAddress: any,
    isEnclave: boolean,
  ): Promise<any> => {
    setLoading(true);
    try {
      if (!web3.provider) return BigInt(0);
      const enclaveValidatorEthBond = isEnclave
        ? ENCLAVE_VALIDATOR_BOND
        : NO_ENCLAVE_VALIDATOR_BOND;
      const bondInPufETH = BigInt(
        await (await pufETHContract()).methods
          .convertToShares(enclaveValidatorEthBond)
          .call(),
      );
      const scaledBondInPufETH: BigInt = bondInPufETH;
      const balance = await getPufETHBalance(walletAddress);
      return balance >= scaledBondInPufETH;
    } catch (error) {
      let errorMessage = 'Failed to determine pufETH balance: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Failed to determine pufETH balance: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return BigInt(0);
    } finally {
      setLoading(false);
    }
  };

  const purchasePufETH = async (
    walletAddress: any,
    ethAmount: BigInt,
  ): Promise<any> => {
    setLoading(true);
    try {
      const purchaseTransaction = await (await pufETHContract()).methods
        .depositETH(walletAddress)
        .send({
          from: walletAddress,
          value: ethAmount.toString(),
        });
      return purchaseTransaction;
    } catch (error) {
      let errorMessage = 'Failed to mint pufETH: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Failed to mint pufETH: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getPufETHToEthRate,
    getPufETHGas,
    purchasePufETH,
    getPufETHBalance,
    enoughPufETH,
    canAffordPufETH,
    pufETHError,
  };
};

export default usePufETHModule;
