import React, { Component } from 'react';
import { IApp, NavApps } from '../../Data/NavApps';
import { Link } from 'react-router-dom';
import { KeycloakContext } from '../KeycloakWrapper';

export class AppLayout extends Component<{}, IAppLayoutState> {

    private renderProfileMenu() {
        return (
            <div className="pf-c-page__header-tools-group">
                <div className="pf-m-user">
                    <div className="pf-c-dropdown">
                        <button
                            onClick={() => {
                                const ele = document.getElementById(
                                    'user-profile-menu'
                                );
                                ele &&
                                    (ele.hasAttribute('hidden')
                                        ? ele.removeAttribute('hidden')
                                        : ele.setAttribute('hidden', 'true'));
                            }}
                            className="pf-c-dropdown__toggle pf-m-plain"
                            id="page-layout-grouped-nav-dropdown-button"
                            aria-expanded="false"
                        >
                            <span className="pf-c-dropdown__toggle-text">
                                <KeycloakContext.Consumer>
                                    {
                                        value => value.keycloakUser.name || `${ value.keycloakUser.given_name } ${ value.keycloakUser.family_name }`
                                    }
                                </KeycloakContext.Consumer>
                            </span>
                            <i
                                className="fas fa-caret-down pf-c-dropdown__toggle-icon"
                                aria-hidden="true"
                            />
                        </button>
                        <div
                            className="pf-c-dropdown__menu"
                            id={'user-profile-menu'}
                            hidden
                        >
                            <li>
                                <KeycloakContext.Consumer>
                                    {value => (
                                        <a
                                            className="pf-c-dropdown__menu-item"
                                            onClick={() =>
                                                value.keycloak.logout()
                                            }
                                            href="#logout"
                                        >
                                            Logout
                                        </a>
                                    )}
                                </KeycloakContext.Consumer>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private static renderSidenavItem(section: IApp[]) {
        return (
            <ul className="pf-c-nav__simple-list">
                {section.map(app => {
                    return (
                        <li className="pf-c-nav__item" key={app.key}>
                            {app.to ? (
                                <Link to={app.to} className="pf-c-nav__link">
                                    {app.heading}
                                </Link>
                            ) : (
                                <a href={app.href} className="pf-c-nav__link">
                                    {app.heading}
                                </a>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    }

    private renderSidenav() {
        return (
            <div className="pf-c-page__sidebar">
                <div className="pf-c-page__sidebar-body">
                    <nav
                        className="pf-c-nav"
                        id="page-layout-grouped-nav-grouped-nav"
                        aria-label="Global"
                    >
                        {NavApps.map(section => {
                            return (
                                <section
                                    key={section.key}
                                    className="pf-c-nav__section"
                                    aria-labelledby={section.heading}
                                    {...section.extraProps}
                                >
                                    <h2
                                        className="pf-c-nav__section-title"
                                        id={section.key}
                                    >
                                        {section.heading}
                                    </h2>
                                    {AppLayout.renderSidenavItem(section.apps)}
                                </section>
                            );
                        })}
                    </nav>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div
                className="pf-c-page main-content"
                id="page-layout-grouped-nav"
            >
                <a
                    className="pf-c-skip-to-content pf-c-button pf-m-primary"
                    href="#main-content-page-layout-grouped-nav"
                >
                    Skip to content
                </a>
                <header role="banner" className="pf-c-page__header">
                    <div className="pf-c-page__header-brand">
                        <div className="pf-c-page__header-brand-toggle">
                            <button
                                className="pf-c-button pf-m-plain"
                                id="page-layout-grouped-nav-nav-toggle"
                                aria-label="Global navigation"
                                aria-expanded="true"
                                aria-controls="page-layout-grouped-nav-grouped-nav"
                            >
                                <i className="fas fa-bars" aria-hidden="true" />
                            </button>
                        </div>
                        <a className="pf-c-page__header-brand-link" href={'/'}>
                            <img
                                className="pf-c-brand"
                                src={process.env.REACT_APP_COMPANY_LOGO_URL}
                                alt={process.env.REACT_APP_COMPANY_NAME}
                            />
                        </a>
                    </div>
                    <div className="pf-c-page__header-tools">
                        {this.renderProfileMenu()}
                    </div>
                </header>
                {this.renderSidenav()}
                <main role="main" className="pf-c-page__main">
                    <a id="main-content-page-layout-grouped-nav" style={{ display: 'none' }} href={'/'}>
                        Page
                    </a>
                    <section className="pf-c-page__main-section pf-m-light">
                        <div className="pf-c-content">
                            {this.props.children}
                        </div>
                    </section>
                    <section className="pf-c-page__main-section pf-m-light" />
                    <section className="pf-c-page__main-section pf-m-dark-200" />
                    <section className="pf-c-page__main-section" />
                </main>
            </div>
        );
    }
}

export interface IAppLayoutState {
}
