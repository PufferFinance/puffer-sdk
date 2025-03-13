export const L2RewardManager = <const>[
  {
    type: 'function',
    name: 'authority',
    inputs: [],
    outputs: [{ name: '', type: 'address', internalType: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getClaimingDelay',
    inputs: [],
    outputs: [{ name: '', type: 'uint256', internalType: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getEpochRecord',
    inputs: [{ name: 'intervalId', type: 'bytes32', internalType: 'bytes32' }],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct L2RewardManagerStorage.EpochRecord',
        components: [
          {
            name: 'startEpoch',
            type: 'uint104',
            internalType: 'uint104',
          },
          { name: 'endEpoch', type: 'uint104', internalType: 'uint104' },
          { name: 'timeBridged', type: 'uint48', internalType: 'uint48' },
          {
            name: 'pufETHAmount',
            type: 'uint128',
            internalType: 'uint128',
          },
          { name: 'ethAmount', type: 'uint128', internalType: 'uint128' },
          {
            name: 'ethToPufETHRate',
            type: 'uint256',
            internalType: 'uint256',
          },
          { name: 'rewardRoot', type: 'bytes32', internalType: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getIntervalId',
    inputs: [
      { name: 'startEpoch', type: 'uint256', internalType: 'uint256' },
      { name: 'endEpoch', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'getRewardsClaimer',
    inputs: [{ name: 'account', type: 'address', internalType: 'address' }],
    outputs: [{ name: '', type: 'address', internalType: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isClaimed',
    inputs: [
      { name: 'intervalId', type: 'bytes32', internalType: 'bytes32' },
      { name: 'account', type: 'address', internalType: 'address' },
    ],
    outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isClaimingLocked',
    inputs: [{ name: 'intervalId', type: 'bytes32', internalType: 'bytes32' }],
    outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'claimRewards',
    inputs: [
      {
        name: 'claimOrders',
        type: 'tuple[]',
        internalType: 'struct IL2RewardManager.ClaimOrder[]',
        components: [
          {
            name: 'intervalId',
            type: 'bytes32',
            internalType: 'bytes32',
          },
          { name: 'amount', type: 'uint256', internalType: 'uint256' },
          { name: 'isL1Contract', type: 'bool', internalType: 'bool' },
          { name: 'account', type: 'address', internalType: 'address' },
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
