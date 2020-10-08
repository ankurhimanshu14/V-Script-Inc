import React , { Component } from 'react';
import Input from '../../components/useInput';

export default class SteelInventory extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            steels: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    async handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            credentials: 'include'
        };

        const response = await fetch('http://localhost:5000/api/v1/private/steels/inventory', requestOptions)
        const data = await response.json();
        this.setState({steels: data});
    }

    render() {
        const steels = Object.entries(this.state.steels);
        return(
            <React.Fragment>
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Steel Register</h3>
                    <form className="form-group">
                        <Input 
                        id = "startDate"
                        name="startDate"
                        type="Date"
                        value={this.state.startDate}
                        onChange={this.handleInputChange}
                        placeholder="Start Date"
                        required
                        />
    
                        <Input 
                        id = "endDate"
                        name="endDate"
                        type="Date"
                        value={this.state.endDate}
                        onChange={this.handleInputChange}
                        placeholder="End Date"
                        required
                        />
    
                        <Input
                        id="submit-btn"
                        name="submit"
                        feature="block"
                        variant="primary"
                        type="button"
                        onClick={this.handleSubmit}
                        />
                    </form>
                </div>
                <div className="container">
                <div className="row">
                    <div>
                    <div className="table-responsive" data-pattern="priority-columns">
                        <table summary="This table shows how to create responsive tables using RWD-Table-Patterns' functionality" className="table table-bordered table-hover">
                        <thead>
                        <tr className="table-primary">
                            <th priority="1">Material Grade</th>
                            <th priority="2">Section</th>
                            <th priority="3">Heat No</th>
                            <th priority="4">Heat Code</th>
                            <th priority="5">Available Quantity (KGS)</th>
                        </tr>
                    </thead>   
                    <tbody>
                        {steels.map(steel => (
                            <tr key={steel._id}>
                                <td>{steel.grade}</td>
                                <td>{steel.section}</td>
                                <td>{steel.heatNo}</td>
                                <td>{steel.heatCode}</td>
                                <td>{steel.availableQty}</td>
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