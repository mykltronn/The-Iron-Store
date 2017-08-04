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
            likes: '',
            friends: '',
            comments: ''
        }
    }

    changeSlide(slide) {
        this.setState({ currentSlide: slide })
    }

    getOptions(question, answer) {
        if (question === 'How many likes?') {
            this.setState({ likes: answer })
        }
        if (question === 'How many friends?') {
            this.setState({ friends: answer})
        }
        if (question === 'How many comments?') {
            this.setState({ comments: answer })
        }
    }

    render() {
        return (
            <div className="cart-slider">
                <Cart selectedU={this.props.selectedU} likes={this.state.likes} friends={this.state.friends} comments={this.state.comments}/>
                <div className="slider">
                    <Slides data={questions} slide={this.state.currentSlide} getOptions={this.getOptions}/>
                    {/* <Pagination data={questions} /> */}
                    <Controls data={questions} slide={this.state.currentSlide} changeSlide={this.changeSlide.bind(this)} />
                </div>
            </div>
        );
    }
}
