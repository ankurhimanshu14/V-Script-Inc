import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './containers/admin/SignUp';

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/sign-up" component={SignUp} />
        </Switch>
        </BrowserRouter>
    )
}

export default App;