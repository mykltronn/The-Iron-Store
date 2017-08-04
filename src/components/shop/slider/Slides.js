import React, { Component } from 'react';
import Slide from './Slide.js'

export default class Slides extends Component {
    // slides will need to fetch from the options list endpoint, chage line 8
    render() {
        let current = this.props.slide
        let slidesNodes = this.props.data.map((slideNode, index) => {
            let isActive = current == index;
            return (
                <Slide getOption={this.props.getOptions} active={isActive} key={slideNode.id} ident={slideNode.id} label={slideNode.label} options={slideNode.options} />
                )
            })

        return (
            <div className="slides">
                {slidesNodes}
            </div>
      );
    }
}
