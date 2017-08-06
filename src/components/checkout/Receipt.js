
import React, { Component } from 'react';


export default class Receipt extends Component {

    render() {
      let receipt = parseInt(this.props.lPrice) + parseInt(this.props.fPrice) + parseInt(this.props.cPrice) + parseInt(this.props.pPrice);
        return (
          <div className="totalReceipt">Total: ${receipt}</div>

        )
    }
};
