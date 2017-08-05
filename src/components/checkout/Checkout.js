import React, { Component } from 'react';
import './styles/checkout.css';
// import children
import UserSelection from './UserSelection.js';
import CheckoutButton from './CheckoutButton.js';
import Subtotal from './Subtotal.js';
import Receipt from './Receipt.js';
import Cart from '../shop/Cart.js';

export default class Checkout extends Component {
  constructor(props){
      super(props)
    }
    render() {
        return (
            <div>
                <h1 className="checkoutTitle">Checkout gets the following params:</h1>
                <ul>
                    <li>{this.props.likes}</li>
                    <li>{this.props.lPrice}</li>
                    <li>{this.props.friends}</li>
                    <li>{this.props.fPrice}</li>
                    <li>{this.props.comments}</li>
                    <li>{this.props.cPrice}</li>
                    <li>{this.props.posts}</li>
                    <li>{this.props.pPrice}</li>
                </ul>
                <UserSelection />
                <Subtotal />
                <Receipt />
                <CheckoutButton />
            </div>
        )
    }
}
