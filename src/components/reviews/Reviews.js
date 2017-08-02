// reviews.js
import React, { Component } from 'react';

// import styles
import './Reviews.css';

// import children
import  ReviewCard  from './ReviewCard.js';

// import data
import NuUData from '../../data/NuUData.js';

// global vars for data functions
const products = NuUData.results;
const allReviews = [];

export default class Reviews extends Component {
   constructor() {
      super()

      this.getReviews = this.getReviews.bind(this);
      this.storeReviewCards = this.storeReviewCards.bind(this);

      this.state = {
         reviews: [],
         // NOTE: keep -VVV- for add review option.
         // name: '',
         // rating: 0,
         // review: ''
      }
   }

   getReviews = () => {
      products.map((product) => {
         allReviews.push(product.reviews)
         return allReviews;
      })
      // console.log(allReviews);
      allReviews.map((reviewArr) => {
         reviewArr.map((review) => {
            // stateReviews.push(review);
            this.state.reviews.push(review)
            return this.state.reviews;
         })
         // console.log(this.state.reviews)
         return this.state.reviews;
      })
   }

   storeReviewCards = () => {
         let cardList = this.state.reviews.map((review, index) => {
            return (
               <ReviewCard key={index} data={review} />
            )
         })
         this.setState({reviews: cardList})
         return this.state.reviews
   }

   componentDidMount() {
      this.getReviews();
      this.storeReviewCards();
   }

    render() {
        return (
            <div>
                <h1>This is the Reviews Page!</h1>
                {this.state.reviews}
            </div>
        )
    }
}
