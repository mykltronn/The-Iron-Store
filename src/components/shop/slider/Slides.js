import React, { Component } from 'react';
import Slide from './Slide.js'

export default class Slides extends Component {
    constructor(props) {
        super(props)
    }

    // this component needs access to "Controls" state.
    // this.state.currentSlide needs to be changed by Controls.js

    render() {
        console.log(this.props.data);
        let current = this.props.slide
        let slidesNodes = this.props.data.map((slideNode, index) => {
            console.log("current is: " + current);
            console.log("index is: " + index);
            let isActive = current == index;
            return (
                <Slide active={isActive} key={slideNode.id} title={slideNode.title} label={slideNode.label} options={slideNode.options} />
                )
            })

        return (
            <div className="slides">
                {slidesNodes}
            </div>
      );
    }
}
