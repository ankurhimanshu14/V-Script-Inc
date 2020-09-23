import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Components
import Button from '../../components/useButton';
import Input from '../../components/useInput';

export default class SteelRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        challanNo: '',
        challanDate: '',
        grade: '',
        section: '',
        heatNo: '',
        heatCode: '',
        jominyValue: '',
        approvals: '',
        receivedQty: '',
        heatStatus: true
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let steelData = this.state;
    
    fetch('/api/v1/steels/registration', {
        method: 'POST',
        body: JSON.stringify(steelData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json().then(steels => {console.log(steels);this.setState({steels})}))
  }

  handleClearForm = (e) => {
    e.preventDefault();
    this.setState({
        challanNo: '',
        challanDate: '',
        grade: '',
        section: '',
        heatNo: '',
        heatCode: '',
        jominyValue: '',
        approvals: '',
        receivedQty: '',
        heatStatus: true
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
          <h3>Steel Incoming Register</h3>
          <form className="container-fluid mt-1" onSubmit = {this.handleSubmit}>

            <Input
            inputType = {'number'}
            title = {'Challan No'}
            name = {'challanNo'}
            value = {this.state.challanNo}
            placeholder = {'Challan No'}
            handleChange = { this.handleInput }
            />

            <Input
            inputType = {'date'}
            title = {'Challan Date'}
            name = {'challanDate'}
            value = {this.state.challanDate}
            placeholder = {'Challan Date'}
            handleChange = { this.handleInput }
            />
            
            <Input
            inputType = {'text'}
            title = {'Material Grade'}
            name = {'grade'}
            value = {this.state.grade}
            placeholder = {'Material Grade'}
            handleChange = { this.handleInput }
            />

            <Input
            inputType = {'text'}
            title = {'Section'}
            name = {'section'}
            value = {this.state.section}
            placeholder = {'Section'}
            handleChange = { this.handleInput }
            />

            <Input
            inputType = {'text'}
            title = {'Heat No'}
            name = {'heatNo'}
            value = {this.state.heatNo}
            placeholder = {'Heat No'}
            handleChange = { this.handleInput }
            />

            <Input
            inputType = {'text'}
            title = {'Heat Code'}
            name = {'heatCode'}
            value = {this.state.heatCode}
            placeholder = {'Heat Code'}
            handleChange = { this.handleInput }
            />

            <Input
            inputType = {'text'}
            title = {'Jominy Value'}
            name = {'jominyValue'}
            value = {this.state.jominyValue}
            placeholder = {'Jominy Value'}
            handleChange = { this.handleInput }
            />

            <Input
            inputType = {'text'}
            title = {'Approved Components'}
            name = {'approvals'}
            value = {this.state.approvals}
            placeholder = {'Approved Components'}
            handleChange = { this.handleInput }
            />

            <Input
            inputType = {'number'}
            title = {'Received Quantity'}
            name = {'receivedQty'}
            value = {this.state.receivedQty}
            placeholder = {'Received Quantity'}
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
