
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Splash.css";

class SplashButtonTwo extends Component {

    render() {
        return (
          <div><Link className="link" to="/shop">Shop</Link></div>
        )
    }
};

export default SplashButtonTwo;
