import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide.js'

export default class Slides extends Component {
    // slides will need to fetch from the options list endpoint, chage line 8 and 16
    render() {
        let slides;
        let qqLength = this.props.data.length

        if ((this.props.slide + 1) > (qqLength)) {
            slides =  (
                <span className="checkout-button" onClick={this.props.checkOut}>checkout</span>
            )
        }
        else {
            let current = this.props.slide
            slides = this.props.data.map((slide, index) => {
                let isActive = current == index;
                return (
                    <Slide getOption={this.props.getOptions} active={isActive} key={slide.id} ident={slide.id} label={slide.label} options={slide.options} />
                )
            })
        }

        return (
            <div className="slides">
                {slides}
            </div>
      );
    }
}
