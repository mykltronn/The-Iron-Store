import React, { Component } from 'react'

export default class Controls extends Component {
    constructor (props) {
        super(props)

        this.togglePrev = this.togglePrev.bind(this)
        this.toggleNext = this. toggleNext.bind(this)
    }

    // controls needs to know which slide we're currently on...

    toggleNext() {
        console.log("togglePrev runs");
        var current = this.props.slide;
        var next = current + 1;
        if (next > this.props.data.length - 1) {
            next = 0;
        }
        this.props.changeSlide(next)
    }

    togglePrev() {
        console.log("toggleNext runs");
        var current = this.props.slide;
        var prev = current - 1;
        if (prev < 0) {
            prev = this.props.data.length - 1;
        }
        this.props.changeSlide(prev)
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
