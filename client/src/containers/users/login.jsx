import React, { Component } from "react";

import Input from '../../components/useInput';
import Button from '../../components/useButton';

export default class UserLoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let userData = this.state;
        
        fetch('/api/v1/users/login', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'username': JSON.stringify(userData.username),
                'password': JSON.stringify(userData.password)
            }
        })
        .then(res => res.json().then(users => this.setState({users})))
    }

    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => ({ [name]: value }))
    }

    render() {
        return (
            <form>
                <h3>Sign In</h3>

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
        );
    }
}