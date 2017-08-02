
import React, { Component } from 'react';


var star = ['','★','★ ★','★ ★ ★','★ ★ ★ ★','★ ★ ★ ★ ★'];
export default class ReviewCard extends Component {
   constructor(props) {
      super(props)
      this.renderStars = this.renderStars.bind(this);
   }
   renderStars() {
      let int = [];
      let starNum = this.props.data.rating;
      int.push(starNum);
      console.log(star[int])
      return(star[int]);
   }
   // NOTE: drop this back in to UL if you get a working star render
   // <li>{this.renderStars}</li>


    render() {
        return (
         <div className="review-card-container">
           <ul>
             <li>{this.renderStars()}</li>
             <li>{this.props.data.rating}</li>
             <li>{this.props.data.name}</li>
             <li>{this.props.data.review}</li>
           </ul>
         </div>
        )
    }
}

// ★
