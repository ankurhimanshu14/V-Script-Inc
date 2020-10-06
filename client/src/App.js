import React, {Component} from 'react';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import './App.css';
import SignUp from './containers/admin/SignUp';
import SignIn from './containers/admin/SignIn';
import AdminIndex from './containers/admin/AdminIndex';
import ForgotPassword from './containers/admin/ForgotPassword';
import SteelIndex from './containers/rmStore/SteelIndex';
import NewSteelRegistration from './containers/rmStore/NewSteelRegistration';
import SteelInventory from './containers/rmStore/SteelInventory';
import PartIndex from './containers/partMaster/PartIndex';
import PartList from './containers/partMaster/ListAllParts';
import PrivateRoutes from './containers/admin/PrivateRoutes';
import PublicRoutes from './containers/admin/PublicRoutes';
import LogOut from './containers/admin/LogOut';
import NewPart from './containers/partMaster/NewPartRegistration';
import ScheduleIndex from './containers/schedule/ScheduleIndex';
import NewSchedule from './containers/schedule/NewSchedule';

export default class App extends Component{

    render() {
        return (
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link class="navbar-brand" to="/">MWS+</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="nav nav-tabs justify-content-center">
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" to="/index">Home</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link" id="steels-tab" data-toggle="tab" role="tab" aria-controls="steels" aria-selected="true" to="/steels">Steels</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link" id="parts-tab" data-toggle="tab" role="tab" aria-controls="parts" aria-selected="true" to="/parts">Engineering</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link" id="schedule-tab" data-toggle="tab" role="tab" aria-controls="schedule" aria-selected="true" to="/schedule">Schedule</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link" id="production-tab" data-toggle="tab" role="tab" aria-controls="production" aria-selected="true" to="/production">Production</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link" id="quality-tab" data-toggle="tab" role="tab" aria-controls="quality" aria-selected="true" to="/quality">Quality</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link" id="dispatch-tab" data-toggle="tab" role="tab" aria-controls="dispatch" aria-selected="true" to="/dispatch">Dispatch</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link" id="maintenance-tab" data-toggle="tab" role="tab" aria-controls="maintenance" aria-selected="true" to="/maintenance">Maintenance</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link" id="tool&dies-tab" data-toggle="tab" role="tab" aria-controls="tool&dies" aria-selected="true" to="/tool&dies">ToolRoom</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link" id="humanresource-tab" data-toggle="tab" role="tab" aria-controls="humanresource" aria-selected="true" to="/humanresource">Human Resource</Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link" id="generalstore-tab" data-toggle="tab" role="tab" aria-controls="generalstore" aria-selected="true" to="/generalstore">General Store</Link>
                            </li>
                        </ul>
                        <LogOut className="btn btn-outline-success my-2 my-sm-0" />
                    </div>
                </nav>
                <div class="tab-content" id="myTabContent">
                <Switch>
                    <PublicRoutes restricted={true} component={SignIn} path="/" exact />
                    <PublicRoutes restricted={false} component={ForgotPassword} path="/users/forgotpassword" exact />
                    <PrivateRoutes component={AdminIndex} path="/index" exact />
                    <PrivateRoutes component={SignUp} path="/users/registration" exact />
                    <PrivateRoutes component={SteelIndex} path="/steels" exact />
                    <PrivateRoutes component={NewSteelRegistration} path="/steels/registration" exact />
                    <PrivateRoutes component={SteelInventory} path="/steels/inventory" exact />
                    <PrivateRoutes component={PartIndex} path="/parts" exact />
                    <PrivateRoutes component={ScheduleIndex} path="/schedule" exact />
                    <PrivateRoutes component={NewSchedule} path="/schedule/registration" exact />
                    <PrivateRoutes component={NewPart} path="/parts/registration" exact />
                    <PrivateRoutes component={PartList} path="/parts/partlist" exact />
                </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

{/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">MWS+</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="nav nav-tabs justify-content-center">
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true" to="/index">Home</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link" id="steels-tab" data-toggle="tab" role="tab" aria-controls="steels" aria-selected="true" to="/steels">Steels</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link" id="parts-tab" data-toggle="tab" role="tab" aria-controls="parts" aria-selected="true" to="/parts">Engineering</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link" id="schedule-tab" data-toggle="tab" role="tab" aria-controls="schedule" aria-selected="true" to="/schedule">Schedule</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link" id="production-tab" data-toggle="tab" role="tab" aria-controls="production" aria-selected="true" to="/production">Production</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link" id="quality-tab" data-toggle="tab" role="tab" aria-controls="quality" aria-selected="true" to="/quality">Quality</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link" id="dispatch-tab" data-toggle="tab" role="tab" aria-controls="dispatch" aria-selected="true" to="/dispatch">Dispatch</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link" id="maintenance-tab" data-toggle="tab" role="tab" aria-controls="maintenance" aria-selected="true" to="/maintenance">Maintenance</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link" id="tool&dies-tab" data-toggle="tab" role="tab" aria-controls="tool&dies" aria-selected="true" to="/tool&dies">ToolRoom</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link" id="humanresource-tab" data-toggle="tab" role="tab" aria-controls="humanresource" aria-selected="true" to="/humanresource">Human Resource</Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link" id="generalstore-tab" data-toggle="tab" role="tab" aria-controls="generalstore" aria-selected="true" to="/generalstore">General Store</Link>
                        </li>
                    </ul>
                    <LogOut className="btn btn-outline-success my-2 my-sm-0" />
                </div>
                </nav> */}