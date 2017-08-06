
import React, { Component } from 'react';
import AdminBox from './AdminBox.js';

export default class Admin extends Component {
constructor() {
  super();
  this.state = {
    url : "https://intense-river-24910.herokuapp.com/api/products"
  }
}

render() {
    return (
        <div>
            <AdminBox />
        </div>
    )
  }
}