import bls from '@chainsafe/bls/herumi';
import { ContainerType, ByteVectorType, UintNumberType } from '@chainsafe/ssz';
import { ethers } from 'ethers';
import { useState } from 'react';

import { ErrorProps } from '../../types/error';
import { ValidatorRegistrationData } from '../../types/registration';
import { bufferHex } from '../../utils/Key';
import { useWeb3 } from '../context/Web3Context';

const HOLESKY_DEPOSIT_DOMAIN =
  '030000005b83a23759c560b2d0c64576e1dcfc34ea94c4988f3e0d9f77f05387';
const MAINNET_DEPOSIT_DOMAIN =
  '03000000f5a5fd42d16a20302798ef6ed309979b43003d2320d9f0e8ea9831a9';

const useVerifySignature = () => {
  const [signatureError, setError] = useState<ErrorProps | null>(null);

  const { isMainnet } = useWeb3();

  const addError = (newError: ErrorProps) => {
    setError(newError);
  };

  const DepositMessage = new ContainerType({
    pubkey: new ByteVectorType(48),
    withdrawal_credentials: new ByteVectorType(32),
    amount: new UintNumberType(8),
  });

  const DepositData = new ContainerType({
    pubkey: new ByteVectorType(48),
    withdrawal_credentials: new ByteVectorType(32),
    amount: new UintNumberType(8),
    signature: new ByteVectorType(96),
  });

  const SigningData = new ContainerType({
    object_root: new ByteVectorType(32),
    domain: new ByteVectorType(32),
  });

  const buildDepositMessage = (
    jsonObject: ValidatorRegistrationData,
  ): Uint8Array => {
    const bls_pubkey_bytes = bufferHex(jsonObject.bls_pub_key);
    const withdrawal_credentials_bytes = bufferHex(
      jsonObject.withdrawal_credentials,
    );

    // DepositMessage
    const message = DepositMessage.defaultValue();
    message.pubkey = bls_pubkey_bytes;
    message.withdrawal_credentials = withdrawal_credentials_bytes;
    message.amount = 32000000000;

    // SigningRoot
    const signing_data = SigningData.defaultValue();
    signing_data.object_root = DepositMessage.hashTreeRoot(message);

    // Precomputed domain depending on network
    if (isMainnet) {
      signing_data.domain = bufferHex(MAINNET_DEPOSIT_DOMAIN);
    } else {
      signing_data.domain = bufferHex(HOLESKY_DEPOSIT_DOMAIN);
    }

    const root = SigningData.hashTreeRoot(signing_data);

    return root;
  };

  const validateBLSSignature = async (
    jsonObject: ValidatorRegistrationData,
    deposit_message_root: Uint8Array,
  ): Promise<boolean> => {
    try {
      const bls_pubkey_bytes = bufferHex(jsonObject.bls_pub_key);
      const signature_bytes = bufferHex(jsonObject.signature);
      const withdrawal_credentials_bytes = bufferHex(
        jsonObject.withdrawal_credentials,
      );
      const deposit_data_root_bytes = bufferHex(jsonObject.deposit_data_root);

      // Verify signature is valid
      const sigValid = bls.verify(
        bls_pubkey_bytes,
        deposit_message_root,
        signature_bytes,
      );

      // Construct expected DepositDataRoot
      const depositData = DepositData.defaultValue();
      depositData.pubkey = bls_pubkey_bytes;
      depositData.withdrawal_credentials = withdrawal_credentials_bytes;
      depositData.amount = 32000000000;
      depositData.signature = signature_bytes;
      const depositDataRoot = DepositData.hashTreeRoot(depositData);

      // Verify submitted DepositDataRoot matches expected
      const depositDataRootValid =
        ethers.hexlify(depositDataRoot) ===
        ethers.hexlify(deposit_data_root_bytes);

      if (sigValid && depositDataRootValid) {
        return true;
      } else {
        addError({ message: 'Invalid Signature.', type: 'ChainError' });
        return false;
      }
    } catch (error) {
      let errorMessage = 'Error during signature verification: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Error during signature verification: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return false;
    }
  };

  const handleSignatureVerification = async (
    jsonObject?: ValidatorRegistrationData | null,
  ): Promise<boolean> => {
    if (jsonObject === null) {
      return false;
    }
    try {
      // build DepositMessage type
      const json: ValidatorRegistrationData =
        jsonObject as ValidatorRegistrationData;
      const deposit_message = buildDepositMessage(json);
      // validate the BLS signature
      const isValidSignature = validateBLSSignature(json, deposit_message);
      return isValidSignature;
    } catch (error) {
      let errorMessage = 'Error during signature verification: Unknown error';
      if (error instanceof Error) {
        errorMessage = `Error during signature verification: ${error.message}`;
      }
      addError({ message: errorMessage, type: 'ChainError' });
      return false;
    }
  };

  return { handleSignatureVerification, signatureError };
};

export default useVerifySignature;
