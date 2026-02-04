export const NonRestakingWithdrawalCredentials = <const>[
  {
    inputs: [],
    name: 'authority',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getConsolidationRequestFee',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getWithdrawalRequestFee',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bytes', name: 'srcPubkey', type: 'bytes' },
          { internalType: 'bytes', name: 'targetPubkey', type: 'bytes' },
        ],
        internalType: 'struct IEigenPodTypes.ConsolidationRequest[]',
        name: 'requests',
        type: 'tuple[]',
      },
    ],
    name: 'requestConsolidation',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'bytes', name: 'pubkey', type: 'bytes' },
          { internalType: 'uint64', name: 'amountGwei', type: 'uint64' },
        ],
        internalType: 'struct IEigenPodTypes.WithdrawalRequest[]',
        name: 'requests',
        type: 'tuple[]',
      },
    ],
    name: 'requestWithdrawal',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vault',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
