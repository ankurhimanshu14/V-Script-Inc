import React, {Component} from 'react';
import Checkbox from '../../components/useCheckbox'

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
    }

    async componentDidMount() {
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
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
            
            <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                            <div className="col-10 offset-1 col-lg-12 offset-lg-0 div-wrapper d-flex justify-content-center align-items-center">
                                <table className="myTable">
                                    <thead>
                                        <tr>
                                            <th scope="col">Item Code</th>
                                            <th scope="col">Part Name</th>
                                            <th scope="col">Raw Material</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Cut Weight (KGS)</th>
                                            <th scope="col">Standard Weight (KGS)</th>
                                            <th scope="col">Select</th>
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
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>





                <div className="col-10 offset-1 col-lg-12 offset-lg-0 div-wrapper d-flex justify-content-center align-items-center">
                    <table className="myTable">
                        <thead>
                            <tr>
                                <th scope="col">Item Code</th>
                                <th scope="col">Part Name</th>
                                <th scope="col">Raw Material</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Cut Weight (KGS)</th>
                                <th scope="col">Standard Weight (KGS)</th>
                                <th scope="col">Select</th>
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
            </React.Fragment>
        )
    }
}