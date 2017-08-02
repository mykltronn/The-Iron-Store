// reviews.js
import React, { Component } from 'react';
// import children
import ReviewCard from './ReviewCard.js';

// import data
import NuUData from '../../data/NuUData.js';

// global var for data
// const products = NuUData.results;
// const data = NuUData.results;

const products = NuUData.results;
const allReviews = [];
// const stateReviews = [];

export default class Reviews extends Component {
   constructor(props) {
      super(props)

      this.state = {
         reviews: [],
         elements:[]
         // NOTE: keep -VVV- for add review option.
         // name: '',
         // rating: 0,
         // review: ''
      }
   }

   componentDidMount() {
      // this will become a fetch to our api/ req to our db, handle with .then()'s like usual
      // clean/ lock -VVV- this mess up
      // let stateReviews = [];

      let reviewList = products => products.map((product) => {
         allReviews.push(product.reviews)
         return allReviews;
      })
      // console.log(allReviews);
      allReviews.map((reviewArr) => {
         reviewArr.map((review) => {
            this.state.reviews.push(review)
            return this.state.reviews;
            // return(
            //    <ReviewCard key={review.name} name={review.name} rating={review.rating} review={review.review}   />
            // )

         })
         return this.state.reviews;
      })

      childComps() {
         this.state.reviews.map((review) => {
         return (
               <ReviewCard key={review.name} name={review.name} rating={review.rating} review={review.review}   />
            )
      })
      this.setState{elements}

      // console.log(this.state.reviews)
      // return this.state.reviews;

   }









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

// DOES WORK, probably needs to add render
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

    render() {
        return (
            <div>
                <h1>This is the Reviews Page!</h1>
            </div>
        )
    }
}
