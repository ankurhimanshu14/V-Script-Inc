import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './containers/admin/SignUp';
import SignIn from './containers/admin/SignIn';
import ForgotPassword from './containers/admin/ForgotPassword';
import NewSteelRegistration from './containers/rmStore/NewSteelRegistration';
import SteelInventory from './containers/rmStore/SteelInventory';

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/users/registration" component={SignUp} />
            <Route path="/steels/registration" component={NewSteelRegistration} />
            <Route path="/steels/inventory" component={SteelInventory} />
        </Switch>
        </BrowserRouter>
    )
}

export default App;