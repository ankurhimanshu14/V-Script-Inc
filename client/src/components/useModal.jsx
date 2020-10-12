import React,{ Component } from 'react';

export default class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className="Modal"
                style={{
                    transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : this.props.show ? 1 : 0
                }}
            >
                {this.props.children}
            </div>
        )
    }
}