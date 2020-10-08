import React, {Component} from 'react';
import Input from '../../components/useInput';

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
        this.setState(this.state);
        const data = this.state;

        const requestOptions = {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(data)
        };
        console.log('------------reqOPtions-------------------', requestOptions.body);
        fetch('http://localhost:5000/api/v1/private/steels/registration', requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result) {
                this.setState(result)
                alert(result.data.grNo);
            } else {
                alert('Saving error');
            }
        })
        .catch(err => {
            alert('There has been a problem with your fetch operation: ' + err);
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="card m-5">
                    <h3 className="text-center">Steel Register</h3>
                    <form className="form-group">
                    <table>
                        <thead className="text-center">
                            <tr>
                                <th scope="col"><p>Challan No</p></th>
                                <th scope="col"><p>Challan Date</p></th>
                                <th scope="col"><p>Material Grade</p></th>
                                <th scope="col"><p>Section</p></th>
                                <th scope="col"><p>Heat No.</p></th>
                                <th scope="col"><p>Heat Code</p></th>
                                <th scope="col"><p>Jominy Value</p></th>
                                <th scope="col"><p>Approved Components</p></th>
                                <th scope="col"><p>Received Quantity(KGS)</p></th>
                                <th scope="col"><p>Submit</p></th>
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
                            </tr>
                        </tbody>
                    </table>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}