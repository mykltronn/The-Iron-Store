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
      return(star[int]);
   }

   render() {
     return (
          <div className = "review-card">
           <ul className= "review-info">
             <li className="stars">{this.renderStars()}</li>
             <li className="names">{this.props.data.name}</li>
             <li className="packages"> nu and improved:<b>{this.props.data.package.title}</b></li>
             <li className="reviews">"{this.props.data.review}"</li>
           </ul>
         </div>
        )
    }
}
