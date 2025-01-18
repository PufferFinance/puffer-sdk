import { Chain } from '../chains/constants';
import { UnifiToken } from './tokens';

// Source of truth:
// https://github.com/PufferFinance/Deployments-and-ACL/tree/main/docs/deployments
export const CONTRACT_ADDRESSES = {
  [Chain.Mainnet]: {
    PufferVault: '0xD9A442856C234a39a81a089C06451EBAa4306a72',
    PufferDepositor: '0x4aa799c5dfc01ee7d790e3bf1a7c2257ce1dceff',
    PufferL2Depositor: '0x3436E0B85cd929929F5802e792CFE282166E0259',
    PufLocker: '0x48e8dE138C246c14248C94d2D616a2F9eb4590D2',
    L1RewardManager: '0x157788cc028Ac6405bD406f2D1e0A8A22b3cf17b',
    // L2RewardManager is not deployed to mainnet but base.
    L2RewardManager: '0x0000000000000000000000000000000000000000',
    PufferWithdrawalManager: '0xDdA0483184E75a5579ef9635ED14BacCf9d50283',
    NucleusAtomicQueue: '0xc7287780bfa0C5D2dD74e3e51E238B1cd9B221ee',
  },
  [Chain.Holesky]: {
    PufferVault: '0x9196830bB4c05504E0A8475A0aD566AceEB6BeC9',
    PufferDepositor: '0x824AC05aeb86A0aD770b8acDe0906d2d4a6c4A8c',
    PufferL2Depositor: '0x0af6998e4828ad8ef8f79a9288d0a861890f791d',
    PufLocker: '0xa58983ad0899a452b7420bc57228e329d7ba92b6',
    L1RewardManager: '0x10f970bcb84B82B82a65eBCbF45F26dD26D69F12',
    L2RewardManager: '0x58C046794f69A8830b0BE737022a45b4acd01dE5',
    PufferWithdrawalManager: '0x5A3E1069B66800c0ecbc91bd81b1AE4D1804DBc4',
  },
  [Chain.Base]: {
    L2RewardManager: '0xF9Dd335bF363b2E4ecFe3c94A86EBD7Dd3Dcf0e7',
  },
};

export const NUCLEUS_CONTRACT_ADDRESSES = {
  [UnifiToken.unifiETH]: {
    [Chain.Mainnet]: {
      NucleusBoringVault: '0x196ead472583bc1e9af7a05f860d9857e1bd3dcc',
      NucleusAccountant: '0xa9fb7e2922216debe3fd5e1bbe7591ee446dc21c',
      NucleusTeller: '0x08eb2eccdf6ebd7aba601791f23ec5b5f68a1d53',
    },
  },
  [UnifiToken.unifiUSD]: {
    [Chain.Mainnet]: {
      NucleusBoringVault: '0x82c40e07277eBb92935f79cE92268F80dDc7caB4',
      NucleusAccountant: '0xe0bDb7b9225A2CeB42998dc2E51D4D3CDeb7e3Be',
      NucleusTeller: '0x5d3Fb47FE7f3F4Ce8fe55518f7E4F7D6061B54DD',
    },
  },
  [UnifiToken.unifiBTC]: {
    [Chain.Mainnet]: {
      NucleusBoringVault: '0x170d847a8320f3b6a77ee15b0cae430e3ec933a0',
      NucleusAccountant: '0x2afb28b0561d99b5e00829ec2ef54946a00a35f7',
      NucleusTeller: '0x0743647a607822781f9d0a639454e76289182f0b',
    },
  },
};
