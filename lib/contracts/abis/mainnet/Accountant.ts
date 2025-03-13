export const Accountant = <const>[
  {
    inputs: [{ internalType: 'contract ERC20', name: '', type: 'address' }],
    name: 'rateProviderData',
    outputs: [
      { internalType: 'bool', name: 'isPeggedToBase', type: 'bool' },
      {
        internalType: 'contract IRateProvider',
        name: 'rateProvider',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vault',
    outputs: [
      { internalType: 'contract BoringVault', name: '', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getRate',
    outputs: [{ internalType: 'uint256', name: 'rate', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getRateSafe',
    outputs: [{ internalType: 'uint256', name: 'rate', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'contract ERC20', name: 'quote', type: 'address' },
    ],
    name: 'getRateInQuote',
    outputs: [
      { internalType: 'uint256', name: 'rateInQuote', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'contract ERC20', name: 'quote', type: 'address' },
    ],
    name: 'getRateInQuoteSafe',
    outputs: [
      { internalType: 'uint256', name: 'rateInQuote', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
