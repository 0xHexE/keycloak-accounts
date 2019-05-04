import keycloak from 'keycloak-js';

export const keycloakConfig: {
    url?: string;
    realm?: string;
    clientId?: string;
    scope?: string;
} = {
    url: process.env.REACT_APP_KEYCLOAK_URL,
    realm: process.env.REACT_APP_KEYCLOAK_REALM,
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
    scope: process.env.REACT_APP_KEYCLOAK_SCOPE,
};

export const kc = keycloak(keycloakConfig);
