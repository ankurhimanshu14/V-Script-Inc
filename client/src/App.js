import React, {Component} from 'react';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import './App.css';
import SignUp from './containers/admin/SignUp';
import SignIn from './containers/admin/SignIn';
import ForgotPassword from './containers/admin/ForgotPassword';
import SteelApprovals from './containers/rmStore/SteelApprovals';
import SteelInventory from './containers/rmStore/SteelInventory';
import PartList from './containers/partMaster/ListAllParts';
import PrivateRoutes from './containers/admin/PrivateRoutes';
import PublicRoutes from './containers/admin/PublicRoutes';
import LogOut from './containers/admin/LogOut';
import NewPart from './containers/partMaster/NewPartRegistration';
import NewSchedule from './containers/schedule/NewSchedule';
import Cutting from './containers/production/Cutting';
import NewGRN from './containers/grn/NewGRN';
import ItemList from './containers/grn/ListGRN';

export default class App extends Component{

    render() {
        return (
            <BrowserRouter>
            <div>
                <nav id="navigation" className="navbar-light bg-light">
                    <Link to="/home" className="logo">MWS<span>+</span></Link>
                    <ul className="links">
                        <li className="dropdown"><Link to="/index" className="trigger-drop">Admin<i className="arrow" /></Link>
                            <ul className="drop">
                                <li><Link to ="/users/registration">Add a User</Link></li>
                                <li><Link to ="/users/updatepassword">Update Password</Link></li>
                                <li><Link to ="/users/update">Update Account</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link to="/gateEntry" className="trigger-drop">GRN Entry<i className="arrow" /></Link>
                            <ul className="drop">
                                <li><Link to ="/gateEntry/newGRN">Add GRN</Link></li>
                                <li><Link to ="/gateEntry/listGRN">List GRN</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link to="/steels" className="trigger-drop">Steels<i className="arrow"></i></Link>
                            <ul className="drop">
                                <li><Link to ="/steels/approvals">Assign Parts</Link></li>
                                <li><Link to ="/steels/inventory">Steel Inventory</Link></li>
                                <li><Link to ="/steels/request">Steel Request</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link to="/parts" className="trigger-drop">Engineering<i className="arrow"></i></Link>
                            <ul className="drop">
                                <li><Link to ="/parts/registration">Add Part</Link></li>
                                <li><Link to ="/parts/partlist">Master Part List</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link to="/production" className="trigger-drop">Production<i className="arrow"></i></Link>
                            <ul className="drop">
                                <li><Link to ="/production/schedule">Schedule</Link></li>
                                <li><Link to ="/production/planning">Planning</Link></li>
                                <li><Link to ="/production/cutting">Cutting</Link></li>
                                <li><Link to ="/production/forging">Forging</Link></li>
                                <li><Link to ="/production/heattreatment">Heat Treatment</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link to="/quality" className="trigger-drop">Quality Assurance<i className="arrow"></i></Link></li>
                        <li className="dropdown"><Link to="/dispatch" className="trigger-drop">Dispatch<i className="arrow"></i></Link></li>
                        <li className="dropdown"><Link to="/maintenance" className="trigger-drop">Maintenance<i className="arrow"></i></Link></li>
                        <li className="dropdown"><Link to="/tool&dies" className="trigger-drop">Tool Room<i className="arrow"></i></Link></li>
                        <li className="dropdown"><Link to="/humanresource" className="trigger-drop">Human Resource<i className="arrow"></i></Link></li>
                        <li className="dropdown"><Link to="/generalstore" className="trigger-drop">General Store<i className="arrow"></i></Link></li>
                        <LogOut className="btn btn-outline-success my-2 my-sm-0" />
                    </ul>
                </nav>
            </div>
            <div className="tab-content" id="myTabContent">
            <Switch>
                <PublicRoutes restricted={true} component={SignIn} path="/" exact />
                <PublicRoutes restricted={false} component={ForgotPassword} path="/users/forgotpassword" exact />
                <PrivateRoutes component={SignUp} path="/users/registration" exact />
                <PrivateRoutes component={NewGRN} path="/gateEntry/newGRN" exact />
                <PrivateRoutes component={ItemList} path="/gateEntry/listGRN" exact />
                <PrivateRoutes component={SteelApprovals} path="/steels/approvals" exact />
                <PrivateRoutes component={SteelInventory} path="/steels/inventory" exact />
                <PrivateRoutes component={NewSchedule} path="/schedule/registration" exact />
                <PrivateRoutes component={NewPart} path="/parts/registration" exact />
                <PrivateRoutes component={PartList} path="/parts/partlist" exact />
                <PrivateRoutes component={Cutting} path="/production/cutting" exact />
            </Switch>
            </div>
            </BrowserRouter>
        )
    }
}