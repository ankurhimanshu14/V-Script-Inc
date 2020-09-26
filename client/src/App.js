import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './containers/admin/SignUp';
import SignIn from './containers/admin/SignIn';
import NewSteelRegistration from './containers/rmStore/NewSteelRegistration';

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/users/registration" component={SignUp} />
            <Route path="/users/login" component={SignIn} />
            <Route path="/steels/registration" component={NewSteelRegistration} />
        </Switch>
        </BrowserRouter>
    )
}

export default App;