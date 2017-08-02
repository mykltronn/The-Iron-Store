
import React, { Component } from 'react';

export default class ReviewCard extends Component {
   constructor(props) {
      super(props)
   }
    render() {
        return (
           <ul>
             <li>{this.props.data.name}</li>
             <li>{this.props.data.rating}</li>
             <li>{this.props.data.review}</li>
           </ul>
        )
    }
}

// import React, { Component } from 'react';
//
// const ReviewCard = (props) => {
//    let review = props.data;
//    return (
//       <div className= "review-container">
//          <ul>
//             <li>review.name</li>
//             <li>review.review</li>
//             <li>review.rating</li>
//          </ul>
//       </div>
//    )
// }
//
// export default ReviewCard;
