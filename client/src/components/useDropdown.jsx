import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = (event) => {
        // event.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <div onClick={(e) => this.toggle(e)} className="header">{this.props.title}</div>
                { this.state.open ? <div className="content">{this.props.children}</div> : null }
                {/* <ul className="links">
                <li className="dropdown">
                        <Link to="#" className="trigger-drop">Admin<i className="arrow" /></Link>
                        <ul className="drop">
                            <li><Link to="#">Sign Up</Link></li>
                            <li><Link to="#">Update Password</Link></li>
                            <li><Link to="#">User Details</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to="#" className="trigger-drop">Masters<i className="arrow" /></Link>
                        <ul className="drop">
                            <li><Link to="#">Item Master</Link></li>
                            <li><Link to="#">Part Master</Link></li>
                            <li><Link to="#">Machine Master</Link></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <Link to="#" className="trigger-drop">Departments<i className="arrow" /></Link>
                        <ul className="drop">
                            <li><Link to="#">Gate Entry</Link></li>
                            <li><Link to="#">Raw Material Store</Link></li>
                            <li><Link to="#">Engineering</Link></li>
                            <li><Link to="#">Production</Link></li>
                            <li><Link to="#">Quality Assurance</Link></li>
                            <li><Link to="#">Dispatch</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to="#" className="trigger-drop">Support<i className="arrow" /></Link>
                        <ul className="drop">
                            <li><Link to="#">Maintenance</Link></li>
                            <li><Link to="#">Tool Room</Link></li>
                            <li><Link to="#">Human Resource</Link></li>
                            <li><Link to="#">General Store</Link></li>
                        </ul>
                    </li>
                </ul> */}
            </React.Fragment>
        )
    }
}