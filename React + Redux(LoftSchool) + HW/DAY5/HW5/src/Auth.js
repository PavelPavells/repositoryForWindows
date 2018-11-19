import React, {Component} from 'react';
import * as AuthAPI from './AuthorizeApi';
import {Redirect} from 'react-router-dom';
class Auth extends Component {
    state = {
        email : '',
        password : '',
        isWrongPasswordAndMail : false,
        isAuthorized : false,
    };
    handleSubmit = () => {
        const {email, password} = this.state;
        const isAuthorized = AuthAPI.authorizeUser(email, password);
        this.setState({isWrongPasswordAndMail : !isAuthorized, isAuthorized});
    };
    handleChange = event => {
        const {email, password} =this.state;
        this.setState({[name] : value});
    };
    render() {
        return(
            <div>
                {this.state.isAuthorized && <Redirect to="/"/>}
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="password"
                    placeholder="password"
                    onChange={this.handleChange}
                />
                <br/>
                {this.state.isWrongPasswordAndMail && (
                    <p className="error">Неверный пароль и/или почта</p>
                )}
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    };
};
export default Auth;