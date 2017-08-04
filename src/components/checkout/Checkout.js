import React, { Component } from 'react';
import './styles/checkout.css';
// import children
import UserSelection from './UserSelection.js';
import CheckoutButton from './CheckoutButton.js';
import Subtotal from './Subtotal.js';
import Receipt from './Receipt.js';

export default class Checkout extends Component {

    render() {
        return (
            <div>
                <h1 className="checkoutTitle">Checkout</h1>
                <UserSelection />
                <Subtotal />
                <Receipt />
                <CheckoutButton />
            </div>
        )
    }
}
