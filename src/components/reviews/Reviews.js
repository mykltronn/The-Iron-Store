// reviews.js
import React, { Component } from 'react';
import ReviewCard from './ReviewCard.js';
import TempHeader from '../TempHeader/TempHeader.js';
import ReviewForm from './ReviewForm.js';
// import styles
import './Reviews.css';

// import children
export default class Reviews extends Component {
   constructor() {
      super()

      this.state = {
         reviews: [],
      }
  }

  componentDidMount() {
    fetch("https://intense-river-24910.herokuapp.com/api/product-reviews")
    .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
        let reviewCards = resp.results.Reviews.map((review)=> {
          return(
             <ReviewCard key={review._id} data={review} />
          )
        })
        this.setState({reviews: reviewCards});
      })
  }

// added the ability to post a review in review form.
   render() {
     return (
        <div className="review-body">
            <TempHeader />
              <div className="header-container">
                <h4>Read what our customers have to say...</h4>
                <h1>or let the stars speak for themselves</h1>
              </div>
              <div className="review-cards-container">
                {this.state.reviews}
              </div>
              <div>
                <ReviewForm />
              </div>
        </div>
     )
   }
};
