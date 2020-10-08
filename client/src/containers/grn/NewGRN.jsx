import React, {Component} from 'react';
import Input from '../../components/useInput';

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
                this.setState({[event.target.name]: event.target.value});
    }

    async handleSubmit(event) {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state)
        };
        await fetch('http://localhost:5000/api/v1/private/items/registration', requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result) {
                console.log('-------------this.state-------------', this.state);
                alert("Gate Entry Successful. GRN: ", result.data.grn.grNo);
            } else {
                alert('Saving error');
            }
        })
        .catch(err => {
            alert('There has been a problem with your fetch operation: ' + err);
        });
    }

    render() {
        return (
            <React.Fragment>
                
                <div className="container">
                        <h1>Goods Receipt Note</h1>
                        <div>
                            <form className="form-group">
                            <Input 
                            id = "grNo"
                            name="grNo"
                            type="Number"
                            value={this.state.grn.grNo}
                            onChange={this.handleInputChange}
                            placeholder="GRN"
                            required
                            />
        
                            <Input 
                            id = "creationRemarks"
                            name="creationRemarks"
                            type="text"
                            value={this.state.grn.creationRemarks}
                            onChange={this.handleInputChange}
                            placeholder="Remarks"
                            required
                            />
                            
                            <Input 
                            id = "challanNo"
                            name="challanNo"
                            type="Number"
                            value={this.state.challanNo}
                            onChange={this.handleInputChange}
                            placeholder="Challan No"
                            required
                            />
                            
                            <Input 
                            id = "challanDate"
                            name="challanDate"
                            type="Date"
                            value={this.state.challanDate}
                            onChange={this.handleInputChange}
                            placeholder="Challan Date"
                            required
                            />
                            
                            <Input 
                            id = "vehicleNo"
                            name="vehicleNo"
                            type="text"
                            value={this.state.vehicleNo}
                            onChange={this.handleInputChange}
                            placeholder="Vehicle No"
                            required
                            />
                
                            <Input 
                            id = "partyCode"
                            name="partyCode"
                            type="text"
                            value={this.state.partyCode}
                            onChange={this.handleInputChange}
                            placeholder="Party Code"
                            required
                            />
                            <Input 
                            id = "itemCode"
                            name="itemCode"
                            type="text"
                            value={this.state.item.itemCode}
                            onChange={this.handleInputChange}
                            placeholder="Item Code"
                            required
                            />

                            <Input 
                            id = "itemDescription"
                            name="itemDescription"
                            type="text"
                            value={this.state.item.itemDescription}
                            onChange={this.handleInputChange}
                            placeholder="Item Description"
                            required
                            />

                            <Input 
                            id = "itemHeader"
                            name="itemHeader"
                            type="text"
                            value={this.state.item.itemHeader}
                            onChange={this.handleInputChange}
                            placeholder="Item Header"
                            required
                            />

                            <Input 
                            id = "poNo"
                            name="poNo"
                            type="Number"
                            value={this.state.poNo}
                            onChange={this.handleInputChange}
                            placeholder="PO No"
                            required
                            />

                            <Input 
                            id = "hsnCode"
                            name="hsnCode"
                            type="text"
                            value={this.state.hsnCode}
                            onChange={this.handleInputChange}
                            placeholder="HSN Code"
                            required
                            />

                            <Input 
                            id = "quantity"
                            name="quantity"
                            type="Number"
                            value={this.state.receiving.quantity}
                            onChange={this.handleInputChange}
                            placeholder="Quantity"
                            required
                            />

                            <Input 
                            id = "uom"
                            name="uom"
                            type="text"
                            value={this.state.receiving.uom}
                            onChange={this.handleInputChange}
                            placeholder="UOM"
                            required
                            />

                            <Input 
                            id = "cgst"
                            name="cgst"
                            type="Number"
                            value={this.state["rate&Amount"].cgst}
                            onChange={this.handleInputChange}
                            placeholder="CGST"
                            required
                            />

                            <Input 
                            id = "sgst"
                            name="sgst"
                            type="Number"
                            value={this.state["rate&Amount"].sgst}
                            onChange={this.handleInputChange}
                            placeholder="SGST"
                            required
                            />

                            <Input 
                            id = "igst"
                            name="igst"
                            type="Number"
                            value={this.state["rate&Amount"].igst}
                            onChange={this.handleInputChange}
                            placeholder="IGST"
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
            </React.Fragment>
        )
    }
}