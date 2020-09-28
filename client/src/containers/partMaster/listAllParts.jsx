import React, {Component} from 'react';
import Button from '../../components/useButton';

export default class PartList extends Component {
    constructor(props) {
        super(props);
        this.state = "";
    };

    async componentDidMount() {
        const res = await fetch('http://localhost:5000/api/v1/parts/partList')
        const parts = await res.json()
        this.setState(parts)
    }

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron mt-5">
                    <h3 className="text-center">Part List</h3>
                    <form className="form-group" method="GET" action="http://localhost:5000/api/v1/parts/partList">
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