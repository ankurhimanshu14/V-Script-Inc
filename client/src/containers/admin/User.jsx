import React, {Component} from 'react';

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: false
        }

        this.handleStatus = this.handleStatus.bind(this);
    }

    handleStatus() {
        this.setState({status: !this.state.status})
    }

    render() {
        return(
            <div>
                <h3>
                    {this.props.username}
                </h3>    
            </div>
        )
    }
}