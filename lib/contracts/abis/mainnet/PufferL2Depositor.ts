export const PufferL2Depositor = <const>[
  {
    inputs: [
      { internalType: 'address', name: 'token', type: 'address' },
      { internalType: 'address', name: 'account', type: 'address' },
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
      { internalType: 'uint256', name: 'referralCode', type: 'uint256' },
      { internalType: 'uint128', name: 'lockPeriod', type: 'uint128' },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
