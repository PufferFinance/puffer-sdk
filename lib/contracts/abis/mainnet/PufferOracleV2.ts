export const PufferOracleV2 = <const>[
  {
    inputs: [
      {
        internalType: 'contract IGuardianModule',
        name: 'guardianModule',
        type: 'address',
      },
      { internalType: 'address payable', name: 'vault', type: 'address' },
      { internalType: 'address', name: 'accessManager', type: 'address' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [{ internalType: 'address', name: 'authority', type: 'address' }],
    name: 'AccessManagedInvalidAuthority',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'address', name: 'caller', type: 'address' },
      { internalType: 'uint32', name: 'delay', type: 'uint32' },
    ],
    name: 'AccessManagedRequiredDelay',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'caller', type: 'address' }],
    name: 'AccessManagedUnauthorized',
    type: 'error',
  },
  { inputs: [], name: 'InvalidUpdate', type: 'error' },
  { inputs: [], name: 'InvalidValidatorTicketPrice', type: 'error' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldPrice',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newPrice',
        type: 'uint256',
      },
    ],
    name: 'ValidatorTicketMintPriceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldNumberOfValidators',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newNumberOfValidators',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'epochNumber',
        type: 'uint256',
      },
    ],
    name: 'TotalNumberOfValidatorsUpdated',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'numberOfExits', type: 'uint256' },
    ],
    name: 'exitValidators',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLockedEthAmount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTotalNumberOfValidators',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getValidatorTicketPrice',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isOverBurstThreshold',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'provisionNode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'newPrice', type: 'uint256' }],
    name: 'setMintPrice',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newTotalNumberOfValidators',
        type: 'uint256',
      },
      { internalType: 'uint256', name: 'epochNumber', type: 'uint256' },
      {
        internalType: 'bytes[]',
        name: 'guardianEOASignatures',
        type: 'bytes[]',
      },
    ],
    name: 'setTotalNumberOfValidators',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
