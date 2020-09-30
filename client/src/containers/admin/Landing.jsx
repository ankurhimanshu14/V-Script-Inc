import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {

    render() {
        return(
            <div>
                <h1>
                    Landing
                </h1>
                <p>
                    <Link to ="/dashboard">View Dashboard</Link>
                </p>
                <Link to="/users/login">
                    <button>
                            Log In
                    </button>
                </Link>
            </div>
        )
    }
}