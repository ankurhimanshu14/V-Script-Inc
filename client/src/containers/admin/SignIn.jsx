import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/useInput';

export default class NewSteelRegistration extends Component {
    constructor() {
        super();
        this.state = {
            'username': '',
            'password': '',
            'status': false
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
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer refreshToken',
            },
            withCredentials: true,
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        };
        
        fetch('http://localhost:5000/api/v1/users/login', requestOptions)
        .then(res => res.json())
        .then(data => {
            this.setState({status: !this.state.status});
            if(data.msg === "Authenticated" && data.token && this.state.status) {
                alert(data.msg)
                document.cookie = `accessToken=${data.token}`;
            }

        })
        .catch(err => {
            alert('There has been a problem with your fetch operation: ' + err);
        });
        console.log(this.state)
    }

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Sign In Here</h3>
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
