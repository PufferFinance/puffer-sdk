export enum Network {
  None = 0,
  Holesky = 1,
  Mainnet = 2,
  Anvil = 3,
}

export const networkEnumToString = (selector: Network): string => {
  switch (selector) {
    case Network.Holesky:
      return 'Holesky';
    case Network.Mainnet:
      return 'Mainnet';
    case Network.Anvil:
      return 'Localhost';
    default:
      return 'Invalid Network';
  }
};
