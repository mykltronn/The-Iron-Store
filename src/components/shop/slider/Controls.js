import React, { Component } from 'react'

export default class Controls extends Component {
    constructor (props) {
        super(props)

        this.togglePrev = this.togglePrev.bind(this)
        this.toggleNext = this. toggleNext.bind(this)

        this.state = {
            beginning: false,
            end: false,
        }
    }

    toggleNext() {
        this.setState({ beginning: false, end: false})
        var current = this.props.slide;
        var next = current + 1;
        console.log(current);
        if (current === this.props.data.length - 1) {
            this.setState({ end: true })
        }
        else {
            this.props.changeSlide(next)
        }

    }

    togglePrev() {
        this.setState({ beginning: false, end: false})
        var current = this.props.slide;
        var prev = current - 1;
        console.log(current);
        if (current === 0) {
            prev = this.props.data.length - 1;
            this.setState({ beginning: true })
        }
        else {
            this.props.changeSlide(prev)
        }

    }

    render() {
        console.log(this.props.slide);
        let prevButton = <div className="toggle toggle--prev" onClick={this.togglePrev}>Prev</div>
        let nextButton = <div className="toggle toggle--next" onClick={this.toggleNext}>Next</div>

        if(this.state.beginning){
            return (
                <div className="controls">
                  {nextButton}
                </div>
            )
        }
        if(this.state.end) {
            return (
                <div className="controls">
                  {prevButton}
                </div>
            )
        }
        return (
            <div className="controls">
              {prevButton}
              {nextButton}
            </div>
        )
    }
}
