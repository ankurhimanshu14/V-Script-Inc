import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/useInput';
import Button from '../../components/useButton';

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            'username': '',
            'password': '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event) {
        this.setState({
            username: event.target.username,
            password: event.target.password
        })
    }

    async handleSubmit(event) {
        if(event) {
            event.preventDefault();
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer refreshToken',
                },
                body: JSON.stringify()
            };
            const response = await fetch('http://localhost:5000/api/v1/users/login', requestOptions)
            console.log(response);
            const data = await response.json();
            console.log(data.msg);
            console.log(this.state);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Sign In Here</h3>
                    <form className="form-group" method='POST' onSubmit={this.handleSubmit}>
                                             
                        <Input 
                        id = "username"
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="Username"
                        required
                        />
                        
                        <Input 
                        id = "password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        placeholder="Password"
                        required
                        />
    
                        <Button
                        feature="block"
                        variant="primary"
                        type="submit"
                        title="Submit"/>

                    </form>
                    <Link to="/users/registration"><p className="float-right">Doesn't have an account?</p></Link>
                    <Link to="/users/forgotpassword"><p className="float-left">Forgot Password?</p></Link>
                </div>
            </React.Fragment>
        )
    }
}