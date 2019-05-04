import * as React from 'react';

export class PersonalInfoPage extends React.Component {
    render() {
        return <div className={'HomePageContainer ContainerPage'}>
            <h1>Your personal information</h1>
            <form noValidate className="pf-c-form">
                <div className="pf-c-form__group">
                    <label
                        className="pf-c-form__label"
                        htmlFor="help-text-simple-form-name"
                    >
                        Name
                        <span
                            className="pf-c-form__label-required"
                            aria-hidden="true"
                        >
                                *
                            </span>
                    </label>
                    <input
                        className="pf-c-form-control"
                        required
                        type="text"
                        id="help-text-simple-form-name"
                        name="help-text-simple-form-name"
                        aria-describedby="help-text-simple-form-name-helper"
                    />
                </div>
                <div className="pf-c-form__group pf-m-action">
                    <div className="pf-c-form__actions">
                        <button className="pf-c-button pf-m-primary">
                            Submit form
                        </button>
                    </div>
                </div>
            </form>
        </div>;
    }
}
