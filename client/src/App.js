import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import AuthContext from './containers/auth';

import UserRegistrationForm from './containers/admin/signup';
import UserLoginForm from './containers/admin/login';
import SteelRegistrationForm from './containers/rmStore/newSteel';
import SteelInventory from './containers/rmStore/inventory';
import Admin from './containers/admin/index';

function App() {
  const existingTokens = JSON.parse(document.cookies.refreshToken);
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    document.cookies.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/users/login"}>MWS</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/users/login"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/users/registration"}>Sign up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin Page</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Admin} />
              <Route path="/users/login" component={UserLoginForm} />
              <Route path="/users/registration" component={UserRegistrationForm} />
              <Route path="/steels/registration" component={SteelRegistrationForm} />
              <Route path="/steels/inventory" component={SteelInventory} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
