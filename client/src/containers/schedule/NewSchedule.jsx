import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/useInput';

export default class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'year': '',
            'month': '',
            'partNo': '',
            'mostCriticalQty': {
                'quantity': '',
                'commitmentDate': ''
            },
            'criticalQty': {
                'quantity': '',
                'commitmentDate': ''
            },
            'mainQty': {
                'quantity': '',
                'commitmentDate': ''
            },
            'revisedQty': {
                'quantity': '',
                'commitmentDate': ''
            },
            'receivedTillDate': ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer refreshToken'
            },
            withCredentials: true
        };
                
        fetch('http://localhost:5000/api/v1/private/schedule/registration', requestOptions)
        .then(res => res.json())
        .then(data => {
            alert(('New Schedule Added: ' + data))
        })
        .catch(err => {
            alert('There has been a problem with your fetch operation: ' + err);
        });
        this.setState();
    }

    render() {
        return (
            <React.Fragment>
                <div className="signInBox col-md-3 ml-auto mt-5">
                    <h3 className="text-center">New Schedule</h3>
                    <br/>

                    <form className="form-group">
                                             
                        <Input 
                        id = "year"
                        name="year"
                        type="text"
                        value={this.state.year}
                        onChange={this.handleInputChange}
                        placeholder="Year"
                        required
                        />

                        <Input 
                        id = "month"
                        name="month"
                        type="text"
                        value={this.state.month}
                        onChange={this.handleInputChange}
                        placeholder="Month"
                        required
                        />
                        
                        <Input 
                        id = "password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        placeholder="Password"
                        required
                        />
    
                        <Input
                        id="submit-btn"
                        name="submit"
                        feature="block"
                        variant="primary"
                        value="Submit"
                        type="button"
                        onClick={this.handleSubmit}
                        />

                    </form>
                    <Link to="/users/registration"><p className="float-right">Doesn't have an account?</p></Link>
                    <Link to="/users/forgotpassword"><p className="float-left">Forgot Password?</p></Link>
                </div>
            </React.Fragment>
        )
    }
}