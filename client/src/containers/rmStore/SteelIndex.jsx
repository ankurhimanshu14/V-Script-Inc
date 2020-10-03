import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class SteelIndex extends Component {

    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to ="/steels/registration">Add Steel</Link>
                    </li>
                    <li>
                        <Link to ="/steels/inventory">Steel Inventory</Link>
                    </li>
                    <li>
                        <Link to ="/steels/steelrequest">Steel Request</Link>
                    </li>
                </ul>
            </div>
        )
    }
}