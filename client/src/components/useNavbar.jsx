import React from 'react';

import Input from './useInput';
import Button from './useButton';

const Navbar = (props) => {
    let link = props.title.toLowerCase().split(' ').join('');
    console.log(link);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">MWS</a>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className={`nav-item ${props.title}`}>
                        <a className="nav-link" href={link}>{props.title}</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" method="GET">
                    <Input
                    type="text"
                    placeholder="Search" />
                    <Button
                    feature="sm"
                    variant="secondary"
                    type="submit"
                    title="Search" />
                </form>
            </div>
        </nav>
    )
}

export default Navbar;