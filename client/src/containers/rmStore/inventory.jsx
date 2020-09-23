import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Components
import Table from '../../components/useTable';
import Input from '../../components/useInput';
import Button from '../../components/useButton';

export default class SteelInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
        steel: []
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let inventoryData = this.state;
    
    fetch('/api/v1/steels/inventory', {
        method: 'GET',
        body: JSON.stringify(inventoryData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json().then(inventory => {return this.state.inventoryData.map((steel, index) => {
        const { grNo, grade, section, heatNo, heatCode, availableQty, ...other } = steel;
    })})
    )
}

  handleClearForm = (e) => {
    e.preventDefault();
    this.setState({
        startDate: '',
        endDate: ''
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
          <h3>Steel Inventory</h3>
          <form className="container-fluid mt-1" onSubmit = {this.handleSubmit}>

            <Input
            inputType = {'date'}
            title = {'Start Date'}
            name = {'startDate'}
            value = {this.state.startDate}
            placeholder = {'Start Date'}
            handleChange = { this.handleInput }
            />

            <Input
            inputType = {'date'}
            title = {'End Date'}
            name = {'endDate'}
            value = {this.state.endDate}
            placeholder = {'End Date'}
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

          <Table />
      </React.Fragment>
    )}
}
