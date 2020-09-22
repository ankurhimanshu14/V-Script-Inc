import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Components
import Button from '../../components/useButton';
import Input from '../../components/useInput';

export default class UserRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        employeeId: '',
        email: '',
        username: '',
        role: '',
        acceptTerms: true,
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let userData = this.state;
    
    fetch('/api/v1/users/registration', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json().then(users => this.setState({users})))
  }

  handleClearForm = (e) => {
    e.preventDefault();
    this.setState({
      employeeId: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      role: '',
      acceptTerms: 'true'
    })
  }

  handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => ({ [name]: value }))
  }

  render() {
    return (
      <React.Fragment>
          <h3>Sign Up Form</h3>
          <form className="container-fluid mt-1" onSubmit = {this.handleSubmit}>

            <Input
            inputType = {'text'}
            title = {'Employee ID'}
            name = {'employeeId'}
            value = {this.state.employeeId}
            placeholder = {'Employee ID'}
            handleChange = { this.handleInput }
            />
            
            <Input
            inputType = {'email'}
            title = {'Email'}
            name = {'email'}
            value = {this.state.email}
            placeholder = {'Email'}
            handleChange = { this.handleInput }
            />

            <Input
            inputType = {'text'}
            title = {'Username'}
            name = {'username'}
            value = {this.state.username}
            placeholder = {'Username'}
            handleChange = { this.handleInput }
            />

            <Input
            inputType = {'password'}
            title = {'Password'}
            name = {'password'}
            value = {this.state.password}
            placeholder = {'Password'}
            handleChange = { this.handleInput }
            />
            
            <Input
            inputType = {'password'}
            title = {'Confirm Password'}
            name = {'confirmPassword'}
            value = {this.state.confirmPassword}
            placeholder = {'Confirm Password'}
            handleChange = { this.handleInput }
            />

            <Input
            inputType = {'text'}
            title = {'Role'}
            name = {'role'}
            value = {this.state.role}
            placeholder = {'Role'}
            handleChange = { this.handleInput }
            />

            <Button
            action = {this.handleSubmit}
            type= {'primary'}
            title = {'Submit'}
            />

            <Button
            action = {this.handleClearForm}
            type= {'secondary'}
            title = {'Reset'}
            />
          </form>
      </React.Fragment>
    )
  }
}