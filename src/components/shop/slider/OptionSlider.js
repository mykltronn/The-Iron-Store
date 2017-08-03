import React, { Component } from 'react'
import Cart from '../Cart.js'
import Slides from './Slides.js'
import { Pagination } from './Pagination.js'
import Controls from './Controls.js'
import { questions } from './QuestionList.js'

export default class OptionsSlider extends Component {
    constructor (props) {
        super(props)

        this.state= {
            currentSlide: 0
        }
    }
    changeSlide(slide) {
        this.setState({ currentSlide: slide })
    }

    render() {
        return (
            <div className="slideshow">
                <Cart selectedU={this.props.selectedU}/>
                <Slides data={questions} slide={this.state.currentSlide} />
                {/* <Pagination data={questions} /> */}
                <Controls data={questions} slide={this.state.currentSlide} changeSlide={this.changeSlide.bind(this)} />
            </div>
        );
    }
}
