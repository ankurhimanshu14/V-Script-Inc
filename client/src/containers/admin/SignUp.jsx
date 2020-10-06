import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/useInput';
import Checkbox from '../../components/useCheckbox';

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
        this.handleCheckBox = this.handleCheckBox.bind(this);
    };

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleCheckBox(event) {
        this.setState({[event.target.acceptTerms]: true })
    }

    async handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'employeeId': this.state.employeeId,
                'email': this.state.email,
                'username': this.state.username,
                'password': this.state.password,
                'role': this.state.role,
                'authority': this.state.authority,
                'acceptTerms': this.state.acceptTerms
            })
        };
        await fetch('http://localhost:5000/api/v1/privateusers/registration', requestOptions)
        .then(res => res.json())
        .then(data => {
            alert(data);
        })
        .catch(err => {
            alert('There has been a problem');
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="signInBox col-md-3 ml-auto mt-5">
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

                        <Checkbox
                        name="acceptTerms"
                        title="Accept Terms and Conditions"
                        value={this.state.acceptTerms}
                        onChange={this.handleCheckBox}
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
                    <Link to="/"><p className="float-right">Already have an account?</p></Link>
                </div>
            </React.Fragment>
        )
    }
}