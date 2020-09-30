import React, {Component} from 'react';
import Input from '../../components/useInput';
import Button from '../../components/useButton';

export default class NewSteel extends Component {
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
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer refreshToken'
            },
            withCredentials: true
        };
                
        fetch('http://localhost:5000/api/v1/steels/registration', requestOptions)
        .then(res => res.json())
        .then(data => {
            alert(('New Steel Added: ' + data))
        })
        .catch(err => {
            alert('There has been a problem with your fetch operation: ' + err);
        });
        this.setState();
    }

    render() {
        return (
            <React.Fragment>
                <div className="card m-5">
                    <h3 className="text-center">Steel Register</h3>
                    <form className="form-group">
                    <table id="steels" className="table table-hover">
                    <thead>
                    <tr className="table m-2">
                        <th scope="col">Challan No</th>
                        <th scope="col">Challan Date</th>
                        <th scope="col">Material Grade</th>
                        <th scope="col">Section</th>
                        <th scope="col">Heat No.</th>
                        <th scope="col">Heat Code</th>
                        <th scope="col">Jominy Value</th>
                        <th scope="col">Approved Components</th>
                        <th scope="col">Received Quantity(KGS)</th>
                        <th scope="col">Submit</th>
                        <th scope="col">Reset</th>
                    </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Input 
                                    id = "challanNo"
                                    name="challanNo"
                                    type="number"
                                    value={this.state.challanNo}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </td>
                                <td>
                                    <Input 
                                    id = "challanDate"
                                    name="challanDate"
                                    type="Date"
                                    value={this.state.challanDate}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </td>
                                <td>
                                    <Input 
                                    id = "grade"
                                    name="grade"
                                    type="text"
                                    value={this.state.grade}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </td>
                                <td>
                                    <Input 
                                    id = "section"
                                    name="section"
                                    type="text"
                                    value={this.state.section}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </td>
                                <td>
                                    <Input 
                                    id = "heatNo"
                                    name="heatNo"
                                    type="text"
                                    value={this.state.heatNo}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </td>
                                <td>
                                    <Input 
                                    id = "heatCode"
                                    name="heatCode"
                                    type="text"
                                    value={this.state.heatCode}
                                    onChange={this.handleInputChange}
                                    />
                                </td>
                                <td>
                                    <Input 
                                    id = "jominyValue"
                                    name="jominyValue"
                                    type="text"
                                    value={this.state.jominyValue}
                                    onChange={this.handleInputChange}
                                    />
                                </td>
                                <td>
                                    <Input 
                                    id = "approvals"
                                    name="approvals"
                                    type="text"
                                    value={this.state.approvals}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </td>
                                <td>
                                    <Input 
                                    id = "receivedQty"
                                    name="receivedQty"
                                    type="number"
                                    value={this.state.receivedQty}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </td>
                                <td>
                                    <Input
                                    id="submit-btn"
                                    name="submit"
                                    feature="block"
                                    variant="primary"
                                    value="Submit"
                                    type="button"
                                    onClick={this.handleSubmit}
                                    />
                                </td>
                                <td>
                                    <Button
                                    variant="secondary"
                                    type="reset"
                                    title="Reset"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}