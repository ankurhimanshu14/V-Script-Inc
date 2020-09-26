import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/useInput';
import Button from '../../components/useButton';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'username': '',
            'password': ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleSubmit(event) {
        if (event) {
            event.preventDefault();
        }
    }
    
    handleInputChange(event) {
        event.persist();
    }

    async componentDidMount(username, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            Headers: {
                'username': username,
                'password': password
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

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Sign Up Here</h3>
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