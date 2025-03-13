export const L1RewardManager = <const>[
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
      { internalType: 'address', name: 'bridge', type: 'address' },
      { internalType: 'address', name: 'claimer', type: 'address' },
    ],
    name: 'setL2RewardClaimer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];
