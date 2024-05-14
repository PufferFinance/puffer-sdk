import { Signature, ethers } from 'ethers';
import { useState } from 'react';
import Web3 from 'web3';

import useContracts from './useContracts';

import { Network } from '../../config/networks';
import {
  ENCLAVE_VALIDATOR_BOND,
  NO_ENCLAVE_VALIDATOR_BOND,
} from '../../config/protocol';
import { useNetworkConfig } from '../context/NetworkConfig';
import { ErrorProps } from '../../types/error';
import { NodeInfo } from '../../types/node';
import { ValidatorKeyData } from '../../types/registration';
import { ValidatorProp, findValidatorStatus } from '../../types/validator';
import { getPermitSignature } from '../../utils/ERC20Permit';
import { shortenString } from '../../utils/ErrorPrepration';
import { add0xPrefix } from '../../utils/Key';

const usePufferProtocol = (
  web3: Web3,
  ethersProvider: ethers.BrowserProvider,
  selector: Network,
) => {
  const {
    guardianModuleContract,
    pufferProtocolContract,
    validatorTicketContract,
    pufETHContract,
  } = useContracts(web3, selector);

  const [pufferProtocolError, setError] = useState<ErrorProps | null>(null);
  const config = useNetworkConfig();

  const addError = (newError: ErrorProps) => {
    setError({
      message: newError.message,
      type: newError.type,
    });
  };

  const pufferProtocolContractAddress = config.PUFFER_PROTOCOL_CONTRACT_ADDRESS;

  const guardianThreshold = async (): Promise<number | null> => {
    try {
      return (await guardianModuleContract()).methods.getThreshold().call();
    } catch (error) {
      let errorMessage = 'Can not get guardian threshhold: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Can not get guardian threshhold: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    }
  };

  const guardianPubKeys = async () => {
    try {
      const pks: string[] = await (await guardianModuleContract()).methods
        .getGuardiansEnclavePubkeys()
        .call();
      return pks.join(',');
    } catch (error) {
      let errorMessage =
        'Can not get guardians Enclave public keys: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Can not get guardians Enclave public keys: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    }
  };

  const nextModuleAndWithdrawalCredentials = async (): Promise<
    [string, string] | null
  > => {
    try {
      // Returns the index of the next PufferModule to be provisioned
      const nextModuleSelect: BigInt = await (
        await pufferProtocolContract()
      ).methods
        .getModuleSelectIndex()
        .call();

      // Returns the index of the next PufferModule to be provisioned
      const moduleWeights: string[] = await (
        await pufferProtocolContract()
      ).methods
        .getModuleWeights()
        .call();

      // Get the moduleName
      var moduleName: string = '';
      if (moduleWeights.length > 0) {
        moduleName =
          moduleWeights[Number(nextModuleSelect) % moduleWeights.length];
      }

      // cast moduleName to bytes32
      const nextProvisionModuleNameBytes32 = web3.eth.abi.encodeParameter(
        'bytes32',
        moduleName,
      );

      // get module's address
      const nextProvisionModuleAddress = await (
        await pufferProtocolContract()
      ).methods
        .getModuleAddress(nextProvisionModuleNameBytes32)
        .call();

      // get module's withdrawal credentials
      const withdrawalCredentials: string = await (
        await pufferProtocolContract()
      ).methods
        .getWithdrawalCredentials(nextProvisionModuleAddress)
        .call();

      return [moduleName, withdrawalCredentials];
    } catch (error) {
      let errorMessage = 'Can not get withdrawal credentials: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Can not get withdrawal credentials: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    }
  };

  const getValidatorTicketBalanceInProtocol = async (
    walletAddress: any,
  ): Promise<BigInt | null> => {
    try {
      return (await pufferProtocolContract()).methods
        .getValidatorTicketsBalance(walletAddress)
        .call();
    } catch (error) {
      let errorMessage = 'Can not get VT balance in protocol: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Can not get VT balance in protocol: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    }
  };

  const depositVTs = async (walletAddress: any, numDays: number) => {
    try {
      const signedVTPermit = await permitVT(walletAddress, numDays);
      if (signedVTPermit == null) {
        return null;
      }
      const sendTransaction = await (await pufferProtocolContract()).methods
        .depositValidatorTickets(signedVTPermit, walletAddress)
        .send({
          from: walletAddress,
          value: '0',
        });

      return sendTransaction;
    } catch (error) {
      let errorMessage = 'Can not deposit VTs: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Can not deposit VTs: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    }
  };

  const withdrawVTs = async (walletAddress: any, numberOfDays: number) => {
    try {
      const amount = numberOfDays * 1e18;
      const sendTransaction = await (
        await pufferProtocolContract()
      ).methods
        .withdrawValidatorTickets(
          amount,
          walletAddress, // withdraw to the same address
        )
        .send({
          from: walletAddress,
          value: '0',
        });

      return sendTransaction;
    } catch (error) {
      let errorMessage = 'Can not withdraw VTs: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Can not withdraw VTs: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    }
  };

  const registerValidator = async (
    walletAddress: any,
    validatorKeyData: ValidatorKeyData,
    moduleName: any,
    pufETHPermit: any,
    vtPermit: any,
  ) => {
    try {
      const prefixedModuleName = add0xPrefix(moduleName);

      const sendTransaction = await (await pufferProtocolContract()).methods
        .registerValidatorKey(
          validatorKeyData,
          prefixedModuleName,
          pufETHPermit,
          vtPermit,
        )
        .send({
          from: walletAddress,
          value: '0',
        });

      return sendTransaction;
    } catch (error) {
      let errorMessage = 'Can not register validator: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Can not register validator: ${shortenString(
          error.message,
        )}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    }
  };

  const permitPufETH = async (walletAddress: any, isEnclave: boolean) => {
    try {
      const enclaveValidatorEthBond = isEnclave
        ? ENCLAVE_VALIDATOR_BOND
        : NO_ENCLAVE_VALIDATOR_BOND;

      const bondInPufETH = BigInt(
        await (await pufETHContract()).methods
          .convertToShares(enclaveValidatorEthBond)
          .call(),
      );

      // Construct pufETH permit
      let { signature, deadline } = await getPermitSignature(
        web3,
        ethersProvider,
        await pufETHContract(),
        walletAddress,
        bondInPufETH,
        pufferProtocolContractAddress,
      );

      // Get the signature from wallet
      const pufETHSignature = await Signature.from(signature);

      // Return formatted permit to be sent
      const pufETHPermit = {
        owner: walletAddress,
        deadline: deadline,
        amount: bondInPufETH,
        v: pufETHSignature.v,
        r: pufETHSignature.r,
        s: pufETHSignature.s,
      };

      return pufETHPermit;
    } catch (error) {
      let errorMessage = 'Can not permit pufETH: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Can not permit pufETH: ${shortenString(error.message)}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      throw new Error(errorMessage);
    }
  };

  const permitVT = async (
    walletAddress: any,
    numDays: number,
  ): Promise<any> => {
    try {
      const vtAmount = BigInt(numDays) * BigInt(1e18);

      // Construct VT permit
      let { signature: vtSignatureString, deadline: vtDeadline } =
        await getPermitSignature(
          web3,
          ethersProvider,
          await validatorTicketContract(),
          walletAddress,
          vtAmount,
          pufferProtocolContractAddress,
        );

      const vtSignature = Signature.from(vtSignatureString);

      const vtPermit = {
        owner: walletAddress,
        deadline: vtDeadline,
        amount: vtAmount,
        v: vtSignature.v,
        r: vtSignature.r,
        s: vtSignature.s,
      };

      return vtPermit;
    } catch (error) {
      let errorMessage = 'Can not permit VT: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Can not permit VT: ${shortenString(error.message)}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      throw new Error(errorMessage);
    }
  };

  const nodeRequiredVTAmount = async (walletAddress: any): Promise<BigInt> => {
    const minVTPerValidator: bigint = await (
      await pufferProtocolContract()
    ).methods
      .getMinimumVtAmount()
      .call();

    const node: NodeInfo = await (await pufferProtocolContract()).methods
      .getNodeInfo(walletAddress)
      .call();

    const numValidators: bigint =
      node.activeValidatorCount + node.pendingValidatorCount;

    return BigInt(numValidators * minVTPerValidator);
  };

  const nodeCanWithdraw = async (
    walletAddress: any,
  ): Promise<boolean | null> => {
    try {
      const nodeInfo = (await (await pufferProtocolContract()).methods
        .getNodeInfo(walletAddress)
        .call()) as NodeInfo;
      const validatorCount =
        nodeInfo.activeValidatorCount + nodeInfo.pendingValidatorCount;
      return validatorCount == BigInt(0);
    } catch (error) {
      let errorMessage =
        'Can not calculate if node can withdraw: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Can not calculate if node can withdraw: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return null;
    }
  };

  return {
    guardianThreshold,
    guardianPubKeys,
    nextModuleAndWithdrawalCredentials,
    getValidatorTicketBalanceInProtocol,
    depositVTs,
    withdrawVTs,
    permitVT,
    permitPufETH,
    registerValidator,
    nodeRequiredVTAmount,
    nodeCanWithdraw,
    pufferProtocolError,
  };
};
export default usePufferProtocol;
