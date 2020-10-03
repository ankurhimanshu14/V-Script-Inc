import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/useInput';

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

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        };
        
        fetch('http://localhost:5000/api/v1/public/users/login', requestOptions)
        .then(res => res.json())
        .then(data => {
            alert(data.msg)
            if(data.msg === "Authenticated" && data.token) {
                document.cookie = `refreshToken=${data.token}`;
            }

        })
        .catch(err => {
            alert('There has been a problem');
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="signInBox col-md-3 ml-auto mt-5">
                    <h3 className="text-center">Sign In</h3>
                    <br/>

                    <form className="form-group">
                                             
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
    
                        <Input
                        id="submit-btn"
                        name="submit"
                        feature="block"
                        variant="primary"
                        value="Submit"
                        type="button"
                        onClick={this.handleSubmit}
                        />

                    </form>
                    <Link to="/users/registration"><p className="float-right">Doesn't have an account?</p></Link>
                    <Link to="/users/forgotpassword"><p className="float-left">Forgot Password?</p></Link>
                </div>
            </React.Fragment>
        )
    }
}
