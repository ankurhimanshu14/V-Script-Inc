import React, {Component} from 'react';
import Input from '../../components/useInput';
import Button from '../../components/useButton';

export default class NewSteel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'challanNo': '',
            'challanDate': '',
            'grade': '',
            'section': '',
            'heatNo': '',
            'heatCode': '',
            'jominyValue': '',
            'approvals': '',
            'receivedQty': ''
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
        const response = await fetch('http://localhost:5000/api/v1/steels/registration', requestOptions)
        const data = response.json();
        this.setState({
            'challanNo': data.challanNo,
            'challanDate': data.challanDate,
            'grade': data.grade,
            'section': data.section,
            'heatNo': data.heatNo,
            'heatCode': data.heatCode,
            'jominyValue': data.jominyValue,
            'approvals': data.approvals,
            'receivedQty': data.receivedQty
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Steel Register</h3>
                    <form className="form-group" method="POST" action="/api/v1/steels/registration">
                        <Input 
                        id = "challanNo"
                        name="challanNo"
                        type="number"
                        onChange={this.handleInputChange}
                        placeholder="Challan No"
                        required
                        />
    
                        <Input 
                        id = "challanDate"
                        name="challanDate"
                        type="Date"
                        onChange={this.handleInputChange}
                        placeholder="Challan Date"
                        required
                        />
                        
                        <Input 
                        id = "grade"
                        name="grade"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Material Grade"
                        required
                        />
                        
                        <Input 
                        id = "section"
                        name="section"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Section"
                        required
                        />
                        
                        <Input 
                        id = "heatNo"
                        name="heatNo"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Heat No"
                        required
                        />

                        <Input 
                        id = "heatCode"
                        name="heatCode"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Heat Code"
                        />
            
                        <Input 
                        id = "jominyValue"
                        name="jominyValue"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Jominy Value"
                        />

                        <Input 
                        id = "approvals"
                        name="approvals"
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Approved Components"
                        required
                        />

                        <Input 
                        id = "receivedQty"
                        name="receivedQty"
                        type="number"
                        onChange={this.handleInputChange}
                        placeholder="Received Quantity"
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