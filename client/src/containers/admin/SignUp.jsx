import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/useInput';
import Button from '../../components/useButton';
import Navbar from '../../components/useNavbar';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'employeeId': '',
            'email': '',
            'username': '',
            'password': '',
            'role': '',
            'authority': '',
            'acceptTerms': 0
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

    async componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        };
        const response = await fetch('http://localhost:5000/api/v1/users/registration', requestOptions)
        const data = response.json();
        this.setState({
            'employeeId': data.employeeId,
            'email': data.email,
            'username': data.username,
            'password': data.password,
            'role': data.role,
            'acceptTerms': {[data.accepTerms]: 1}})
    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                title="Registration" />
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Sign Up Here</h3>
                    <form className="form-group" method="POST" action="/api/v1/users/registration">
                        <Input 
                        id = "employeeId"
                        name="employeeId"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Employee ID"
                        required
                        />
    
                        <Input 
                        id = "email"
                        name="email"
                        type="email"
                        onChange={this.handleInputChange}
                        placeholder="Email"
                        required
                        />
                        
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
                        id = "role"
                        name="role"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Role"
                        required
                        />
            
                        <Input 
                        id = "authority"
                        name="authority"
                        type="text"
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