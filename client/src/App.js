import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignUp from './containers/admin/SignUp';
import SignIn from './containers/admin/SignIn';
import ForgotPassword from './containers/admin/ForgotPassword';
import NewSteelRegistration from './containers/rmStore/NewSteelRegistration';
import SteelInventory from './containers/rmStore/SteelInventory';
import PartList from './containers/partMaster/ListAllParts';
import Dashboard from './containers/admin/Dashboard';
import ProtectedRoute from './containers/admin/ProtectedRoutes';
import LogOut from './containers/admin/LogOut';
// import NewPart from './containers/partMaster/NewPartRegistration';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            status: ''
        }

        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(event) {
        event.preventDefault();
    }

    render() {
        return (
            <BrowserRouter>
            <nav>
                <LogOut />
            </nav>
            <Switch>
                    <Route exact path="/" handleLogin={this.handleLogin} render={
                        props => <SignIn {...props} status={this.state.status.toString()} handleLogin={this.handleLogin} />
                    } />
                    <ProtectedRoute exact path='/dashboard' component={Dashboard} />
                    <ProtectedRoute path="/users/registration" component={SignUp} />
                    <ProtectedRoute path="/users/forgotpassword" component={ForgotPassword} />
                    <ProtectedRoute path="/steels/registration" component={NewSteelRegistration} />
                    <ProtectedRoute path="/steels/inventory" component={SteelInventory} />
                    <Route path="/parts/partlist" component={PartList} />
            </Switch>
            </BrowserRouter>
        )
    }
}
