import Web3 from 'web3';

// Constants for the right lengths
const BLS_PUB_KEY_SET_CORRECT_LENGTH = 10;
const BLS_ENC_PRIV_KEY_SHARES_CORRECT_LENGTH = 10;
const GUARDIAN_PUBLIC_KEY_CORRECT_LENGTH = 10;

export const checkKeyLengths = (
  bls_pub_key_set: any[],
  bls_enc_priv_key_shares: any[],
  guardian_public_key: any,
): boolean => {
  const isBlsPubKeySetCorrectLength =
    bls_pub_key_set.length === BLS_PUB_KEY_SET_CORRECT_LENGTH;
  const isBlsEncPrivKeySharesCorrectLength =
    bls_enc_priv_key_shares.length === BLS_ENC_PRIV_KEY_SHARES_CORRECT_LENGTH;
  const isGuardianPublicKeyCorrectLength =
    guardian_public_key.length === GUARDIAN_PUBLIC_KEY_CORRECT_LENGTH;

  return (
    isBlsPubKeySetCorrectLength &&
    isBlsEncPrivKeySharesCorrectLength &&
    isGuardianPublicKeyCorrectLength
  );
};

export const bufferHex = (x: string): Uint8Array => {
  const hex = x.startsWith('0x') ? x.slice(2) : x;
  return Web3.utils.hexToBytes(hex);
};

export const stringToBytes = (s: string | null): Uint8Array => {
  if (!s) return new Uint8Array();
  return new TextEncoder().encode(s);
};

export const bytesToHex = (b?: Uint8Array): string => {
  if (!b) return '';
  return Web3.utils.bytesToHex(b);
};

export const string0xPrefix = (x: string): string => {
  const hex = x.startsWith('0x') ? x.slice(2) : x;
  return hex;
};

export const add0xPrefix = (x: string): string =>
  x.startsWith('0x') ? x : '0x' + x;
