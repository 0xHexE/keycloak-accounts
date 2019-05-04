import React from 'react';
import KeycloakWrapper from "./Component/KeycloakWrapper";
import {kc} from "./keycloak";

export default class App extends React.Component {
    render() {
        const kcOptions = {
            onLoad: 'check-sso',
            checkLoginIframeInterval: 1,
        };
        return <KeycloakWrapper keycloak={kc}
                                keycloakOptions={kcOptions}>
            <p>hello world</p>
        </KeycloakWrapper>
    }
}
