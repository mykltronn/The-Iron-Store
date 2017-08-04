
import React, { Component } from 'react';
import "./Splash.css";
import { Link } from 'react-router-dom';

class SplashButtonOne extends Component {

    render() {
        return (
          <div><Link className="link" to="/reviews">Reviews</Link></div>
        )
    }
};

export default SplashButtonOne;
