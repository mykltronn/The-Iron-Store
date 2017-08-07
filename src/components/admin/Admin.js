import React, { Component } from 'react';
import AdminBox from './AdminBox.js';
import TempHeader from '../TempHeader/TempHeader.js'
import AdminSignIn from './AdminSignIn.js';

export default class Admin extends Component {
constructor() {
  super();
  this.state = {
    url : "https://intense-river-24910.herokuapp.com/api/products",
    authenticated: false
  }
}

render() {
    return (
          <div>
            {this.state.authenticated === false ? (
              <div className="stuffs">
                <TempHeader />
                <div>
                  <AdminSignIn />
                </div>
              </div>
            ) : (
            <div>
              <h1>Product List</h1>
                <AdminBox />
            </div>
          )}
        </div>
    )
}
}
