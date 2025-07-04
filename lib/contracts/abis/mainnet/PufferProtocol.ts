export const PufferProtocol = <const>[
  {
    type: 'constructor',
    inputs: [
      {
        name: 'pufferVault',
        type: 'address',
        internalType: 'contract PufferVaultV2',
      },
      {
        name: 'guardianModule',
        type: 'address',
        internalType: 'contract IGuardianModule',
      },
      {
        name: 'moduleManager',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'validatorTicket',
        type: 'address',
        internalType: 'contract ValidatorTicket',
      },
      {
        name: 'oracle',
        type: 'address',
        internalType: 'contract IPufferOracleV2',
      },
      {
        name: 'beaconDepositContract',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'batchHandleWithdrawals',
    inputs: [
      {
        name: 'validatorInfos',
        type: 'tuple[]',
        internalType: 'struct StoppedValidatorInfo[]',
        components: [
          {
            name: 'module',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'startEpoch',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'endEpoch',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'wasSlashed',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'moduleName',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'pufferModuleIndex',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'withdrawalAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
      {
        name: 'guardianEOASignatures',
        type: 'bytes[]',
        internalType: 'bytes[]',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'createPufferModule',
    inputs: [
      {
        name: 'moduleName',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'depositValidatorTickets',
    inputs: [
      {
        name: 'permit',
        type: 'tuple',
        internalType: 'struct Permit',
        components: [
          {
            name: 'deadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'v',
            type: 'uint8',
            internalType: 'uint8',
          },
          {
            name: 'r',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 's',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
      },
      {
        name: 'node',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getDepositDataRoot',
    inputs: [
      {
        name: 'pubKey',
        type: 'bytes',
        internalType: 'bytes',
      },
      {
        name: 'signature',
        type: 'bytes',
        internalType: 'bytes',
      },
      {
        name: 'withdrawalCredentials',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'getMinimumVtAmount',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getModuleAddress',
    inputs: [
      {
        name: 'moduleName',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getModuleLimitInformation',
    inputs: [
      {
        name: 'moduleName',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: 'info',
        type: 'tuple',
        internalType: 'struct ModuleLimit',
        components: [
          {
            name: 'allowedLimit',
            type: 'uint128',
            internalType: 'uint128',
          },
          {
            name: 'numberOfRegisteredValidators',
            type: 'uint128',
            internalType: 'uint128',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getModuleWeights',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32[]',
        internalType: 'bytes32[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getNextValidatorToProvision',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getNodeInfo',
    inputs: [
      {
        name: 'node',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct NodeInfo',
        components: [
          {
            name: 'activeValidatorCount',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'pendingValidatorCount',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'vtBalance',
            type: 'uint96',
            internalType: 'uint96',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getVTPenalty',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getValidatorInfo',
    inputs: [
      {
        name: 'moduleName',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'pufferModuleIndex',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct Validator',
        components: [
          {
            name: 'node',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'bond',
            type: 'uint96',
            internalType: 'uint96',
          },
          {
            name: 'module',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'status',
            type: 'uint8',
            internalType: 'enum Status',
          },
          {
            name: 'pubKey',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getValidatorTicketsBalance',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getValidators',
    inputs: [
      {
        name: 'moduleName',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple[]',
        internalType: 'struct Validator[]',
        components: [
          {
            name: 'node',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'bond',
            type: 'uint96',
            internalType: 'uint96',
          },
          {
            name: 'module',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'status',
            type: 'uint8',
            internalType: 'enum Status',
          },
          {
            name: 'pubKey',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getWithdrawalCredentials',
    inputs: [
      {
        name: 'module',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'provisionNode',
    inputs: [
      {
        name: 'guardianEnclaveSignatures',
        type: 'bytes[]',
        internalType: 'bytes[]',
      },
      {
        name: 'validatorSignature',
        type: 'bytes',
        internalType: 'bytes',
      },
      {
        name: 'depositRootHash',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'registerValidatorKey',
    inputs: [
      {
        name: 'data',
        type: 'tuple',
        internalType: 'struct ValidatorKeyData',
        components: [
          {
            name: 'blsPubKey',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'signature',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'depositDataRoot',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'blsEncryptedPrivKeyShares',
            type: 'bytes[]',
            internalType: 'bytes[]',
          },
          {
            name: 'blsPubKeySet',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'raveEvidence',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'moduleName',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'pufETHPermit',
        type: 'tuple',
        internalType: 'struct Permit',
        components: [
          {
            name: 'deadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'v',
            type: 'uint8',
            internalType: 'uint8',
          },
          {
            name: 'r',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 's',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
      },
      {
        name: 'vtPermit',
        type: 'tuple',
        internalType: 'struct Permit',
        components: [
          {
            name: 'deadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'v',
            type: 'uint8',
            internalType: 'uint8',
          },
          {
            name: 'r',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 's',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'skipProvisioning',
    inputs: [
      {
        name: 'moduleName',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'guardianEOASignatures',
        type: 'bytes[]',
        internalType: 'bytes[]',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'withdrawValidatorTickets',
    inputs: [
      {
        name: 'amount',
        type: 'uint96',
        internalType: 'uint96',
      },
      {
        name: 'recipient',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'NewPufferModuleCreated',
    inputs: [
      {
        name: 'module',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'moduleName',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'withdrawalCredentials',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'SuccessfullyProvisioned',
    inputs: [
      {
        name: 'pubKey',
        type: 'bytes',
        indexed: false,
        internalType: 'bytes',
      },
      {
        name: 'pufferModuleIndex',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'moduleName',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ValidatorKeyRegistered',
    inputs: [
      {
        name: 'pubKey',
        type: 'bytes',
        indexed: false,
        internalType: 'bytes',
      },
      {
        name: 'pufferModuleIndex',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'moduleName',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'usingEnclave',
        type: 'bool',
        indexed: false,
        internalType: 'bool',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ValidatorTicketsDeposited',
    inputs: [
      {
        name: 'node',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'depositor',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ValidatorTicketsWithdrawn',
    inputs: [
      {
        name: 'node',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'recipient',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'AccessManagedInvalidAuthority',
    inputs: [
      {
        name: 'authority',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'AccessManagedRequiredDelay',
    inputs: [
      {
        name: 'caller',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'delay',
        type: 'uint32',
        internalType: 'uint32',
      },
    ],
  },
  {
    type: 'error',
    name: 'AccessManagedUnauthorized',
    inputs: [
      {
        name: 'caller',
        type: 'address',
        internalType: 'address',
      },
    ],
  },
  {
    type: 'error',
    name: 'InvalidAddress',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidBLSPrivateKeyShares',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidBLSPubKey',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidBLSPublicKeySet',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidDepositRootHash',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidETHAmount',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidVTAmount',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidValidatorState',
    inputs: [
      {
        name: 'status',
        type: 'uint8',
        internalType: 'enum Status',
      },
    ],
  },
  {
    type: 'error',
    name: 'ModuleAlreadyExists',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ValidatorLimitForModuleReached',
    inputs: [],
  },
];
