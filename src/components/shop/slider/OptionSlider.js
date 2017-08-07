import React, { Component } from 'react'
import Cart from '../Cart.js'
import Slides from './Slides.js'
import { Pagination } from './Pagination.js'
import Controls from './Controls.js'
import { questions } from './QuestionList.js'
import Checkout from '../../checkout/Checkout.js'

export default class OptionsSlider extends Component {
    constructor (props) {
        super(props)

        this.getOptions = this.getOptions.bind(this)
        this.checkOut = this.checkOut.bind(this)
        this.state= {
            currentSlide: 0,
            likes   : '',
            friends : '',
            comments: '',
            posts   : '',
            lPrice  : '',
            fPrice  : '',
            cPrice  : '',
            pPrice  : '',
            checkedOut: false,
            questions:[]
        }
    }

    componentWillMount() {
        fetch("https://intense-river-24910.herokuapp.com/api/options-labels")
        .then(resp => resp.json())
        .then(resp => {
          let optionAndLabels = resp.results.questions;
          this.setState({questions: optionAndLabels})
        })
    }

    changeSlide(slide) {
        this.setState({ currentSlide: slide })
    }

    getOptions(question, answer, price) {
        if (question === this.state.questions[0].id) {
            this.setState({ friends: answer, fPrice: price })

        }
        if (question === this.state.questions[1].id) {
            this.setState({ likes: answer, lPrice: price})
        }
        if (question === this.state.questions[2].id) {
            this.setState({ comments: answer, cPrice: price })
        }
        if (question === this.state.questions[3].id) {
            this.setState({ posts: answer, pPrice: price })
        }
    }

    checkOut() {
        this.setState({ checkedOut: true })
    }

    render() {
      // let object = this.state;
      //   if(this.state.checkedOut) {
      //     console.log(object);
      //       return(
      //           <div>
      //               <Checkout selectedU={this.props.selectedU} likes={this.state.likes} lPrice={this.state.lPrice} friends={this.state.friends} fPrice={this.state.fPrice} comments={this.state.comments} cPrice={this.state.cPrice} posts={this.state.posts} pPrice={this.state.pPrice}/>
      //           </div>
      //       )
      //   }
        return (
          <div>
            {this.state.questions.length > 0 ? (
          <div>
            {this.state.checkedOut != true ? (
              <div className="cart-slider">
                  <Cart selectedU={this.props.selectedU} likes={this.state.likes} lPrice={this.state.lPrice} friends={this.state.friends} fPrice={this.state.fPrice} comments={this.state.comments} cPrice={this.state.cPrice} posts={this.state.posts} pPrice={this.state.pPrice}/>
                  <div className="slider">
                      <Slides data={this.state.questions} slide={this.state.currentSlide} getOptions={this.getOptions} checkOut={this.checkOut}/>
                      {/* <Pagination data={questions} /> */}
                      <Controls data={this.state.questions} slide={this.state.currentSlide} changeSlide={this.changeSlide.bind(this)} />
                  </div>
              </div>
          ) : (
            <div>
                <Checkout selectedU={this.props.selectedU} likes={this.state.likes} lPrice={this.state.lPrice} friends={this.state.friends} fPrice={this.state.fPrice} comments={this.state.comments} cPrice={this.state.cPrice} posts={this.state.posts} pPrice={this.state.pPrice}/>
            </div>
          )}

          </div>

        ) : (
          <div>
            Loading
          </div>
          )}
        </div>
        );
    }
}
