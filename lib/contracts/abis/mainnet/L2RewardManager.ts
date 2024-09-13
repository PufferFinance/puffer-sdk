export const L2RewardManager = <const>[
  {
    type: 'constructor',
    inputs: [
      { name: 'xPufETH', type: 'address', internalType: 'address' },
      {
        name: 'l1RewardManager',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'L1_REWARD_MANAGER',
    inputs: [],
    outputs: [{ name: '', type: 'address', internalType: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'UPGRADE_INTERFACE_VERSION',
    inputs: [],
    outputs: [{ name: '', type: 'string', internalType: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'XPUFETH',
    inputs: [],
    outputs: [{ name: '', type: 'address', internalType: 'contract IERC20' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'authority',
    inputs: [],
    outputs: [{ name: '', type: 'address', internalType: 'address' }],
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
  {
    type: 'function',
    name: 'freezeAndRevertInterval',
    inputs: [
      { name: 'bridge', type: 'address', internalType: 'address' },
      { name: 'startEpoch', type: 'uint256', internalType: 'uint256' },
      { name: 'endEpoch', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'freezeClaimingForInterval',
    inputs: [
      { name: 'startEpoch', type: 'uint256', internalType: 'uint256' },
      { name: 'endEpoch', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
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
    name: 'initialize',
    inputs: [
      { name: 'accessManager', type: 'address', internalType: 'address' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
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
    name: 'isConsumingScheduledOp',
    inputs: [],
    outputs: [{ name: '', type: 'bytes4', internalType: 'bytes4' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'proxiableUUID',
    inputs: [],
    outputs: [{ name: '', type: 'bytes32', internalType: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'revertInterval',
    inputs: [
      { name: 'bridge', type: 'address', internalType: 'address' },
      { name: 'startEpoch', type: 'uint256', internalType: 'uint256' },
      { name: 'endEpoch', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'setAuthority',
    inputs: [
      { name: 'newAuthority', type: 'address', internalType: 'address' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setDelayPeriod',
    inputs: [{ name: 'delayPeriod', type: 'uint256', internalType: 'uint256' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateBridgeData',
    inputs: [
      { name: 'bridge', type: 'address', internalType: 'address' },
      {
        name: 'bridgeData',
        type: 'tuple',
        internalType: 'struct L2RewardManagerStorage.BridgeData',
        components: [
          {
            name: 'destinationDomainId',
            type: 'uint32',
            internalType: 'uint32',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'upgradeToAndCall',
    inputs: [
      {
        name: 'newImplementation',
        type: 'address',
        internalType: 'address',
      },
      { name: 'data', type: 'bytes', internalType: 'bytes' },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'xReceive',
    inputs: [
      { name: '', type: 'bytes32', internalType: 'bytes32' },
      { name: 'amount', type: 'uint256', internalType: 'uint256' },
      { name: '', type: 'address', internalType: 'address' },
      { name: 'originSender', type: 'address', internalType: 'address' },
      { name: 'originDomainId', type: 'uint32', internalType: 'uint32' },
      { name: 'callData', type: 'bytes', internalType: 'bytes' },
    ],
    outputs: [{ name: '', type: 'bytes', internalType: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'AuthorityUpdated',
    inputs: [
      {
        name: 'authority',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'BridgeDataUpdated',
    inputs: [
      {
        name: 'bridge',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'bridgeData',
        type: 'tuple',
        indexed: false,
        internalType: 'struct L2RewardManagerStorage.BridgeData',
        components: [
          {
            name: 'destinationDomainId',
            type: 'uint32',
            internalType: 'uint32',
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Claimed',
    inputs: [
      {
        name: 'account',
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
        name: 'intervalId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
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
    name: 'ClaimerSet',
    inputs: [
      {
        name: 'account',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'claimer',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ClaimingDelayChanged',
    inputs: [
      {
        name: 'oldDelay',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'newDelay',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ClaimingIntervalFrozen',
    inputs: [
      {
        name: 'startEpoch',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'endEpoch',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ClaimingIntervalReverted',
    inputs: [
      {
        name: 'startEpoch',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'endEpoch',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'intervalId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'pufETHAmount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'rewardsRoot',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Initialized',
    inputs: [
      {
        name: 'version',
        type: 'uint64',
        indexed: false,
        internalType: 'uint64',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RewardRootAndRatePosted',
    inputs: [
      {
        name: 'rewardsAmount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'ethToPufETHRate',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'startEpoch',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'endEpoch',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'intervalId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'rewardsRoot',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Upgraded',
    inputs: [
      {
        name: 'implementation',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'AccessManagedInvalidAuthority',
    inputs: [{ name: 'authority', type: 'address', internalType: 'address' }],
  },
  {
    type: 'error',
    name: 'AccessManagedRequiredDelay',
    inputs: [
      { name: 'caller', type: 'address', internalType: 'address' },
      { name: 'delay', type: 'uint32', internalType: 'uint32' },
    ],
  },
  {
    type: 'error',
    name: 'AccessManagedUnauthorized',
    inputs: [{ name: 'caller', type: 'address', internalType: 'address' }],
  },
  {
    type: 'error',
    name: 'AddressEmptyCode',
    inputs: [{ name: 'target', type: 'address', internalType: 'address' }],
  },
  {
    type: 'error',
    name: 'AlreadyClaimed',
    inputs: [
      { name: 'intervalId', type: 'bytes32', internalType: 'bytes32' },
      { name: 'account', type: 'address', internalType: 'address' },
    ],
  },
  { type: 'error', name: 'BridgeNotAllowlisted', inputs: [] },
  {
    type: 'error',
    name: 'ClaimerNotSet',
    inputs: [{ name: 'node', type: 'address', internalType: 'address' }],
  },
  {
    type: 'error',
    name: 'ClaimingLocked',
    inputs: [
      { name: 'intervalId', type: 'bytes32', internalType: 'bytes32' },
      { name: 'account', type: 'address', internalType: 'address' },
      { name: 'lockedUntil', type: 'uint256', internalType: 'uint256' },
    ],
  },
  {
    type: 'error',
    name: 'ERC1967InvalidImplementation',
    inputs: [
      { name: 'implementation', type: 'address', internalType: 'address' },
    ],
  },
  { type: 'error', name: 'ERC1967NonPayable', inputs: [] },
  { type: 'error', name: 'FailedInnerCall', inputs: [] },
  { type: 'error', name: 'InvalidAddress', inputs: [] },
  { type: 'error', name: 'InvalidAmount', inputs: [] },
  {
    type: 'error',
    name: 'InvalidClaimingInterval',
    inputs: [
      {
        name: 'claimingInterval',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
  },
  { type: 'error', name: 'InvalidDelayPeriod', inputs: [] },
  { type: 'error', name: 'InvalidInitialization', inputs: [] },
  { type: 'error', name: 'InvalidProof', inputs: [] },
  { type: 'error', name: 'NotInitializing', inputs: [] },
  { type: 'error', name: 'RelockingIntervalIsNotAllowed', inputs: [] },
  { type: 'error', name: 'UUPSUnauthorizedCallContext', inputs: [] },
  {
    type: 'error',
    name: 'UUPSUnsupportedProxiableUUID',
    inputs: [{ name: 'slot', type: 'bytes32', internalType: 'bytes32' }],
  },
  { type: 'error', name: 'UnableToFreezeInterval', inputs: [] },
  { type: 'error', name: 'UnableToRevertInterval', inputs: [] },
  { type: 'error', name: 'Unauthorized', inputs: [] },
];
