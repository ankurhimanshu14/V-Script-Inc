import React, {Component} from 'react';
import Button from '../../components/useButton';

export default class PartList extends Component {
    constructor(props) {
        super(props);
        this.state = "";

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    async handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer refreshToken'
            }
        };
        
        const response = await fetch('http://localhost:5000/api/v1/parts/partList', requestOptions)
        const data = await response.json();
        console.log(data)
    }

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Part List</h3>
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        <Button
                        variant="primary"
                        type="submit"
                        title="Submit"/>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}