import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './containers/admin/SignUp';
import SignIn from './containers/admin/SignIn';
import ForgotPassword from './containers/admin/ForgotPassword';
import NewSteel from './containers/rmStore/NewSteelRegistration';
import SteelInventory from './containers/rmStore/SteelInventory';
import PartList from './containers/partMaster/ListAllParts';
import NewPart from './containers/partMaster/NewPartRegistration';

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/users/registration" component={SignUp} />
            <Route path="/users/forgotpassword" component={ForgotPassword} />
            <Route path="/steels/registration" component={NewSteel} />
            <Route path="/steels/inventory" component={SteelInventory} />
            <Route path="/parts/partlist" component={PartList} />
            <Route path="/parts/registration" component={NewPart} />
        </Switch>
        </BrowserRouter>
    )
}

export default App;