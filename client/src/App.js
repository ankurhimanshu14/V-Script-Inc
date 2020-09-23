import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import UserRegistrationForm from './containers/admin/signup';
import UserLoginForm from './containers/admin/login';
import SteelRegistrationForm from './containers/rmStore/newSteel';
import SteelInventory from './containers/rmStore/inventory';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/api/v1/users/login"}>MWS</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/api/v1/users/login"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/api/v1/users/registration"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path='/' component={UserLoginForm} />
              <Route path="/api/v1/users/login" component={UserLoginForm} />
              <Route path="/api/v1/users/registration" component={UserRegistrationForm} />
              <Route path="/api/v1/steels/registration" component={SteelRegistrationForm} />
              <Route path="/api/v1/steels/inventory" component={SteelInventory} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
