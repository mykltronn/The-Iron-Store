import React from 'react';
import React, { Component } from 'react';

export default class ReviewCard extends Component {
   constructor(props) {
      super(props)
   }
    render() {
        return (
           <ul>
             <li>this.props.name</li>
             <li>this.props.rating</li>
             <li>this.props.review</li>
           </ul>
        )
    }
}
