import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide.js'

export default class Slides extends Component {
    // slides will need to fetch from the options list endpoint, chage line 8 and 16
    render() {
        let slides;
        let current = this.props.slide
        let qqLength = this.props.data.length
        let checkout = false;
        if (current === qqLength-1) { checkout = true}

        slides = this.props.data.map((slide, index) => {
            let isActive = current == index;
            return (
                <Slide getOption={this.props.getOptions}
                  checkOut={this.props.checkOut}
                   active={isActive} ident={slide.id} key={slide.id} label={slide.label} before={slide.image_before} after={slide.image_after} description={slide.product_description} options={slide.options} checkout={checkout} />

            )})
        return (
            <div className="slides">
                {slides}
            </div>
      );
    }
}
