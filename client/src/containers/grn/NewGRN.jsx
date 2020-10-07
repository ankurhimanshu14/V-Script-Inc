import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/useInput';
import Checkbox from '../../components/useCheckbox';

export default class NewGRN extends Component {
    constructor() {
        super();
        this.state = {
            'grn': {
                'grNo':'',
                'creationRemarks': ''
            },
            'challanNo': '',
            'challanDate': '',
            'vehicleNo': '',
            'partyCode': '',
            'item': {
                'itemCode': '',
                'itemDescription': '',
                'itemHeader':''
            },
            'poNo': '',
            'hsnCode': '',
            'receiving': {
                'quantity': '',
                'uom': ''
            },
            'taxableValue': '',
            'rate&Amount': {
                'cgst': '',
                'sgst': '',
                'igst': ''
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'grn': {
                    'grNo':this.state.grn.grNo,
                    'creationRemarks': this.state.grn.creationRemarks
                },
                'challanNo': this.state.challanNo,
                'challanDate': this.state.challanDate,
                'vehicleNo': this.state.vehicleNo,
                'partyCode': this.state.partyCode,
                'item': {
                    'itemCode': this.state.item.itemCode,
                    'itemDescription': this.state.item.itemDescription,
                    'itemHeader':this.state.item.itemHeader
                },
                'poNo': this.state.poNo,
                'hsnCode': this.state.hsnCode,
                'receiving': {
                    'quantity': this.state.receiving.quantity,
                    'uom': this.state.receiving.uom
                },
                'taxableValue': this.state.taxableValue,
                'rate&Amount': {
                    'cgst': this.state["rate&Amount"].cgst,
                    'sgst': this.state["rate&Amount"].sgst,
                    'igst': this.state["rate&Amount"].igst
                }
            })
        };
        await fetch('http://localhost:5000/api/v1/private/items/newGateEntry', requestOptions)
        .then(res => res.json())
        .then(data => {
            alert('GRN Entry Successful');
        })
        .catch(err => {
            alert('There has been a problem');
        });
    }

    render() {
        return (
            <React.Fragment>
                
                <div className="container">
                    <div className="interior">
                        <Link className="btn" to="/gateEntry/newGRN">New Gate Entry</Link>
                    </div>
                </div>
                <div id="open-modal" className="modal-window">
                    <div>
                        <Link to="/gateEntry/listGRN" title="Close" className="modal-close">Close</Link>
                        <h1>Goods Receipt Note</h1>
                        <div>
                            <form className="form-group" method="POST">
                            <Input 
                            id = "grNo"
                            name="grNo"
                            type="number"
                            value={this.state.grn.grNo}
                            onChange={this.handleInputChange}
                            placeholder="GRN"
                            required
                            />
        
                            <Input 
                            id = "email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            placeholder="Email"
                            required
                            />
                            
                            <Input 
                            id = "username"
                            name="username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            placeholder="Username"
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
                            id = "role"
                            name="role"
                            type="text"
                            value={this.state.role}
                            onChange={this.handleInputChange}
                            placeholder="Role"
                            required
                            />
                
                            <Input 
                            id = "authority"
                            name="authority"
                            type="text"
                            value={this.state.authority}
                            onChange={this.handleInputChange}
                            placeholder="Authority"
                            required
                            />

                            <Checkbox
                            name="acceptTerms"
                            title="Accept Terms and Conditions"
                            value={this.state.acceptTerms}
                            onChange={this.handleCheckBox}
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
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}