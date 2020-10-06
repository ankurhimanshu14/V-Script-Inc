import React , { Component } from 'react';
// import Moment from 'moment';
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

    async handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            credentials: 'include',
        };
        const result = await fetch('http://localhost:5000/api/v1/private/steels/inventory', requestOptions)
        .then(response => {console.log(response); return response.json()})
        .then(data => { console.log(data); return data })
        .then(err => alert(err))
        this.setState({steels: result});
    }
    
    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const steels = Object.values(this.state.steels);
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
                <table id="steels" className="table table-hover">
                    <thead>
                    <tr className="table-primary">
                        <th scope="col">Challan No</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Section</th>
                        <th scope="col">Heat No.</th>
                        <th scope="col">Heat Code</th>
                        <th scope="col">Available Quantity(KGS)</th>
                    </tr>
                    </thead>
                        <tbody>
                            {steels.map((steel) => (
                                <tr key={steel.challanNo}>
                                    <td>{steel.challanNo}</td>
                                    <td>{steel.grade}</td>
                                    <td>{steel.section}</td>
                                    <td>{steel.heatNo}</td>
                                    <td>{steel.heatCode}</td>
                                    <td>{steel.availableQty}</td>
                                </tr>
                                )
                            )}
                        </tbody>
                </table>
            </React.Fragment>
        )
    }
}