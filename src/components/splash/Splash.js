import React, { Component } from 'react';
// import children
import SplashButtonTwo from './SplashButtonTwo.js';
import SplashButtonOne from './SplashButtonOne.js';
import "./Splash.css";


class Splash extends Component {
  constructor() {
    super();

    this.state = {
      pictuers: [],
    };

  }

  componentDidMount() {

    fetch('https://randomuser.me/api')
    .then(
function(response) {
  if (response.status != 200) {
    console.log('Looks like there was a problem. Status Code' + response.status);
    return;
  }

response.json().then(function(data){

            for (var i = 0; i < 700; i++) {
            let profile = data.results[i];
            console.log(data.results);
            <div className='backgroundPictures' key={profile}>
            <img src={data.results[0].picture.thumbnail} alt="profilepicture" className="imageItself"/>
          </div>
          }
        });
          // this.setState({pictures: data.results.picture.thumbnail});
        });
    }






    render() {
        return (
            <div className="bodydiv">
              <div className="titlediv">
                <img className="logo" alt="logo" src={"logo2.png"}/>
                <p>The New You is Ready</p>
              </div>
              <div className="buttondiv">
                <SplashButtonOne />
                <SplashButtonTwo />
              </div>
            </div>
        )
    }
}

export default Splash;
