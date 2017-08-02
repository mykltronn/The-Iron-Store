// reviews.js
import React, { Component } from 'react';
// import children
import ReviewCard from './ReviewCard.js';

// import data
import NuUData from '../../data/NuUData.js';

// global var for data
const products = NuUData.results;
const allReviews = [];
// const stateReviews = [];

export default class Reviews extends Component {
   constructor(props) {
      super(props)

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

// child component for storing in state/ render -VVV-
// <ReviewCard key={review.name} name={review.name} rating={review.rating} review={review.review}   />

// DOES WORK, 1/2. drops state before component render....
   // componentDidMount() {
   //    // this will become a fetch to our api/ req to our db, handle with .then()'s like usual
   //    // clean/ lock -VVV- this mess up
   //    // let allReviews = [];
   //    // let stateReviews = [];
   //    products.map((product) => {
   //       allReviews.push(product.reviews)
   //       return allReviews;
   //    })
   //    // console.log(allReviews);
   //    allReviews.map((reviewArr) => {
   //       reviewArr.map((review) => {
   //          // stateReviews.push(review);
   //          this.state.reviews.push(review)
   //          return this.state.reviews;
   //       })
   //       // console.log(this.state.reviews)
   //       return this.state.reviews;
   //    })
   //    console.log(this.state.reviews)
   //    return this.state.reviews;
   // }

   getReviews = () => {
      products.map((product) => {
         allReviews.push(product.reviews)
         return allReviews;
      })
      console.log(allReviews);
      allReviews.map((reviewArr) => {
         reviewArr.map((review) => {
            // stateReviews.push(review);
            this.state.reviews.push(review)
            return this.state.reviews;
         })
         console.log(this.state.reviews)
         return this.state.reviews;
      })
   }
      // console.log(this.state.reviews)
      // return this.state.reviews;
   storeReviewCards = () => {
         let cardList = this.state.reviews.map((review) => {
            return (
               <ReviewCard key={review.name} name={review.name} rating={review.rating} review={review.review}   />
            )
         })

         this.setState({reviews: cardList})
         return this.state.reviews
   }

   componentDidMount() {
      this.getReviews();
      this.storeReviewCards();
   }

      // console.log(this.state.reviews)


// DOES NOT WORK
   // componentDidMount() {
   //    // this will become a fetch to our api/ req to our db, handle with .then()'s like usual
   //    // clean/ lock -VVV- this mess up
   //
   //    for (let i = 0; i < products.length; i++) {
   //       allReviews.push(products[i].reviews)
   //       console.log(allReviews)
   //       return allReviews
   //    }
   //    allReviews.map((reviewArr) => {
   //       reviewArr.map((review) => {
   //
   //       })
   //    })
   //    console.log(this.state.reviews);
   //
   //    // for(let i = 0; i < allReviews.length; i++) {
   //    //    for (let j = 0; j < allReviews[i].length; j++) {
   //    //       stateReviews.push(allReviews[i][j]);
   //    //    }
   //    // }
   //    // console.log(allReviews)
   //    // products.map((product) => {
   //    //    let i = product.reviews[i];
   //    //    for (i = 0; i < product.reviews.length; i++) {
   //    //       allReviews.push(product.reviews[i])
   //    //    }
   //    //    return allReviews
   //    // })
   //
   //
   //
   // }



    render() {
        return (
            <div>
                <h1>This is the Reviews Page!</h1>
                {this.state.reviews}
               //  {this.props.children}
            </div>
        )
    }
}
