export type ValidatorData = {
  node: string;
  module: string;
  bond: string;
  status: ValidatorStatus;
  pubKey: string;
  signature: string;
};

export type ValidatorProp = {
  index: number;
  data: ValidatorData;
};

export enum ValidatorStatus {
  UNINITIALIZED = 0,
  PENDING = 1,
  SKIPPED = 2,
  ACTIVE = 3,
  FROZEN = 4,
}

export const findValidatorStatus = (status: BigInt): ValidatorStatus => {
  switch (status) {
    case BigInt(0):
      return ValidatorStatus.UNINITIALIZED;
    case BigInt(1):
      return ValidatorStatus.PENDING;
    case BigInt(2):
      return ValidatorStatus.SKIPPED;
    case BigInt(3):
      return ValidatorStatus.ACTIVE;
    case BigInt(4):
      return ValidatorStatus.FROZEN;
    default:
      return ValidatorStatus.UNINITIALIZED;
  }
};

// get string representation of validator status
export const getValidatorStatusString = (status: ValidatorStatus): string => {
  switch (status) {
    case ValidatorStatus.UNINITIALIZED:
      return 'Uninitialized';
    case ValidatorStatus.PENDING:
      return 'Pending';
    case ValidatorStatus.SKIPPED:
      return 'Skipped';
    case ValidatorStatus.ACTIVE:
      return 'Active';
    case ValidatorStatus.FROZEN:
      return 'Frozen';
    default:
      return '';
  }
};

export enum BeaconChainValidatorStatus {
  UNINITIALIZED = 0,
  PENDING_PUFFER = 1,
  SKIPPED_PUFFER = 2,
  PENDING_INITIALIZED_BEACON = 4,
  PENDING_QUEUED_BEACON = 5,
  ACTIVE_ONGOING_BEACON = 6,
  ACTIVE_EXITING_BEACON = 7,
  ACTIVE_SLASHED_BEACON = 8,
  EXITED_UNSLASHED_BEACON = 9,
  EXITED_SLASHED_BEACON = 10,
  WITHDRAWAL_POSSIBLE_BEACON = 11,
  WITHDRAWAL_DONE_BEACON = 12,
  PROVISIONED_PUFFER = 13,
  FROZEN = 14,
}

export type Validator = {
  /** Address of the Node operator */
  node: string;

  /** Validator bond (pufETH amount) */
  bond: number;

  /** In which module is the Validator participating */
  module: string;

  /** Validator status */
  puffer_status: ValidatorStatus;

  /** Validator public key */
  pubkey: string;

  /** Index of the Validator in the PufferModule */
  puffer_module_index: number;

  /** Name of the PufferModule */
  module_name: string;

  /** Activation epoch of the validator */
  activation_epoch?: number;

  /** Exit epoch of the validator */
  exit_epoch?: number;

  /** Withdrawable epoch of the validator */
  withdrawable_epoch?: number;

  /** Validator balance */
  balance?: number;

  /** Validator effective balance */
  effective_balance?: number;

  /** Validator beacon chain status */
  status?: string;

  /** Withdrawal credentials to filter by */
  withdrawal_credentials?: string;

  /** Validator index on beacon chain to filter by */
  validator_index?: number;

  /** True if validator was slashed on beacon chain */
  slashed?: boolean;
};

export type NodeInfo = {
  /** Number of active validators for the node */
  active_validator_count: number;

  /** Number of validators pending activation */
  pending_validator_count: number;

  /** Balance of validator tickets */
  vt_balance: number;
};

export type NodeProfile = {
  /** Node information struct */
  node_info: NodeInfo;

  /** List of pending validators */
  pending_validators: Validator[];

  /** List of validators that have been skipped */
  skipped_validators: Validator[];

  /** List of active validators */
  active_validators: Validator[];

  /** Total validator tickets consumed */
  vts_consumed: number;
};
