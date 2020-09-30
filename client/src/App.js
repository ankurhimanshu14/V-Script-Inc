import React, {Component} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './containers/admin/SignUp';
import SignIn from './containers/admin/SignIn';
import ForgotPassword from './containers/admin/ForgotPassword';
import NewSteelRegistration from './containers/rmStore/NewSteelRegistration';
import SteelInventory from './containers/rmStore/SteelInventory';
import PartList from './containers/partMaster/ListAllParts';
import PrivateRoutes from './containers/admin/PrivateRoutes';
import PublicRoutes from './containers/admin/PublicRoutes';
import LogOut from './containers/admin/LogOut';
// import NewPart from './containers/partMaster/NewPartRegistration';

export default class App extends Component{

    render() {
        return (
            <BrowserRouter>
                <nav>
                    <LogOut />
                </nav>
                <Switch>
                    <PublicRoutes restricted={true} component={SignIn} path="/" exact />
                    <PublicRoutes restricted={false} component={ForgotPassword} path="/users/forgotpassword" exact />
                    <PrivateRoutes component={SignUp} path="/users/registration" exact />
                    <PrivateRoutes component={NewSteelRegistration} path="/steels/registration" exact />
                    <PrivateRoutes component={SteelInventory} path="/steels/inventory" exact />
                    <PrivateRoutes component={PartList} path="/parts/partlist" exact />
                </Switch>
            </BrowserRouter>
        )
    }
}
