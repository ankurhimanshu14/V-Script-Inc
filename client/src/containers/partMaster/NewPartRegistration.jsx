import React, {Component} from 'react';
import Input from '../../components/useInput';
import Button from '../../components/useButton';

export default class NewPart extends Component {
    constructor() {
        super();
        this.state = {
            'poNo': '',
            'poDate': '',
            'itemCode': '',
            'partNo': '',
            'partName': '',
            'customerName': '',
            'rawMaterial': '',
            'stdWeight': '',
            'cutWeight': ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };
    
    handleInputChange(event) {
        this.setState({
            poNo: event.target.poNo,
            poDate: event.target.poDate,
            itemCode: event.target.itemCode,
            partNo: event.target.partNo,
            partName: event.target.partName,
            customerName: event.target.customerName,
            rawMaterial: event.target.rawMaterial,
            stdWeight: event.target.stdWeight,
            cutWeight: event.target.cutWeight,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            credentials: 'include',
            mode: 'cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state),
        };

        fetch('http://localhost:5000/api/v1/parts/registration', requestOptions)
        .then(res => res.json())
        .then(data => console.log('New Part Added: ' + data))
        .catch(err => console.log('Error: ' + err))
    }

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Part Register</h3>
                    <form className="form-group" method="POST" action="/api/v1/parts/registration">
                        <Input 
                        id = "poNo"
                        name="poNo"
                        type="number"
                        onChange={this.handleInputChange}
                        placeholder="PO No"
                        required
                        />
    
                        <Input 
                        id = "poDate"
                        name="poDate"
                        type="Date"
                        onChange={this.handleInputChange}
                        placeholder="PO Date"
                        required
                        />
                        
                        <Input 
                        id = "itemCode"
                        name="itemCode"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Item Code"
                        required
                        />
                        
                        <Input 
                        id = "partNo"
                        name="partNo"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Part No"
                        required
                        />
                        
                        <Input 
                        id = "partName"
                        name="partName"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Part Name"
                        required
                        />
                        
                        <Input 
                        id = "customerName"
                        name="customerName"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Customer Name"
                        />

                        <Input 
                        id = "rawMaterial"
                        name="rawMaterial"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Raw Material"
                        />

                        <Input 
                        id = "stdWeight"
                        name="stdWeight"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Standard Weight"
                        required
                        />

                        <Input 
                        id = "cutWeight"
                        name="cutWeight"
                        type="number"
                        onChange={this.handleInputChange}
                        placeholder="Cut Weight"
                        required
                        />
    
                        <Button
                        variant="primary"
                        type="submit"
                        onclick={this.handleSubmit}
                        title="Submit"/>
    
                        <Button
                        variant="secondary"
                        type="reset"
                        title="Reset"/>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}