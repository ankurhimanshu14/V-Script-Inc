import React , { Component } from 'react';

import Input from '../../components/useInput';
import Button from '../../components/useButton';

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

    handleSubmit(event) {
        if (event) {
            event.preventDefault();
        }
    }
    
    handleInputChange(event) {
        event.persist();
    }

    async componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        };
        const response = await fetch('http://localhost:5000/api/v1/steels/inventory', requestOptions)
        const data = await response.json();
        this.setState({data});
    }

    render() {
        return(
            <React.Fragment>
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Steel Register</h3>
                    <form className="form-group" method="GET" action="/api/v1/steels/inventory">
                        <Input 
                        id = "startDate"
                        name="startDate"
                        type="Date"
                        onChange={this.handleInputChange}
                        placeholder="Start Date"
                        required
                        />
    
                        <Input 
                        id = "endData"
                        name="endData"
                        type="Date"
                        onChange={this.handleInputChange}
                        placeholder="End Date"
                        required
                        />
    
                        <Button
                        variant="primary"
                        type="submit"
                        onclick={this.handleSubmit}
                        title="Submit"/>
                    </form>
                </div>
                <table id="students" className="table table-hover">
                    <tr className="table-primary">
                        <th scope="col">
                            GRN
                        </th>
                        <th scope="col">
                            Grade
                        </th>
                        <th scope="col">
                            Section
                        </th>
                        <th scope="col">
                            Heat No.
                        </th>
                        <th scope="col">
                            Heat Code
                        </th>
                        <th scope="col">
                            Available Quantity(KGS)
                        </th>
                    </tr>
                    <tr>
                        <tbody>
                        {this.state.steels.map((steel, index) => {
                            const { grNo, grade, section, heatNo, heatCode, availableQty} = steel;
                            return (
                                <tr key={grNo}>
                                <th  scope="row">{grNo}</th>
                                <td>{grade}</td>
                                <td>{section}</td>
                                <td>{heatNo}</td>
                                <td>{heatCode}</td>
                                <td>{availableQty}</td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </tr>
                </table>
            </React.Fragment>
        )
    }
}