import { Chain } from '../chains/constants';
import { Token, UnifiToken } from './tokens';

export const VAULTS_ADDRESSES = {
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
  [UnifiToken.pufETHs]: {
    [Chain.Mainnet]: {
      NucleusBoringVault: '0x62a4ce0722ee65635c0f8339dd814d549b6f6735',
      NucleusAccountant: '0xa99a92c505ff92c543d9d48295f1f31024afb31f',
      NucleusTeller: '0xd049ebeaa59b75ba8ee38f9f6830db7293320236',
    },
  },
  [Token.ctTACpufETH]: {
    [Chain.Mainnet]: {
      ConcreteMultiStrategyVault: '0x78f314241df1ac151bfd0413eeb51979515f6abd',
    },
  },
  [Token.tacpufETH]: {
    [Chain.Mainnet]: {
      LagoonVault: '0xf2e97704a567e003ed97f2d0976c45b2dda766a0',
    },
    [Chain.Holesky]: {
      LagoonVault: '0x0000000000000000000000000000000000000000',
    },
  },
};
