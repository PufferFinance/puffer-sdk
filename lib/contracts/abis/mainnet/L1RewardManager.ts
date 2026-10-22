export const L1RewardManager = <const>[
  {
    type: 'function',
    name: 'authority',
    inputs: [],
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
    name: 'getClaimingDelay',
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
    name: 'getCurrentIntervalEndEpoch',
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
    name: 'getInterval',
    inputs: [
      {
        name: 'intervalId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct L1RewardManagerStorage.Interval',
        components: [
          {
            name: 'startEpoch',
            type: 'uint104',
            internalType: 'uint104',
          },
          {
            name: 'endEpoch',
            type: 'uint104',
            internalType: 'uint104',
          },
          {
            name: 'claimableAt',
            type: 'uint48',
            internalType: 'uint48',
          },
          {
            name: 'pufETHAmount',
            type: 'uint128',
            internalType: 'uint128',
          },
          {
            name: 'ethAmount',
            type: 'uint128',
            internalType: 'uint128',
          },
          {
            name: 'claimedPufETHAmount',
            type: 'uint128',
            internalType: 'uint128',
          },
          {
            name: 'status',
            type: 'uint8',
            internalType: 'enum L1RewardManagerStorage.IntervalStatus',
          },
          {
            name: 'ethToPufETHRate',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'rewardsRoot',
            type: 'bytes32',
            internalType: 'bytes32',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getIntervalId',
    inputs: [
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
    name: 'getLastIntervalEndEpoch',
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
    name: 'getNewestIntervalId',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isClaimed',
    inputs: [
      {
        name: 'intervalId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isClaimingLocked',
    inputs: [
      {
        name: 'intervalId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'claimRewards',
    inputs: [
      {
        name: 'claimOrders',
        type: 'tuple[]',
        internalType: 'struct IL1RewardManager.ClaimOrder[]',
        components: [
          {
            name: 'intervalId',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          {
            name: 'amount',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'isL1Contract',
            type: 'bool',
            internalType: 'bool',
          },
          {
            name: 'account',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'merkleProof',
            type: 'bytes32[]',
            internalType: 'bytes32[]',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
];
