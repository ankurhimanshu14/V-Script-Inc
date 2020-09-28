import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/useInput';
import Button from '../../components/useButton';
import Navbar from '../../components/useNavbar';

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            'employeeId': '',
            'email': '',
            'username': '',
            'password': '',
            'role': '',
            'authority': '',
            'acceptTerms': false
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
                'Authorization': 'Bearer refreshToken',
            },
            body: JSON.stringify()
        };
        await fetch('http://localhost:5000/api/v1/users/registration', requestOptions)
        .then(res => res.json())
        .then(data => console.log('Data: '+ data))
        .catch(err => console.log(err));
    }
    
    handleInputChange(event) {
        this.setState({
            'employeeId': event.target.employeeId,
            'email': event.target.email,
            'username': event.target.username,
            'password': event.target.password,
            'role': event.target.role,
            'authority': event.target.authority,
            'acceptTerms': true
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                title="Registration" />
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Sign Up Here</h3>
                    <form className="form-group" method="POST">
                        <Input 
                        id = "employeeId"
                        name="employeeId"
                        type="text"
                        value={this.state.employeeId}
                        onChange={this.handleInputChange}
                        placeholder="Employee ID"
                        required
                        />
    
                        <Input 
                        id = "email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder="Email"
                        required
                        />
                        
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
                        id = "role"
                        name="role"
                        type="text"
                        value={this.state.role}
                        onChange={this.handleInputChange}
                        placeholder="Role"
                        required
                        />
            
                        <Input 
                        id = "authority"
                        name="authority"
                        type="text"
                        value={this.state.authority}
                        onChange={this.handleInputChange}
                        placeholder="Authority"
                        required
                        />
    
                        <Button
                        feature="block"
                        variant="primary"
                        type="submit"
                        onclick={this.handleSubmit}
                        title="Submit"/>
    
                        <Button
                        feature="block"
                        variant="secondary"
                        type="reset"
                        title="Reset"/>
                    </form>
                    <Link to="/"><p className="float-right">Already have an account?</p></Link>
                </div>
            </React.Fragment>
        )
    }
}