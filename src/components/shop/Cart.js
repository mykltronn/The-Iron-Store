import React, { Component } from 'react';

export default class Cart extends Component {

    render() {
        return (
            <div className="cart">
                <h3>Cart for {this.props.selectedU.title}</h3>
            </div>
        )
    }
}
