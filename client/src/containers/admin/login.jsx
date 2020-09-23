import React, { useState } from "react";
import { Redirect } from 'react-router-dom';

import Input from '../../components/useInput';
import Button from '../../components/useButton';
import { useAuth } from '../auth';

export default function UserLoginForm() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        let userData = this.state;
        
        fetch('/api/v1/steels/registration', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': JSON.stringify(userData.username),
                'password': JSON.stringify(userData.password)
            }
        })
        .then(res => res.json().then(result => {
            if (result.status === 200) {
            setAuthTokens(result.data);
            setLoggedIn(true);
          } else {
            setIsError(true);
          }
        }))
        .catch(e => {
          setIsError(true);
        })

        if (isLoggedIn) {
            return <Redirect to="/" />;
        }
    }

    function handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => ({ [name]: value }))
    }    

    return (
        <React.Fragment>
            <h3>Sign In</h3>
            <form className="container-fluid mt-1" onSubmit = {this.handleSubmit}>
                <div className="form-group">
                    <Input
                    inputType = {'text'}
                    title = {'Username'}
                    name = {'username'}
                    value = {this.state.username}
                    placeholder = {'Username'}
                    handleChange = { this.handleInput }
                    />
                </div>

                <div className="form-group">
                    <Input
                    inputType = {'password'}
                    title = {'Password'}
                    name = {'password'}
                    value = {this.state.password}
                    placeholder = {'Password'}
                    handleChange = { this.handleInput }
                    />
                </div>

                <Button
                action = {this.handleSubmit}
                type= {'primary'}
                title = {'Submit'}
                />
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </React.Fragment>
    );
}