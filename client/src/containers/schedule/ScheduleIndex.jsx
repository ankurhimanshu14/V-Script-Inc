import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class ScheduleIndex extends Component {

    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to ="/schedule/registration">New Schedule</Link>
                    </li>
                    <li>
                        <Link to ="/schedule/details">Go to Schedule</Link>
                    </li>
                    <li>
                        <Link to ="/schedule/update">Update Schedule</Link>
                    </li>
                </ul>
            </div>
        )
    }
}