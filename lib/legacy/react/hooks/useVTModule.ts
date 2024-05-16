import { useState } from 'react';
import Web3 from 'web3';

import useContracts from './useContracts';

import { Network } from '../../config/networks';
import { ErrorProps } from '../../types/error';

const useVTModule = (web3: Web3, selector: Network) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { validatorTicketContract, pufferOracleContract } = useContracts(
    web3,
    selector,
  );
  const [VTModuleError, setError] = useState<ErrorProps | null>(null);

  const addError = (newError: ErrorProps) => {
    setError(newError);
  };

  // ETH cost paid mint VTs
  const getValidatorTicketPrice = async (): Promise<bigint | null> => {
    setLoading(true);
    try {
      return BigInt(
        await (await pufferOracleContract()).methods
          .getValidatorTicketPrice()
          .call(),
      );
    } catch (error) {
      let errorMessage = 'Can not get VT price: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Can not get VT price: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Amount of gas to call mint VT tx
  const getValidatorTicketGas = async (
    walletAddress: any,
  ): Promise<bigint | null> => {
    setLoading(true);
    try {
      return await (await validatorTicketContract()).methods
        .purchaseValidatorTicket(walletAddress)
        .estimateGas();
    } catch (error) {
      let errorMessage = 'Can not get VT gas: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Can not get VT gas: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    } finally {
      setLoading(false);
    }
  };

  // The requesting wallet addresses's ValidatorTicket ERC20 balance (18 decimals)
  const getValidatorTicketBalance = async (
    walletAddress: any,
  ): Promise<bigint | null> => {
    setLoading(true);
    try {
      return (await validatorTicketContract()).methods
        .balanceOf(walletAddress)
        .call();
    } catch (error) {
      let errorMessage = 'Can not get VT balance: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Can not get VT balance: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const canAffordVTs = async (
    walletAddress: any,
    numDays: number,
  ): Promise<boolean | null> => {
    setLoading(true);
    try {
      const price: bigint = (await getValidatorTicketPrice()) as bigint;

      // get user eth balance
      const ethBalance: bigint = (await web3.eth.getBalance(
        walletAddress,
      )) as bigint;

      // return true if user can afford
      return ethBalance >= price * BigInt(numDays);
    } catch (error) {
      let errorMessage = `Can not calculate if user can afford ${numDays} VT(s): Unknown error`;
      if (error instanceof Error) {
        errorMessage = `Can not calculate if user can afford ${numDays} VT(s): ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const hasEnoughVTs = async (
    walletAddress: any,
    numDays: number,
  ): Promise<boolean | null> => {
    setLoading(true);
    try {
      const balance: bigint = await (await validatorTicketContract()).methods
        .balanceOf(walletAddress)
        .call();
      const required: bigint = BigInt(numDays) * BigInt(1e18);
      return balance >= required;
    } catch (error) {
      let errorMessage = `Can not calculate if user has enough VTs: Unknown error`;
      if (error instanceof Error) {
        errorMessage = `Can not calculate if user has enough VTs: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const purchaseValidatorTicket = async (
    walletAddress: any,
    numDays: number,
  ): Promise<any> => {
    setLoading(true);
    try {
      const vtWei = (await getValidatorTicketPrice()) as bigint;
      const value = BigInt(numDays) * BigInt(vtWei);
      const sendTransaction = await (await validatorTicketContract()).methods
        .purchaseValidatorTicket(walletAddress)
        .send({
          from: walletAddress,
          value: value.toString(),
        });
      return sendTransaction;
    } catch (error) {
      let errorMessage = `Can not purchase VTs: Unknown error`;
      if (error instanceof Error) {
        errorMessage = `Can not purchase VTs: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    getValidatorTicketPrice,
    getValidatorTicketGas,
    purchaseValidatorTicket,
    getValidatorTicketBalance,
    canAffordVTs,
    hasEnoughVTs,
    VTModuleError,
  };
};
export default useVTModule;
