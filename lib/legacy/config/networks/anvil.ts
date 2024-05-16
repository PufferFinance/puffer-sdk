import anvilAddresses from '../addresses/anvil.json';

const anvilConfig = {
  // Siren API base URL
  sirenApiBaseUrl:
    'http://staging-console-969568480.eu-west-1.elb.amazonaws.com/siren/api/',
  // Smart contract addresses
  PUFFER_VAULT_CONTRACT_ADDRESS: anvilAddresses.vault,
  PUFFER_PROTOCOL_CONTRACT_ADDRESS: anvilAddresses.protocol,
  VALIDATOR_TICKET_CONTRACT_ADDRESS: anvilAddresses.validatorTicket,
  PUFFER_ORACLE_CONTRACT_ADDRESS: anvilAddresses.oracle,
  GUARDIAN_MODULE_ADDRESS: anvilAddresses.guardianModule,
};

export default anvilConfig;
