import React, {Component} from 'react';
import Input from '../../components/useInput';
import Button from '../../components/useButton';

export default class PartList extends Component {
    constructor() {
        super();
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
    
    handleInputChange(event) {
        this.setState({
            challanNo: event.target.challanNo,
            challanDate: event.target.challanDate,
            grade: event.target.grade,
            section: event.target.section,
            heatNo: event.target.heatNo,
            heatCode: event.target.heatCode,
            jominyValue: event.target.jominyValue,
            approvals: event.target.approvals,
            receivedQty: event.target.receivedQty,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:5000/api/v1/steels/registration')
        .then(res => res.json())
        .then(data => console.log('New Steel Added: ' + data))
        .catch(err => console.log('Error: ' + err))
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