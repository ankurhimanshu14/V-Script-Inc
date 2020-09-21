import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('/api/v1/users/registration')
            .then(res => res.json())
            .then(users => this.setState({users}, () => {
                console.log('User registered...', users);
            }));
    }
    render() {
        return (
            <React.Fragment>
            <div>
                <form method="POST">
                <input type="text" name="username" id="username" placeholder="Enter username" />
                <input type="email" name="email" id="email" placeholder="Enter email here" />
                <input type="password" name="password" id="password" placeholder="Enter password here" />

                <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
            <div>
                <ul>
                    {this.state.users.map(users =>
                        <li key = {users.username}>{ users.email }</li>    
                    )}
                </ul>
            </div>
            </React.Fragment>
        );
    }
}

export default Users;
