import React, { Component } from 'react';
import AdminBox from './AdminBox.js';
import TempHeader from '../TempHeader/TempHeader.js';
import axios from 'axios';
import AdminSignIn from './AdminSignIn.js';

export default class Admin extends Component {
constructor() {
  super();

  this.handleAdminSubmit = this.handleAdminSubmit.bind(this);

  this.state = {
    url : "https://intense-river-24910.herokuapp.com/api/products",
    authenticated: false
  }
}

handleAdminSubmit(username, password) {
  this.setState({authenticated: !this.state.authenticated});
}


render() {
    return (
          <div>
            {this.state.authenticated === false ? (
              <div className="stuffs">
                <TempHeader />
                <div>
                  <AdminSignIn handleAdminSubmit={this.handleAdminSubmit}/>
                </div>
              </div>
            ) : (
            <div>
              <TempHeader />
              <h1>Product List</h1>
                <AdminBox />
            </div>
          )}
        </div>
    )
}
}
