
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CheckoutButton extends Component {

    render() {
        return (
          <div><Link className="checkoutLink" to="/receipt">Checkout</Link></div>
        )
    }
};
