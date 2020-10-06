import React, {Component} from 'react';
import Input from '../../components/useInput';

export default class Cutting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'partNo': '',
            'grade': '',
            'section': '',
            'heatNo': '',
            'heatCode': '',
            'cutLength': '',
            'cutWeight': '',
            'cuttingQuantity': '',
            'totalWeight': ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer refreshToken'
        //     },
        //     withCredentials: true
        // };
                
        // fetch('http://localhost:5000/api/v1/private/production/cutting', requestOptions)
        // .then(res => res.json())
        // .then(data => {
        //     alert(('New Steel Added: ' + data))
        // })
        // .catch(err => {
        //     alert('There has been a problem with your fetch operation: ' + err);
        // });
        // this.setState();
    }

    render() {
        return (
            <>
            <div className="card m-5 ml-2 text-center">
                    <h3>Cutting Requisition Slip cum Cutting Approval</h3>
                    <form className="form-group ml-5">
                    <table>
                        <thead className="text-center">
                            <tr>
                                <th scope="col"><p>Part No.</p></th>
                                <th scope="col"><p>Grade</p></th>
                                <th scope="col"><p>Section</p></th>
                                <th scope="col"><p>Heat No.</p></th>
                                <th scope="col"><p>Heat Code</p></th>
                                <th scope="col"><p>Cut Length (mm)</p></th>
                                <th scope="col"><p>Cut Weight (Kgs)</p></th>
                                <th scope="col"><p>Cutting Quantity (Nos)</p></th>
                                <th scope="col"><p>Total Weight (Kgs)</p></th>
                                <th scope="col"><p>Submit</p></th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>
                                    <Input 
                                    id = "partNo"
                                    name="partNo"
                                    type="text"
                                    value={this.state.partNo}
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
                                    id = "cutLength"
                                    name="cutLength"
                                    type="number"
                                    value={this.state.cutLength}
                                    onChange={this.handleInputChange}
                                    />
                                </td>
                                <td>
                                    <Input 
                                    id = "cutWeight"
                                    name="cutWeight"
                                    type="number"
                                    value={this.state.cutWeight}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </td>
                                <td>
                                    <Input 
                                    id = "cuttingQuantity"
                                    name="cuttingQuantity"
                                    type="number"
                                    value={this.state.cuttingQuantity}
                                    onChange={this.handleInputChange}
                                    required
                                    />
                                </td>
                                <td>
                                    {Math.floor(this.state.cutWeight * this.state.cuttingQuantity)}
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
            </>

        )
    }
}