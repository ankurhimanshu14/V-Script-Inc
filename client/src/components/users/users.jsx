import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Components
import Button from '../../_tools/useButton';
import Input from '../../_tools/useInput';

export default class UserRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        employeeId: '',
        email: '',
        username: ''
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
    .then(res => res.json().then(users => this.setState({users})
    ));
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
      acceptTerms: false
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
        <div className="jumbotron">
          <form className="container-fluid" onSubmit = {this.handleSubmit}>

            <Input
            inputType = {'text'}
            title = {'Employee ID'}
            name = {'employeeId'}
            value = {this.state.employeeId}
            placeholder = {'Enter your employee ID'}
            handleChange = { this.handleInput }
            />
            
            <Input
            inputType = {'email'}
            title = {'Email'}
            name = {'email'}
            value = {this.state.email}
            placeholder = {'Enter your email here'}
            handleChange = { this.handleInput }
            />

            <Input
            inputType = {'text'}
            title = {'Username'}
            name = {'username'}
            value = {this.state.username}
            placeholder = {'Enter your username here'}
            handleChange = { this.handleInput }
            />

            <Input
            inputType = {'password'}
            title = {'Password'}
            name = {'password'}
            value = {this.state.password}
            placeholder = {'Enter your password here'}
            handleChange = { this.handleInput }
            />
            
            <Input
            inputType = {'password'}
            title = {'Confirm Password'}
            name = {'confirmPassword'}
            value = {this.state.confirmPassword}
            placeholder = {'Enter your password again'}
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
        </div>
      </React.Fragment>
    )
  }
}