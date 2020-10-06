import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class PartIndex extends Component {

    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to ="/parts/registration">Add Part</Link>
                    </li>
                    <li>
                        <Link to ="/parts/partlist">Master Part List</Link>
                    </li>
                </ul>
            </div>
        )
    }
}