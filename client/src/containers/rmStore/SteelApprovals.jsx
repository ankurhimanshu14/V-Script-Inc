import React, {Component} from 'react';

export default class SteelApprovals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            steels: []
        };
    };
    
    async componentDidMount() {
        console.log(this.state);
        const requestOptions = {
            credentials: 'include'
        };
        const response = await fetch('http://localhost:5000/api/v1/private/steels/pendingApprovals', requestOptions)
        const data = await response.json();
        this.setState({steels: data});
        console.log(this.state)
    }

    render() {
        const steels = Object.values(this.state.steels);
        return (
            <React.Fragment>
                <h2>Steels for Approvals</h2>
                <div className="container">
                <div className="row">
                    <div>
                    <div className="table-responsive" data-pattern="priority-columns">
                        <table id="parts" className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th priority="1">GRN</th>
                            <th priority="2">Item Code</th>
                            <th priority="3">Item Description</th>
                            <th priority="4">Item Header</th>
                            <th priority="5">Quantity (KGS)</th>
                            <th priority="6">Add Approved Components</th>
                        </tr>
                    </thead>   
                    <tbody>
                        {steels.map(steel => (
                        <tr key={steel._id}>
                                    <td>{steel.grNo}</td>
                                    <td>{steel.itemCode}</td>
                                    <td>{steel.itemDescription}</td>
                                    <td>{steel.itemHeader}</td>
                                    <td>{steel.quantity}</td>
                                    <td>{steel.sentToLab}</td>
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