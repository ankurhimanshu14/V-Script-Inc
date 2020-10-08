import React, {Component} from 'react';
import Checkbox from '../../components/useCheckbox';

export default class PartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: []
        };
    };
    
    async componentDidMount() {
        const requestOptions = {
            credentials: 'include'
        };

        const response = await fetch('http://localhost:5000/api/v1/private/parts/partlist', requestOptions)
        const data = await response.json();
        this.setState({parts: data});
    }

    render() {
        const parts = Object.values(this.state.parts);
        return (
            <React.Fragment>
                <h2>Parts Register</h2>
                <div className="container">
                <div className="row">
                    <div>
                    <div className="table-responsive" data-pattern="priority-columns">
                        <table id="parts" className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th priority="1">Item Code</th>
                            <th priority="2">Part Name</th>
                            <th priority="3">Raw Material</th>
                            <th priority="4">Customer Name</th>
                            <th priority="5">Cut Weight (KGS)</th>
                            <th priority="6">Standard Weight (KGS)</th>
                            <th priority="7">Select</th>
                        </tr>
                    </thead>   
                    <tbody>
                        {parts.map(part => (
                        <tr key={part._id}>
                                    <td>{part.itemCode}</td>
                                    <td>{part.partName}</td>
                                    <td>{part.rawMaterial}</td>
                                    <td>{part.customerName}</td>
                                    <td>{part.cutWeight}</td>
                                    <td>{part.stdWeight}</td>
                                    <td>{<Checkbox name="partNo" value="partNo" placeholder="Select" />}</td>
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