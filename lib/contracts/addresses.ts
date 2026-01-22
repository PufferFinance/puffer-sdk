import { Chain } from '../chains/constants';

// Source of truth:
// https://github.com/PufferFinance/Deployments-and-ACL/tree/main/docs/deployments
export const CONTRACT_ADDRESSES = {
  // Casting to number so the consumer can use chain ids. Also not using
  // a generic type for the variable so the consumer knows which
  // contracts can be accessed.
  [Chain.Mainnet as number]: {
    PufferVault: '0xD9A442856C234a39a81a089C06451EBAa4306a72',
    PufferDepositor: '0x4aa799c5dfc01ee7d790e3bf1a7c2257ce1dceff',
    PufferL2Depositor: '0x3436E0B85cd929929F5802e792CFE282166E0259',
    PufLocker: '0x48e8dE138C246c14248C94d2D616a2F9eb4590D2',
    L1RewardManager: '0x157788cc028Ac6405bD406f2D1e0A8A22b3cf17b',
    // L2RewardManager is not deployed to mainnet but base.
    L2RewardManager: '0x0000000000000000000000000000000000000000',
    PufferWithdrawalManager: '0xDdA0483184E75a5579ef9635ED14BacCf9d50283',
    NucleusAtomicQueue: '0x228c44bb4885c6633f4b6c83f14622f37d5112e5',
    CarrotStaker: '0x99c599227c65132822f0290d9e5b4b0430d6c0d6',
    Distributor: '0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae',
    ValidatorTicket: '0x7D26AD6F6BA9D6bA1de0218Ae5e20CD3a273a55A',
    PufferOracleV2: '0x0BE2aE0edbeBb517541DF217EF0074FC9a9e994f',
    PufferProtocol: '0xf7b6B32492c2e13799D921E84202450131bd238B',
    GuardianModule: '0x628b183F248a142A598AA2dcCCD6f7E480a7CcF2',
    GaugeRegistry: '0x27ef0bc5eaa61dc6e7d08f17eb00de7d94398a25',
    CarrotVesting: '0xff00c2dd07d811bea632cb9f9e4919dd6fcbc82b',
  },
  [Chain.Holesky as number]: {
    PufferVault: '0x9196830bB4c05504E0A8475A0aD566AceEB6BeC9',
    PufferDepositor: '0x824AC05aeb86A0aD770b8acDe0906d2d4a6c4A8c',
    PufferL2Depositor: '0x0af6998e4828ad8ef8f79a9288d0a861890f791d',
    PufLocker: '0xa58983ad0899a452b7420bc57228e329d7ba92b6',
    L1RewardManager: '0x10f970bcb84B82B82a65eBCbF45F26dD26D69F12',
    L2RewardManager: '0x58C046794f69A8830b0BE737022a45b4acd01dE5',
    PufferWithdrawalManager: '0x5A3E1069B66800c0ecbc91bd81b1AE4D1804DBc4',
    ValidatorTicket: '0xB028194785178a94Fe608994A4d5AD84c285A640',
    PufferOracleV2: '0x8e043ed3f06720615685d4978770cd5c8fe90fe3',
    PufferProtocol: '0xE00c79408B9De5BaD2FDEbB1688997a68eC988CD',
    GuardianModule: '0x0910310130d1c062def8b807528bdac80203bc66',
    GaugeRegistry: '0x0000000000000000000000000000000000000000',
    CarrotVesting: '0x0000000000000000000000000000000000000000',
  },
  [Chain.Sepolia as number]: {
    GaugeRegistry: '0x14b25b3a3C1e6032e7Fbf0309d1ef6881e9A8D7A',
  },
  [Chain.Base as number]: {
    L2RewardManager: '0xF9Dd335bF363b2E4ecFe3c94A86EBD7Dd3Dcf0e7',
  },
  [Chain.Hoodi as number]: {
    PufferDepositor: '0x17F59c077Ae609afA34633408562510CE7b1C336',
    PufferModuleManager: '0x900c4D9003a6e90dF64163100E997cBd4d7913B4',
    PufferModule: '0x0cf7cfa8a3b3c4e2a41c88917f835553abff8ab8',
    PufferModuleBeacon: '0xE526d80Dc834371f11B64A491d8f654a46e86Fc9',
    PufferOracle: '0x87ec630a808fe748bede5faD5E2621B7C84047C6',
    PufferProtocol: '0x9D362e5CA054e03aa27327732b764F2104334942',
    RestakingOperatorController: '0x309bED770Ef408F258F75139CE44237AD29536d8',
    RestakingOperator: '0xE6518d6d43fb2Fc052552fdc7981cA4B5fFD0751',
    ValidatorTicket: '0x2246a5CF6050F6980719a62b53D6261e35650fdd',
  },
};
