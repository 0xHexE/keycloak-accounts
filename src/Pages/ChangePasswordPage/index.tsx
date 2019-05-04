import * as React from 'react';

export class ChangePasswordPage extends React.Component {
    render() {
        return <div className={'ChangePasswordPage ContainerPage'}>
            <form noValidate className="pf-c-form">
                <div className="pf-c-form__group">
                    <label className="pf-c-form__label" htmlFor="help-text-simple-form-name">
                        Current password
                        <span className="pf-c-form__label-required" aria-hidden="true">*</span>
                    </label>
                    <input className="pf-c-form-control" required type="text" id="help-text-simple-form-name" name="help-text-simple-form-name" aria-describedby="help-text-simple-form-name-helper" />
                </div>
                <div className="pf-c-form__group">
                    <label className="pf-c-form__label" htmlFor="help-text-simple-form-name">
                        New password
                        <span className="pf-c-form__label-required" aria-hidden="true">*</span>
                    </label>
                    <input className="pf-c-form-control" required type="text" id="help-text-simple-form-name" name="help-text-simple-form-name" aria-describedby="help-text-simple-form-name-helper" />
                </div>
                <div className="pf-c-form__group">
                    <label className="pf-c-form__label" htmlFor="help-text-simple-form-name">
                        New password again
                        <span className="pf-c-form__label-required" aria-hidden="true">*</span>
                    </label>
                    <input className="pf-c-form-control" required type="text" id="help-text-simple-form-name" name="help-text-simple-form-name" aria-describedby="help-text-simple-form-name-helper" />
                </div>
                <div className="pf-c-form__group pf-m-action">
                    <div className="pf-c-form__actions">
                        <button className="pf-c-button pf-m-primary">
                            Change password
                        </button>
                    </div>
                </div>
            </form>
        </div>;
    }
}
