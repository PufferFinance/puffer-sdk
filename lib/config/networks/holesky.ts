import holeskyAddresses from "../addresses/holesky.json";

const testnetConfig = {
    // Siren API base URL
    sirenApiBaseUrl: 'https://staging-api.puffer.fi/siren/api/',

    // Smart contract addresses
    PUFFER_VAULT_CONTRACT_ADDRESS: holeskyAddresses.vault,
    PUFFER_PROTOCOL_CONTRACT_ADDRESS: holeskyAddresses.protocol,
    VALIDATOR_TICKET_CONTRACT_ADDRESS: holeskyAddresses.validatorTicket,
    PUFFER_ORACLE_CONTRACT_ADDRESS: holeskyAddresses.oracle,
    GUARDIAN_MODULE_ADDRESS: holeskyAddresses.guardianModule
};

export default testnetConfig;
