import React, { Component } from 'react'
import Cart from '../Cart.js'
import Slides from './Slides.js'
import { Pagination } from './Pagination.js'
import Controls from './Controls.js'
import { questions } from './QuestionList.js'

export default class OptionsSlider extends Component {
    constructor (props) {
        super(props)

        this.getOptions = this.getOptions.bind(this)
        this.state= {
            currentSlide: 0,
            likes   : '',
            friends : '',
            comments: '',
            posts   : '',
            lPrice  : '',
            fPrice  : '',
            cPrice  : '',
            pPrice  : ''
        }
    }

    componentWillMount() {
        //fetch to the options uri
    }

    changeSlide(slide) {
        this.setState({ currentSlide: slide })
    }

    getOptions(question, answer, price) {
        console.log(question + " and also " + price);
        if (question === questions[0].id) {
            this.setState({ friends: answer, fPrice: price })

        }
        if (question === questions[1].id) {
            this.setState({ likes: answer, lPrice: price})
        }
        if (question === questions[2].id) {
            this.setState({ comments: answer, cPrice: price })
        }
        if (question === questions[3].id) {
            this.setState({ posts: answer, pPrice: price })
        }
    }

    render() {
        return (
            <div className="cart-slider">
                <Cart selectedU={this.props.selectedU} likes={this.state.likes} lPrice={this.state.lPrice} friends={this.state.friends} fPrice={this.state.fPrice} comments={this.state.comments} cPrice={this.state.cPrice} posts={this.state.posts} pPrice={this.state.pPrice}/>
                <div className="slider">
                    <Slides data={questions} slide={this.state.currentSlide} getOptions={this.getOptions}/>
                    {/* <Pagination data={questions} /> */}
                    <Controls data={questions} slide={this.state.currentSlide} changeSlide={this.changeSlide.bind(this)} />
                </div>
            </div>
        );
    }
}
