import React, { Component } from 'react';
// import children
import SplashButtonTwo from './SplashButtonTwo.js';
import SplashButtonOne from './SplashButtonOne.js';
import Background from './Background.js';
import "./Splash.css";


class Splash extends Component {
  constructor() {
    super();

}

    render() {
        return (
            <div className="bodydiv">
              <div className="titlediv">

                <img className="logo" alt="logo" src={"NewMotherFuckingLogo.png"}/>

                <p>Don't do you...Do Nu.</p>

              </div>
              <div className="buttondiv">
                <SplashButtonOne />
                <SplashButtonTwo />
              </div>
            <Background />
          </div>
        )
    }
}

export default Splash;
