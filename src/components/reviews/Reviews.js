// reviews.js
import React, { Component } from 'react';

// import styles
import './Reviews.css';

// import children
import  ReviewCard  from './ReviewCard.js';


export default class Reviews extends Component {
   constructor() {
      super()

      this.state = {
         reviews: [],
         // NOTE: keep -VVV- for add review option.
         // name: '',
         // rating: 0,
         // review: ''
      }
  }

  componentDidMount() {
    fetch("https://intense-river-24910.herokuapp.com/api/products")
    .then(resp => resp.json())
      .then(resp => {
        let tempArray = [];
        let response = resp;
        for(let i = 0; i < response.length; i++){
          for(let n = 0; n < response[i].reviews.length; n++){
           let review = {
              name: response[i].reviews[n].name,
              _id: response[i].reviews[n]._id,
              rating: response[i].reviews[n].rating,
              review: response[i].reviews[n].review,
              parent_id: response[i]._id
           }
           tempArray.push(review);
          }
        }
        console.log("Temp Array" + tempArray);
        let reviewCards = tempArray.map((review)=>{
          return(
             <ReviewCard key={review._id} data={review} />
          )
        })
        this.setState({reviews: reviewCards});
    })
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
