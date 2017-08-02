
import React, { Component } from 'react';
import "./Splash.css";
import { Link } from 'react-router-dom';

class SplashButtonOne extends Component {

    render() {
        return (
          <div><button className="btn"><Link to="/reviews">Reviews</Link></button></div>
        )
    }
};

export default SplashButtonOne;
