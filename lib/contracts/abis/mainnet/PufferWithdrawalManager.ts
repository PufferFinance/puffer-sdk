export const PufferWithdrawalManager = <const>[
  {
    type: 'function',
    name: 'getWithdrawal',
    inputs: [
      {
        name: 'withdrawalIdx',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct PufferWithdrawalManagerStorage.Withdrawal',
        components: [
          {
            name: 'pufETHAmount',
            type: 'uint128',
            internalType: 'uint128',
          },
          {
            name: 'pufETHToETHExchangeRate',
            type: 'uint128',
            internalType: 'uint128',
          },
          {
            name: 'recipient',
            type: 'address',
            internalType: 'address',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'requestWithdrawal',
    inputs: [
      {
        name: 'pufETHAmount',
        type: 'uint128',
        internalType: 'uint128',
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
    type: 'function',
    name: 'requestWithdrawalWithPermit',
    inputs: [
      {
        name: 'permitData',
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
        name: 'recipient',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'completeQueuedWithdrawal',
    inputs: [
      {
        name: 'withdrawalIdx',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
];
