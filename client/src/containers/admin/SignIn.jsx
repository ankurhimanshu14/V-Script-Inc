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
            'isAuthenticated': false
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
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer refreshToken',
            },
            body: JSON.stringify()
        };
        
        await fetch('http://localhost:5000/api/v1/users/login', requestOptions)
        .then(res => {
            if(!res.ok) {
                throw new Error('Network response was not OK.');
            } return res.blob();
        })
        .then(myBlob => {
            this.isAuthenticated = this.setState(true);
            console.log(this);
            this.setState();
        })
        .catch(err => {
            console.log('There has been a problem with your fetch operation: ' + err);
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Sign In Here</h3>
                    <form className="form-group" method="POST" action="http://localhost:5000/api/v1/users/login">
                                             
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
                        variant="primary"
                        type="submit"
                        onclick={this.handleSubmit}
                        title="Submit"/>

                    </form>
                    <Link to="/users/registration"><p className="float-right">Doesn't have an account?</p></Link>
                </div>
            </React.Fragment>
        )
    }
}