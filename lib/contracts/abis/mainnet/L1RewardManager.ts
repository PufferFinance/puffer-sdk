export const L1RewardManager = <const>[
  {
    inputs: [
      { internalType: 'address', name: 'XpufETH', type: 'address' },
      { internalType: 'address', name: 'lockbox', type: 'address' },
      { internalType: 'address', name: 'pufETH', type: 'address' },
      { internalType: 'address', name: 'l2RewardsManager', type: 'address' },
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
  {
    inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  { inputs: [], name: 'BridgeNotAllowlisted', type: 'error' },
  {
    inputs: [
      { internalType: 'address', name: 'implementation', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
    type: 'error',
  },
  { inputs: [], name: 'ERC1967NonPayable', type: 'error' },
  { inputs: [], name: 'FailedInnerCall', type: 'error' },
  { inputs: [], name: 'InvalidAddress', type: 'error' },
  { inputs: [], name: 'InvalidInitialization', type: 'error' },
  { inputs: [], name: 'InvalidMintAmount', type: 'error' },
  { inputs: [], name: 'NotAllowedMintFrequency', type: 'error' },
  { inputs: [], name: 'NotInitializing', type: 'error' },
  { inputs: [], name: 'UUPSUnauthorizedCallContext', type: 'error' },
  {
    inputs: [{ internalType: 'bytes32', name: 'slot', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
    type: 'error',
  },
  { inputs: [], name: 'Unauthorized', type: 'error' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newAmount',
        type: 'uint256',
      },
    ],
    name: 'AllowedRewardMintAmountUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldFrequency',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newFrequency',
        type: 'uint256',
      },
    ],
    name: 'AllowedRewardMintFrequencyUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'authority',
        type: 'address',
      },
    ],
    name: 'AuthorityUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'bridge',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'uint32',
            name: 'destinationDomainId',
            type: 'uint32',
          },
        ],
        indexed: false,
        internalType: 'struct L1RewardManagerStorage.BridgeData',
        name: 'bridgeData',
        type: 'tuple',
      },
    ],
    name: 'BridgeDataUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'version',
        type: 'uint64',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'claimer',
        type: 'address',
      },
    ],
    name: 'L2RewardClaimerUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rewardsAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startEpoch',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endEpoch',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'rewardsRoot',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'ethToPufETHRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'rewardsURI',
        type: 'string',
      },
    ],
    name: 'MintedAndBridgedRewards',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rewardsAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startEpoch',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endEpoch',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'rewardsRoot',
        type: 'bytes32',
      },
    ],
    name: 'RevertedRewards',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
  {
    inputs: [],
    name: 'L2_REWARDS_MANAGER',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'LOCKBOX',
    outputs: [
      { internalType: 'contract IXERC20Lockbox', name: '', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PUFFER_VAULT',
    outputs: [
      { internalType: 'contract PufferVaultV3', name: '', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'XPUFETH',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'authority',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'bridge', type: 'address' }],
    name: 'getBridge',
    outputs: [
      {
        components: [
          {
            internalType: 'uint32',
            name: 'destinationDomainId',
            type: 'uint32',
          },
        ],
        internalType: 'struct L1RewardManagerStorage.BridgeData',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'accessManager', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isConsumingScheduledOp',
    outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'bridge', type: 'address' },
          { internalType: 'uint256', name: 'rewardsAmount', type: 'uint256' },
          { internalType: 'uint256', name: 'startEpoch', type: 'uint256' },
          { internalType: 'uint256', name: 'endEpoch', type: 'uint256' },
          { internalType: 'bytes32', name: 'rewardsRoot', type: 'bytes32' },
          { internalType: 'string', name: 'rewardsURI', type: 'string' },
        ],
        internalType: 'struct IL1RewardManager.MintAndBridgeParams',
        name: 'params',
        type: 'tuple',
      },
    ],
    name: 'mintAndBridgeRewards',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint104', name: 'newAmount', type: 'uint104' }],
    name: 'setAllowedRewardMintAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint104', name: 'newFrequency', type: 'uint104' },
    ],
    name: 'setAllowedRewardMintFrequency',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'newAuthority', type: 'address' },
    ],
    name: 'setAuthority',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'bridge', type: 'address' },
      { internalType: 'address', name: 'claimer', type: 'address' },
    ],
    name: 'setL2RewardClaimer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'bridge', type: 'address' },
      {
        components: [
          {
            internalType: 'uint32',
            name: 'destinationDomainId',
            type: 'uint32',
          },
        ],
        internalType: 'struct L1RewardManagerStorage.BridgeData',
        name: 'bridgeData',
        type: 'tuple',
      },
    ],
    name: 'updateBridgeData',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'newImplementation', type: 'address' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: '', type: 'bytes32' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: 'originSender', type: 'address' },
      { internalType: 'uint32', name: '', type: 'uint32' },
      { internalType: 'bytes', name: 'callData', type: 'bytes' },
    ],
    name: 'xReceive',
    outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
