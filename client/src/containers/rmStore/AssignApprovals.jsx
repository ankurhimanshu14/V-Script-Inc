import React, {Component} from 'react';
import Input from '../../components/useInput';

export default class AssignApprovals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'approvals': '',
            steels: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    async handleSubmit(event) {
        event.preventDefault();

        const requestOptions = {
            credentials: 'include',
            mode: 'cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state),
        };
        console.log(this.state)
        const response = await fetch('http://localhost:5000/api/v1/private/steels/approvals', requestOptions)
        const data = await response.json();
        this.setState({steels: data});
    }
    async componentDidMount() {
        const requestOptions = {
            credentials: 'include'
        };
    
        const response = await fetch('http://localhost:5000/api/v1/private/items/listGRN', requestOptions)
        const data = await response.json();
        data.map(steel => {
            if(!steel.sentToLab) {
                this.setState({steels: data});
            } else {
                alert("No approvals of steel pending")
            }
        })
    }

    render() {
        console.log(this.state);
        const steels = Object.values(this.state.steels);
        return (
            <React.Fragment>
                <Input 
                id = "approvals"
                name="approvals"
                type="text"
                value={this.state.approvals}
                onChange={this.handleInputChange}
                placeholder="Approved Components"
                required
                />

                <Input
                id="submit-btn"
                name="submit"
                feature="block"
                variant="primary"
                value="Submit"
                type="button"
                onClick={this.handleSubmit}
                />

                <h2>Steels Register</h2>
                <div className="container">
                <div className="row">
                    <div>
                    <div className="table-responsive" data-pattern="priority-columns">
                        <table id="parts" className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th priority="1">GRN</th>
                            <th priority="2">Challan No</th>
                            <th priority="3">Challan Date</th>
                            <th priority="4">Item Code</th>
                            <th priority="5">Item Description</th>
                            <th priority="6">Item Header</th>
                            <th priority="7">Approval Status</th>
                            <th priority="8">Quantity</th>
                        </tr>
                    </thead>   
                    <tbody>
                        {steels.map(steel => (
                        <tr key={steel._id}>
                                    <td>{steel.grNo}</td>
                                    <td>{steel.challanNo}</td>
                                    <td>{steel.challanDate}</td>
                                    <td>{steel.itemCode}</td>
                                    <td>{steel.itemDescription}</td>
                                    <td>{steel.itemHeader}</td>
                                    <td>{steel.sentToLab}</td>
                                    <td>{steel.quantity}</td>
                                </tr>
                                ))}
                        </tbody>
                    </table>
                    </div>
                    </div>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}