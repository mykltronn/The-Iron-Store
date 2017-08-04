import React, { Component } from 'react';
import Cart from '../shop/Cart';
export default class UserSelection extends Component {

    render() {

        return (
            <div className="card">
              <Cart friends={this.props.friends} />
              <img class="card-img-top" src="" alt="" />
                <div className="card-block">
                  <p className="card-text">
                    What Nu U comes with:

                  </p>
                </div>
            </div>
        )
    }
}
