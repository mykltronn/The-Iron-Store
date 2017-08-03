import React, { Component } from 'react';
import Slide from './Slide.js'

export default class Slides extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentSlide: 0
        }
    }

    // this component needs access to "Controls" state.
    // this.state.currentSlide needs to be changed by Controls.js

    render() {
        console.log(this.props.data);
        let current = this.state.currentSlide
        let slidesNodes = this.props.data.map((slideNode, index) => {
            console.log("current is: " + current);
            console.log("index is: " + index);
            let isActive = current == index;
            return (
                <Slide active={isActive} key={slideNode.id} imagePath={slideNode.imagePath} imageAlt={slideNode.imageAlt} title={slideNode.title} subtitle={slideNode.subtitle} text={slideNode.text} action={slideNode.action} actionHref={slideNode.actionHref} />
                )
            })

        return (
            <div className="slides">
                {slidesNodes}
            </div>
      );
    }
}
