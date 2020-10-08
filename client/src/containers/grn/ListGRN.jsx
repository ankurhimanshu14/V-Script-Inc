import React, {Component} from 'react';
import Checkbox from '../../components/useCheckbox';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    };
    
    async componentDidMount() {
        const requestOptions = {
            credentials: 'include'
        };

        const response = await fetch('http://localhost:5000/api/v1/private/items/listGRN', requestOptions)
        const data = await response.json();
        this.setState({items: data});
    }

    render() {
        const items = Object.values(this.state.items);
        console.log(items);
        return (
            <React.Fragment>
                <h2>Gate Receipt Note Register</h2>
                <div className="container">
                <div className="row">
                    <div>
                    <div className="table-responsive" data-pattern="priority-columns">
                        <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th data-priority="1">GRN</th>
                                <th data-priority="2">DATETIME</th>
                                <th data-priority="3">ITEM CODE</th>
                                <th data-priority="4">ITEM-DECRIPTION</th>
                                <th data-priority="5">ITEM_HEADER</th>
                                <th data-priority="6">PARTY NAME</th>
                                <th data-priority="7">QUANTITY</th>
                                <th data-priority="8">U.O.M.</th>
                                <th data-priority="9">SELECT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(member => (
                                <tr key={member._id}>
                                    <td>{member.grn.grNo}</td>
                                    <td>{member.grn.grTimestamp}</td>
                                    <td>{member.item.itemCode}</td>
                                    <td>{member.item.itemDescription}</td>
                                    <td>{member.item.itemHeader}</td>
                                    <td>{member.party}</td>
                                    <td>{member.receiving.quantity}</td>
                                    <td>{member.receiving.uom}</td>
                                    <td>{<Checkbox name="itemNo" value="itemNo" placeholder="Select" />}</td>
                                </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}