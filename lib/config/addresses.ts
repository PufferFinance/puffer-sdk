import mainnetAddresses from './addresses/mainnet.json';
import holeskyAddresses from './addresses/holesky.json';
import anvilAddresses from './addresses/anvil.json';

// Mainnet Addresses
export const MAINNET_PUFFER_VAULT_CONTRACT_ADDRESS = mainnetAddresses.vault;
export const MAINNET_PUFFER_PROTOCOL_CONTRACT_ADDRESS =
  mainnetAddresses.pufferProtocolProxy;
export const MAINNET_VALIDATOR_TICKET_CONTRACT_ADDRESS =
  mainnetAddresses.validatorTicketProxy;
export const MAINNET_PUFFER_ORACLE_CONTRACT_ADDRESS = mainnetAddresses.oracle;
export const MAINNET_GUARDIAN_MODULE_ADDRESS = mainnetAddresses.guardianModule;

// Holesky Addresses
export const HOLESKY_PUFFER_VAULT_CONTRACT_ADDRESS = holeskyAddresses.vault;
export const HOLESKY_PUFFER_PROTOCOL_CONTRACT_ADDRESS =
  holeskyAddresses.protocol;
export const HOLESKY_VALIDATOR_TICKET_CONTRACT_ADDRESS =
  holeskyAddresses.validatorTicket;
export const HOLESKY_PUFFER_ORACLE_CONTRACT_ADDRESS = holeskyAddresses.oracle;
export const HOLESKY_GUARDIAN_MODULE_ADDRESS = holeskyAddresses.guardianModule;

// Anvil Addresses
export const ANVIL_PUFFER_VAULT_CONTRACT_ADDRESS = anvilAddresses.vault;
export const ANVIL_PUFFER_PROTOCOL_CONTRACT_ADDRESS = anvilAddresses.protocol;
export const ANVIL_VALIDATOR_TICKET_CONTRACT_ADDRESS =
  anvilAddresses.validatorTicket;
export const ANVIL_PUFFER_ORACLE_CONTRACT_ADDRESS = anvilAddresses.oracle;
export const ANVIL_GUARDIAN_MODULE_ADDRESS = anvilAddresses.guardianModule;
