import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/useInput';
import Button from '../../components/useButton';
import Navbar from '../../components/useNavbar';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'username': '',
            'password': ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    async handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'username': event.target.username,
                'password': event.target.password
            },
            body: JSON.stringify()
        };
        const response = await fetch('http://localhost:5000/api/v1/users/login', requestOptions)
        const data = response.json();
        this.setState({
            'username': data.username,
            'password': data.password
        })
    }   

    handleInputChange(event) {
        if(this.confirmPassword === this.password) {
            this.setState({
                username: event.target.username,
                password: event.target.password
            })
        }
    }

    handleConfirmPassword(event) {

    }

    async componentDidMount(username, password) {
        
    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                title="Log In" />
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Forgot Password?</h3>
                    <form className="form-group" method="POST" action="/api/v1/users/login">
                                             
                        <Input 
                        id = "username"
                        name="username"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Username"
                        required
                        />
                        
                        <Input 
                        id = "password"
                        name="password"
                        type="password"
                        onChange={this.handleInputChange}
                        placeholder="Password"
                        required
                        />

                        <Input 
                        id = "confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={this.handleInputChange}
                        placeholder="Confirm Password"
                        required
                        />
    
                        <Button
                        feature="block"
                        variant="primary"
                        type="submit"
                        onclick={this.handleSubmit}
                        title="Submit"/>

                    </form>
                    <p className="float-right">Are you lost? Go back to <Link to="/">Log In</Link> page</p>
                </div>
            </React.Fragment>
        )
    }
}