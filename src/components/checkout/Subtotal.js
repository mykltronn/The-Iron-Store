
import React, { Component } from 'react';

export default class Subtotal extends Component {

    render() {
      let subtotal = parseInt(this.props.selectedU) + parseInt(this.props.lPrice) + parseInt(this.props.fPrice) + parseInt(this.props.cPrice) + parseInt(this.props.pPrice);

        return (
          <div className= "subtotalAmount">Subtotal: ${subtotal}</div>
        )
    }
}
