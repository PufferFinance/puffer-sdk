import mainnetAddresses from "../addresses/mainnet.json";

const mainnetConfig = {
    // Siren API base URL
    sirenApiBaseUrl: 'https://api.puffer.fi/siren/api/',

    // Smart contract addresses
    PUFFER_VAULT_CONTRACT_ADDRESS: mainnetAddresses.PufferVault,
    PUFFER_PROTOCOL_CONTRACT_ADDRESS: mainnetAddresses.pufferProtocolProxy,
    VALIDATOR_TICKET_CONTRACT_ADDRESS: mainnetAddresses.validatorTicketProxy,
    PUFFER_ORACLE_CONTRACT_ADDRESS: mainnetAddresses.oracle,
    GUARDIAN_MODULE_ADDRESS: mainnetAddresses.guardianModule
};

export default mainnetConfig;