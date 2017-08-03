// import React, { Component } from 'react';
// import Cart from './Cart.js'
// import Slider from 'react-slick'
// import * as questions from './Questions.js'
//
//
//
// // App state
// var state = {
//   currentSlide: 0,
//   data        : []
// }
//
// // State transitions
// var actions = {
//   toggleNext: function() {
//     console.log("something worked");
//     var current = state.currentSlide;
//     var next = current + 1;
//     if (next > state.data.length - 1) {
//       next = 0;
//     }
//     state.currentSlide = next;
//     render(state)
//   },
//   togglePrev: function() {
//     console.log("something worked");
//     var current = state.currentSlide;
//     var prev = current - 1;
//     if (prev < 0) {
//       prev = state.data.length - 1;
//     }
//     state.currentSlide = prev;
//     render(state);
//   },
//   toggleSlide: function(id) {
//     console.log("something worked");
//     var index = state.data.map(function (el) {
//       return (
//         el.id
//       );
//     });
//     var currentIndex = index.indexOf(id);
//     state.currentSlide = currentIndex;
//     render(state);
//   }
// }
//
// // var Slideshow = React.createClass({
// //   render: function() {
// //     return (
// //       <div className="slideshow">
// //         <Slides data={this.props.data} />
// //         <Pagination data={this.props.data} />
// //         <Controls />
// //       </div>
// //     );
// //   }
// // }); v v v v v v v v v
//
// export default class OptionsCarousel extends Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//             currentSlide: 0,
//             data        : []
//         }
//     }
//
//     render() {
//       return (
//         <div className="slideshow">
//           <Slides data={this.props.data} />
//           <Pagination data={this.props.data} />
//           <Controls />
//         </div>
//       );
//     }
// }
//
// export default class Slides extends Component {
//     render() {
//       let slidesNodes = this.props.data.map(function (slideNode, index) {
//       let isActive = state.currentSlide === index;
//         return (
//           <Slide active={isActive} key={slideNode.id} imagePath={slideNode.imagePath} imageAlt={slideNode.imageAlt} title={slideNode.title} subtitle={slideNode.subtitle} text={slideNode.text} action={slideNode.action} actionHref={slideNode.actionHref} />
//         )
//       })
//       return (
//         <div className="slides">
//           {slidesNodes}
//         </div>
//       );
//     }
// }
//
// // var Slide = React.createClass({
//   // render: function() {
//   //   var classes = React.addons.classSet({
//   //     'slide': true,
//   //     'slide--active': this.props.active
//   //   });
//   //   return (
//   //     <div className={classes}>
//   //       <img src={this.props.imagePath} alt={this.props.imageAlt} />
//   //       <h2>{this.props.title}</h2>
//   //       <h3>{this.props.subtitle}</h3>
//   //       <p>{this.props.text}</p>
//   //       <a href={this.props.actionHref}>{this.props.action}</a>
//   //     </div>
//   //   );
//   // }
// // }); v v v v  v v v v  vv
//
// export default class Slide extends Component {
//   render() {
//     return (
//       <div className={"slide" + ((this.props.active === 'true') ? 'slide--active' : '')}>
//         <img src={this.props.imagePath} alt={this.props.imageAlt} />
//         <h2>{this.props.title}</h2>
//         <h3>{this.props.subtitle}</h3>
//         <p>{this.props.text}</p>
//         <a href={this.props.actionHref}>{this.props.action}</a>
//       </div>
//     );
//   }
// }
//
// var Controls = React.createClass({
//   togglePrev: function() {
//     actions.togglePrev();
//   },
//   toggleNext: function() {
//     actions.toggleNext();
//   },
//   render: function() {
//     return (
//       <div className="controls">
//         <div className="toggle toggle--prev" onClick={this.togglePrev}>Prev</div>
//         <div className="toggle toggle--next" onClick={this.toggleNext}>Next</div>
//       </div>
//     );
//   }
// });
//
// export default class Controls extends Component {
//     constructor (props) {
//         super(props)
//
//         this.togglePrev = this.togglePrev.bind(this)
//         this.toggleNext = this. toggleNext.bind(this)
//     }
//
//     togglePrev() {
//         console.log("togglePrev runs");
//         var current = this.state.currentSlide;
//         var next = current + 1;
//         if (next > state.data.length - 1) {
//           next = 0;
//       }
//         this.setState({ currentSlide: next })
//     }
//
//     toggleNext() {
//         console.log("toggleNext runs");
//         var current = this.state.currentSlide;
//         var prev = current - 1;
//         if (prev < 0) {
//           prev = state.data.length - 1;
//         }
//         this.setState({ currentSlide: prev})
//     }
//
//     render() {
//         return (
//             <div className="controls">
//               <div className="toggle toggle--prev" onClick={this.togglePrev}>Prev</div>
//               <div className="toggle toggle--next" onClick={this.toggleNext}>Next</div>
//             </div>
//         )
//     }
// }
//
// // ===================================================================
//
// var Pagination = React.createClass({
//   render: function() {
//     var paginationNodes = this.props.data.map(function (paginationNode, index) {
//       return (
//         <Pager id={paginationNode.id} key={paginationNode.id} title={paginationNode.title}  />
//       );
//     });
//     return (
//       <div className="pagination">
//         {paginationNodes}
//       </div>
//     );
//   }
// });
//
// var Pager = React.createClass({
//   toggleSlide: function() {
//     actions.toggleSlide(this.props.id);
//   },
//   render: function() {
//     return (
//       <span className="pager" onClick={this.toggleSlide}>{this.props.title}</span>
//     );
//   }
// });
//
// var EmptyMessage = React.createClass({
//   render: function() {
//     return (
//       <div className="empty-message">No Data</div>
//     );
//   }
// });
//
// function render(state) {
//   var hasData = state.data.length > 0;
//   var component;
//   if (hasData) {
//     component = <Slideshow data={state.data} />;
//   }
//   else {
//     component = <EmptyMessage />;
//   }
//   React.render(
//     component,
//     document.getElementById('app')
//   );
// }
//
// render(state);
//
// setTimeout(function() {
//   state.data = data;
//   render(state);
// }, 1000)
//
//
//
//
//     // Cart is a child of this component so that Cart can recieve info about what is being selected and render it right away. However, we may wish to store the user selections in a variable rather than in state or something I need a break.
//
//
//
//
// /*
// So. Carousel from scratch...
//
// It is multi-bits.
// It could be an array.
// carousel is made of frames
// each frame is a new question
// arrow buttons on sides should switch questions
// shuold be able to go back and forth
// preferably, when you go back a frame, your answer is reset.
// So each question answered starts with this.setState({answer to this: null})
// and ends with this.setState({ answer to this: user answer})
// so each qq could be a function. Or one function could create all the questions maybe?
// anyway, that way when you go back to a previous question, answer to this= null. Or not. Maybe you can just reselect it and it'll change it.
// Then when you finish the form your state is stored in an immutable variable.
// -- aside: can you store an array in state? And just push items to the state array? Is that bad practice? What8r.
// So back to the arrows and navigation.
// The arrows need to know two things:
// one: they need to know where you are currently
// two: they need to know what's next/previous
// Arrows need to be able to point to the previous or next question and say "render this one now"
// Maybe better than state being an array is state being an object?
// this.state = {
//     answers: {
//         answer01: null,
//         answer02: null,
//         answer03: null,
//         answer04: null
//     }
// }
//
// Questions live in a Questions.js?
//
// */
//
// // v v v  this creates infinite function ("max callstack size exceeded")
// // why?
// //
//     // setQuestion(question) {
//     //     this.setState({ question })
//     // }
//     //
//     // renderQuestion() {
//     //     this.setState({ question: questions.Question01})
//     //     if (!this.state.question) {
//     //         return;
//     //     }
//     //
//     //     return (
//     //         <div className="question">
//     //             {this.state.question}
//     //         </div>
//     //     );
//     // }
//     //
//     // render() {
//     //     console.log(questions.Question01);
//     //     console.log(this.state.question);
//     //     return (
//     //         <div className="cart-and-carousel">
//     //
//     //             <Cart selectedU={this.props.selectedU}/>
//     //             {/* {this.renderQuestion()} */}
//     //             <div className="questions">
//     //                 <div className="question-box">
//     //                     <div className="question">
//     //                         {this.renderQuestion()}
//     //                     </div>
//     //                     <div className="question-spacer"></div>
//     //                     <div className="question">
//     //
//     //                     </div>
//     //                     <div className="question-spacer"></div>
//     //                     <div className="question">
//     //
//     //                     </div>
//     //                     <div className="question-spacer"></div>
//     //                     <div className="question">
//     //
//     //                     </div>
//     //                     {/* <Waypoint
//     //                         onEnter={this.setQuestion(questions.Question01)}
//     //                         onLeave={this.setQuestion('')}
//     //                     /> */}
//     //                 </div>
//     //             </div>
//     //
//     //         </div>
//     //     )
//     // }
