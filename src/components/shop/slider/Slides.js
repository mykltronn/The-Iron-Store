import React, { Component } from 'react';
import Slide from './Slide.js'

export default class Slides extends Component {
    render() {
        let current = this.props.slide
        let slidesNodes = this.props.data.map((slideNode, index) => {
            let isActive = current == index;
            return (
                <Slide getOption={this.props.getOptions} active={isActive} key={slideNode.id} title={slideNode.title} label={slideNode.label} options={slideNode.options} />
                )
            })

        return (
            <div className="slides">
                {slidesNodes}
            </div>
      );
    }
}
