
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Splash.css";

class SplashButtonTwo extends Component {

    render() {
        return (
          <div><button className="btn"><Link to="/shop">Shop</Link></button></div>
        )
    }
};

export default SplashButtonTwo;
