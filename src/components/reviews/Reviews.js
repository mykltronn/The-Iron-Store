// reviews.js
import React, { Component } from 'react';
import ReviewCard from './ReviewCard.js';
import FullLayout from '../navigation/FullLayout.js'
// import styles
import './Reviews.css';


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

   render() {
     return (
         <FullLayout>
            <div>
                  <div className="header-container">
                    <h4>Read what our customers have to say...</h4>
                    <h1>or let the stars speak for themselves</h1>
                  </div>
                  <div className="review-cards-container">
                    {this.state.reviews}
                  </div>
            </div>
        </FullLayout>
     )
   }
};
