//<<<<<<< HEAD
// 3
// import React, { Component } from 'react';
//
//
//
// export default class ReviewCard extends Component {
//    constructor(props) {
//       super(props)
//
//       this.renderStars = this.renderStars.bind(this);
//    }
//
//
//    renderStars = (num, star) => {
//       const num = this.props.data.rating;
//       const star = ['','★','★ ★','★ ★ ★','★ ★ ★ ★','★ ★ ★ ★ ★'];
//       // console.log(star[num]);
//       // return star[num];
//
//       // num = this.props.rating;
//       // if (num = 0) {
//       //    return (
//       //       <div className="0"></div>
//       //    )}
//       // if (num = 1) {
//       //    return (
//       //       <div className="1">★</div>
//       //    )}
//       // if (num = 2) {
//       //    return (
//       //       <div className="2">★★</div>
//       //    )}
//       // if (num = 3) {
//       //    return (
//       //       <div className="3">★★★</div>
//       //    )}
//       //
//       // if (num = 4) {
//       //    return (
//       //       <div className="4">★★★★</div>
//       //    )}
//       //
//       // if (num = 5)  {
//       //    return (
//       //       <div className="5">★★★★★</div>
//       //    )}
//       // return
//
//    }
//
//
//     render() {
//       // console.log(this.props.data.rating)
//         return (
//          <div className="review-card-container">
//            <ul>
//              <li>{this.renderStars}</li>
//              <li>{this.props.data.rating}</li>
//              <li>{this.props.data.name}</li>
//              <li>{this.props.data.review}</li>
//            </ul>
//          </div>
//         )
//     }
// }
//
// // import React, { Component } from 'react';
// //
// // const ReviewCard = (props) => {
// //    let review = props.data;
// //    return (
// //       <div className= "review-container">
// //          <ul>
// //             <li>review.name</li>
// //             <li>review.review</li>
// //             <li>review.rating</li>
// //          </ul>
// //       </div>
// //    )
// // }
// //
// // export default ReviewCard;
//
// // ★
//=======

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

    render() {
        return (
            <div className="review-card-container">
              <ul>
                <li>{this.renderStars()}</li>
                <li>{this.props.data.name}</li>
                <li> " {this.props.data.review} " </li>
              </ul>
            </div>
        )
    }
}
//>>>>>>> bb45e47c3d23123ee0b4b7e0b8b5aa470d7ad65b
