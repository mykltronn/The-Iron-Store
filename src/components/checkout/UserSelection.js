import React, { Component } from 'react';

export default class UserSelection extends Component {

    render() {
        return (
            <div className="card">
              {/* will need to add the path to get the image from the database that bob made. Also will need to dynamically grab the title of whatever the selection was. */}
              <img className="card-img-top" src="" alt="" />
                <div className="card-block">
                  <p className="card-text">
                    What Nu U comes with:

                  </p>
                </div>
            </div>
        )
    }
}
