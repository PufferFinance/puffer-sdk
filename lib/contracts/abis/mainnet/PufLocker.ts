export const PufLocker = <const>[
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'depositor', type: 'address' },
    ],
    name: 'getAllDeposits',
    outputs: [
      {
        components: [
          { internalType: 'uint128', name: 'amount', type: 'uint128' },
          { internalType: 'uint128', name: 'releaseTime', type: 'uint128' },
        ],
        internalType: 'struct IPufLocker.Deposit[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256', name: 'start', type: 'uint256' },
      { internalType: 'uint256', name: 'limit', type: 'uint256' },
    ],
    name: 'getDeposits',
    outputs: [
      {
        components: [
          { internalType: 'uint128', name: 'amount', type: 'uint128' },
          { internalType: 'uint128', name: 'releaseTime', type: 'uint128' },
        ],
        internalType: 'struct IPufLocker.Deposit[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLockPeriods',
    outputs: [
      { internalType: 'uint128', name: '', type: 'uint128' },
      { internalType: 'uint128', name: '', type: 'uint128' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint128', name: 'lockPeriod', type: 'uint128' },
      {
        components: [
          { internalType: 'uint256', name: 'deadline', type: 'uint256' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'uint8', name: 'v', type: 'uint8' },
          { internalType: 'bytes32', name: 'r', type: 'bytes32' },
          { internalType: 'bytes32', name: 's', type: 'bytes32' },
        ],
        internalType: 'struct Permit',
        name: 'permitData',
        type: 'tuple',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'uint256[]', name: 'depositIndexes', type: 'uint256[]' },
      { internalType: 'address', name: 'recipient', type: 'address' },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
