import React, {Component} from 'react';
import Input from '../../components/useInput';

export default class PartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    async handleSubmit(event) {
        event.preventDefault();

        const requestOptions = {
            credentials: 'include'
        };

        const response = await fetch('http://localhost:5000/api/v1/private/parts/partlist', requestOptions)
        const data = await response.json();
        console.log(data);
        this.setState({parts: data});
    }

    render() {
        const parts = Object.values(this.state.parts);
        return (
            <React.Fragment>
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Part List</h3>
                    <Input
                        id="submit-btn"
                        name="submit"
                        feature="block"
                        variant="primary"
                        type="button"
                        onClick={this.handleSubmit}
                        />
                </div>
                <table id="parts" className="table table-hover">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">Item Code</th>
                            <th scope="col">Part Name</th>
                            <th scope="col">Raw Material</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Cut Weight (KGS)</th>
                            <th scope="col">Standard Weight (KGS)</th>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}