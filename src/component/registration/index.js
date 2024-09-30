import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';
import { register } from '../../services/api';

class RegistrationForm extends Component {
    state = {
        name: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country:''
    };

    onChangename = (event) => {
        this.setState({ name: event.target.value });
    };

    onChangeAddress = (event) => {
        this.setState({ address: event.target.value });
    };
    onChangeCity = (event) => {
        this.setState({ city: event.target.value });
    };
    onChangeState= (event) => {
        this.setState({ state: event.target.value });
    };
    onChangezipCode = (event) => {
        this.setState({ zipCode: event.target.value });
    };
    onChangeCountry = (event) => {
        this.setState({ country: event.target.value });
    };
  

    onSubmitSuccess = (jwtToken) => {
        const { history } = this.props;

        Cookies.set('jwt_token', jwtToken, {
            expires: 30,
            path: '/',
        });
        history.replace('/');
    };

    onSubmitFailure = (errorMsg) => {
        this.setState({ showSubmitError: true, errorMsg });
    };

    submitForm = async (event) => {
        event.preventDefault();
        const { name, address, city, state, zipCode, country } = this.state;
        const userDetails = { name, address, city, state, zipCode, country };

            let data;
            try {
                data = await register(userDetails);
                if (data.ok) {
                    localStorage.setItem('currentUser', name);
                    this.onSubmitSuccess(data.token);
                } else {
                    this.onSubmitFailure(data.error);
                }
            } catch (e) {
                console.log(data);
                this.onSubmitFailure('Login failed:', e);
            }
        


    };

    renderAddressField = () => {
        const { address } = this.state;
        return (
            <>
                <label className="input-label" htmlFor="address">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    className="password-input-field"
                    value={address}
                    onChange={this.onChangeAddress}
                    placeholder="Address"
                />
            </>
        );
    };

    renderCityField = () => {
        const { city } = this.state;
        return (
            <>
                <label className="input-label" htmlFor="city">
                    City
                </label>
                <input
                    type="text"
                    id="city"
                    className="password-input-field"
                    value={city}
                    onChange={this.onChangeCity}
                    placeholder="City"
                />
            </>
        );
    };

    renderStateField = () => {
        const { state } = this.state;
        return (
            <>
                <label className="input-label" htmlFor="state">
                    State
                </label>
                <input
                    type='text'
                    id="state"
                    className="password-input-field"
                    value={state}
                    onChange={this.onChangeState}
                    placeholder="State"
                />
            </>
        );
    };

    renderzipCodeField = () => {
        const { zipCode } = this.state;
        return (
            <>
                <label className="input-label" htmlFor="zipCode">
                    Zip Code
                </label>
                <input
                    type='number'
                    id="zipCode"
                    className="password-input-field"
                    value={zipCode}
                    onChange={this.onChangezipCode}
                    placeholder="Zip Code"
                />
            </>
        );
    };
    renderCountryField = () => {
        const { country } = this.state;
        return (
            <>
                <label className="input-label" htmlFor="country">
                Country
                </label>
                <input
                    type='text'
                    id="country"
                    className="password-input-field"
                    value={country}
                    onChange={this.onChangeCountry}
                    placeholder="Country"
                />
            </>
        );
    };

    renderNameField = () => {
        const { name } = this.state;
        return (
            <>
                <label className="input-label" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="name-input-field"
                    value={name}
                    onChange={this.onChangename}
                    placeholder="Name"
                />
            </>
        );
    };



    render() {
        const { showSubmitError, errorMsg } = this.state;
        
        return (
            <div className="login-form-container">
                
                <form className="form-container" onSubmit={this.submitForm}>
                   
                    <div className="input-container">{this.renderNameField()}</div>
                    <div className="input-container">{this.renderAddressField()}</div>
                    <div className="input-container">{this.renderCityField()}</div>
                    <div className="input-container">{this.renderStateField()}</div>
                    <div className="input-container">{this.renderzipCodeField()}</div>
                    <div className="input-container">{this.renderCountryField()}</div>

                    <button type="submit" className="login-button">
                        Register
                    </button>

                    {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                    <Link to='/' className="link">
                        <button className="account-register">
                            Click here to View Data
                        </button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;