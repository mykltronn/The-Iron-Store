import React, { Component } from 'react';
import './styles/checkout.css';
// import children
import UserSelection from './UserSelection.js';
import CheckoutButton from './CheckoutButton.js';
import Subtotal from './Subtotal.js';
import Receipt from './Receipt.js';
import Cart from '../shop/Cart.js';
import TempHeader from "../TempHeader/TempHeader.js"

export default class Checkout extends Component {
  constructor(props){
      super(props);

      this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
      this.state={
        showReceipt: false
      }
    }

    handleCheckoutClick() {
      this.setState({showReceipt: true })
    }


    render() {
      console.log(this.props);
        return (
          <div>
            {this.state.showReceipt != true ? (
            <div className="checkoutThings">
              <TempHeader />
                <h1 className="checkoutTitle">Your selections:</h1>
                <ul className="selectedItems">
                    <li>Title: {this.props.selectedU.title} -
                    ${this.props.selectedU.price}</li>

                    <li>Likes: {this.props.likes} -  ${this.props.lPrice}</li>

                    <li>Friends: {this.props.friends} - ${this.props.fPrice}</li>

                    <li>Comments: {this.props.comments} - ${this.props.cPrice}</li>

                    <li>Posts: {this.props.posts} - ${this.props.pPrice}</li>

                </ul>
                <Cart selectedU={this.props.selectedU}
                  likes={this.props.likes}
                  lPrice={this.props.lPrice}
                  friends={this.props.friends}
                  fPrice={this.props.fPrice}
                  comments={this.props.comments}
                  cPrice={this.props.cPrice}
                  posts={this.props.posts}
                  pPrice={this.props.pPrice}
                />
                <Subtotal
                  selectedU = {this.props.selectedU.price}
                  lPrice={this.props.lPrice}
                  fPrice={this.props.fPrice}
                  cPrice={this.props.cPrice}
                  pPrice={this.props.pPrice}
                />
                <input onClick={this.handleCheckoutClick} className="checkoutBtn" type="button" value="Checkout"/>
            </div>
          ):(
            <div>
              <h1 className="checkoutInfo">Your purchase has been completed. Here is your final receipt:</h1>
              <Cart selectedU={this.props.selectedU}
                likes={this.props.likes}
                lPrice={this.props.lPrice}
                friends={this.props.friends}
                fPrice={this.props.fPrice}
                comments={this.props.comments}
                cPrice={this.props.cPrice}
                posts={this.props.posts}
                pPrice={this.props.pPrice}
              />
              <Receipt
                selectedU = {this.props.selectedU.price}
                lPrice={this.props.lPrice}
                fPrice={this.props.fPrice}
                cPrice={this.props.cPrice}
                pPrice={this.props.pPrice} />
            </div>
          )}

        </div>
        )
    }
}
