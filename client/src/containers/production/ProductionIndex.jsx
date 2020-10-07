import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class PartIndex extends Component {

    render() {
        return(
            <div>
                <ul className="drop">
                    <li>
                        <Link to ="/production/cutting">Cutting</Link>
                    </li>
                    <li>
                        <Link to ="/production/forging">Forging</Link>
                    </li>
                    <li>
                        <Link to ="/production/heattreatment">Heat Treatment</Link>
                    </li>
                </ul>
            </div>
        )
    }
}