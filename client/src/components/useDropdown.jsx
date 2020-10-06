import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menu: [],
          isOpen: false
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.renderSubMenu = this.renderSubMenu.bind(this);
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
    }
    
    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    renderSubMenu() {
      this.subMenu.map((item, i) => (
      <li key={i}><Link to={item.href}>{item.name}</Link></li>
      ))
    }

    render() {
        return (
          <>
            <li className="nav-item">
              <Link className="nav-link" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" to={this.props.navLink} onClick={this.showDropdownMenu}>{this.props.navName}</Link>
                <li>
                  {this.props.navName} {this.props.subMenu ? (typeof this.props.subMenu=="object" ? <ul>{this.renderSubMenu()}</ul> : null) : null}
                </li>
            </li>
          </>
        );
      }
    }