import React, { Component } from 'react';

export const KeycloakContext = React.createContext<any>(null);

/**
 * Render children when authenticated with the keycloak.
 */
export default class KeycloakWrapper extends Component<IKeycloakWrapperProps> {
    state = {
        keycloakAuthenticated: null,
        keycloakProfilePromise: null,
        error: null,
        keycloakUser: null,
    };

    /**
     * @private
     * Interval id
     */
    refreshIntervalId: any;

    /**
     * @private
     * Load the keycloak profile
     * @returns {Promise<any>}
     */
    keycloakProfilePromise() {
        const { keycloak } = this.props;

        return new Promise((resolve, reject) => {
            keycloak
                .loadUserInfo()
                .success((user: any) => {
                    this.setState({ keycloakUser: user });
                    return resolve(user);
                })
                .error(reject);
        });
    }

    componentDidMount() {
        this.keycloakPromise()
            .then(docs => {
                this.setState({
                    keycloakAuthenticated: docs,
                    keycloakProfilePromise: this.keycloakProfilePromise(),
                });
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    componentWillUnmount() {
        // Clear the interval if exits
        if (this.refreshIntervalId) {
            clearInterval(this.refreshIntervalId);
        }
    }

    /**
     * Render the element
     * @returns {*}
     */
    render() {
        const {
            keycloakAuthenticated,
            error,
            keycloakProfilePromise,
        } = this.state;
        const { keycloakUser } = this.state;
        const { children, keycloak } = this.props;

        return (
            <KeycloakContext.Provider
                value={{
                    profile: keycloakProfilePromise,
                    error,
                    keycloakUser,
                    keycloak,
                }}
            >
                {error ? (
                    <div>Something went wrong</div>
                ) : (
                    <div>
                        {keycloakAuthenticated && keycloakUser && children}
                    </div>
                )}
            </KeycloakContext.Provider>
        );
    }

    /**
     * @private
     * Keycloak promise
     * @returns {Promise<any>}
     */
    private keycloakPromise() {
        const { keycloak } = this.props;

        return new Promise((resolve, reject) => {
            // Call the init keycloak
            keycloak
                .init(this.props.keycloakOptions)
                .success((authenticated: boolean) => {
                    if (authenticated) {
                        // Update the token in specific time
                        this.refreshIntervalId = setInterval(() => {
                            keycloak.updateToken(0).error((err: any) => {
                                if (err) {
                                    // eslint-disable-next-line
                                    this.setState({ error: err });
                                }
                            });
                        }, 1000 * 60 * 4);
                        resolve(authenticated);
                    } else {
                        keycloak.login({
                            scope: process.env.REACT_APP_KEYCLOAK_SCOPE,
                        });
                    }
                })
                .error(reject);
        });
    }
}

export interface IKeycloakWrapperProps {
    className?: string;
    loadingElement?: any;
    children: any;
    keycloak: any;
    keycloakOptions: any;
    errorChildren?: any;
}
