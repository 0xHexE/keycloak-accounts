import React, { Component } from 'react';
import style from './HomePage.module.scss';

export class HomePage extends Component {
    public render() {
        return (
            <div className={'HomePageContainer'}>
                <h1 className={style.IntroText}>
                    Welcome to {process.env.REACT_APP_NAME}
                </h1>
            </div>
        );
    }
}
