import React, { Component } from 'react'

export default class Controls extends Component {
    constructor (props) {
        super(props)

        this.togglePrev = this.togglePrev.bind(this)
        this.toggleNext = this. toggleNext.bind(this)

        this.state = {
            currentSlide: 0
        }
    }

    togglePrev() {
        console.log("togglePrev runs");
        var current = this.state.currentSlide;
        var next = current + 1;
        if (next > this.props.data.length - 1) {
            next = 0;
        }
        this.setState({ currentSlide: next })
    }

    toggleNext() {
        console.log("toggleNext runs");
        var current = this.state.currentSlide;
        var prev = current - 1;
        if (prev < 0) {
            prev = this.props.data.length - 1;
        }
        this.setState({ currentSlide: prev})
    }

    render() {
        return (
            <div className="controls">
              <div className="toggle toggle--prev" onClick={this.togglePrev}>Prev</div>
              <div className="toggle toggle--next" onClick={this.toggleNext}>Next</div>
            </div>
        )
    }
}
