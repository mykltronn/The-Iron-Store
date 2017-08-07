import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Slide extends Component {

    getAnswer(event) {
        this.props.getOption(this.props.ident, event.target.value, event.target.id)
    }

    render() {
        return (
            <div className={"slide" + (this.props.active ? ' slide--active' : '')}>
                <form>
                    <label className="option-label">{this.props.label}</label>
                    {this.props.options.map(option => {
                        return (
                            <div className="button-label-div" key={option.option}>
                                <span className="radio-button-label">{option.option}</span>
                                <input onChange={this.getAnswer.bind(this)} className="radio-button"  type="radio" name="button" value={option.option} id={option.price}/>
                                <span>{option.price}</span>
                            </div>
                        )
                    })}
                    <span className={"checkout-button" + (this.props.checkout ? ' checkout-button--active' : '')} onClick={this.props.checkOut} >Checkout</span>
                </form>
            </div>
        );
    }
}
