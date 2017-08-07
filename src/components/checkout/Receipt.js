
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Receipt extends Component {

    render() {
      let receipt = parseInt(this.props.selectedU) + parseInt(this.props.lPrice) + parseInt(this.props.fPrice) + parseInt(this.props.cPrice) + parseInt(this.props.pPrice);
        return (
          <div className="receiptInfo">
          <div className="totalReceipt">Total: ${receipt}</div>
          <div><Link className="shopLink" to="/">Want to Shop More?</Link> <Link className="reviewsLink" to="/reviews">Checkout Reviews!</Link></div>

        </div>

        )
    }
};
