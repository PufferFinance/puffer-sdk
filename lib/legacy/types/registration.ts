export type ValidatorRegistrationData = {
  version: string;
  module_name: string;
  bls_pub_key_set: string;
  bls_pub_key: string;
  signature: string;
  deposit_data_root: string;
  bls_enc_priv_key_shares: string[];
  intel_sig: string | null;
  intel_report: string | null;
  intel_x509: string | null;
  guardian_pubkeys: string[];
  withdrawal_credentials: string;
  guardian_threshold: number;
  fork_version: string;
};

export type ValidatorKeyData = {
  blsPubKey: Uint8Array;
  signature: Uint8Array;
  depositDataRoot: Uint8Array;
  blsEncryptedPrivKeyShares: Uint8Array[];
  blsPubKeySet: Uint8Array;
  raveEvidence: Uint8Array;
};
