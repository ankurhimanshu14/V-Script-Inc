import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class AdminIndex extends Component {

    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to ="/users/registration">Sign Up</Link>
                    </li>
                    <li>
                        <Link to ="/users/login">Sign In</Link>
                    </li>
                    <li>
                        <Link to ="/users/forgotpassword">Forgot Password</Link>
                    </li>
                    <li>
                        <Link to ="/users/updatepassword">Update/ Change Password</Link>
                    </li>
                    <li>
                        <Link to ="/users/update">Update/ Change Account Details</Link>
                    </li>
                </ul>
            </div>
        )
    }
}