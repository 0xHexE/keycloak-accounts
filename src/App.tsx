import React from 'react';
import KeycloakWrapper from './Component/KeycloakWrapper';
import { kc } from './keycloak';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { AppLayout } from './Component/AppLayout';
import { PersonalInfoPage } from './Pages/PersonalInfoPage';
import { ChangePasswordPage } from './Pages/ChangePasswordPage';

export default class App extends React.Component {
    render() {
        const kcOptions = {
            onLoad: 'check-sso',
            checkLoginIframeInterval: 1,
        };
        return (
            <KeycloakWrapper keycloak={kc} keycloakOptions={kcOptions}>
                <BrowserRouter>
                    <AppLayout>
                        <Switch>
                            <Route
                                path={'/'}
                                exact={true}
                                children={<HomePage />}
                            />
                            <Route
                                path={'/personal-info'}
                                children={<PersonalInfoPage />}
                            />
                            <Route
                                path={'/account-security/change-password'}
                                children={<ChangePasswordPage />}
                            />
                            <Route
                                path={'*'}
                                children={<p>Page not found</p>}
                            />
                        </Switch>
                    </AppLayout>
                </BrowserRouter>
            </KeycloakWrapper>
        );
    }
}
