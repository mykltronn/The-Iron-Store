import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Slide extends Component {

    getAnswer(event) {
        this.props.getOption(this.props.ident, event.target.value, event.target.id)
    }

    render() {
        return (
            <div className={"slide" + (this.props.active ? ' slide--active' : '')}>
                <form className="form">
                  <h3 className="description_options">{this.props.description}</h3>
                  <div className="labelandOptions">
                    <label className="option-label">{this.props.label}</label>
                    <div className="input-form">
                    {this.props.options.map(option => {
                        return (
                          <div className="button-label-div-container">
                            <div className="button-label-div" key={option.option}>
                              </div>
                                <input onChange={this.getAnswer.bind(this)} className="radio-button"  type="radio" name="button" value={option.option} id={option.price}/>
                                <div className="labelradio">
                                <span className="radio-button-label">Amount: {option.option}</span>
                                <span className="price">Price: ${option.price}</span>
                                </div>
                            </div>
                        )
                    })}

                    <div className="images">
                      <div className="images-and-labels">
                      <label>Old U</label>
                      <img className="product_before" src={this.props.before} />
                      </div>
                      <div className="images-and-labels">
                      <label className="NuULabel">Nu U</label>
                      <img className="product_after" src={this.props.after} />
                      </div>
                    </div>
                    </div>
                    </div>


                    <span className={"checkout-button" + (this.props.checkout ? ' checkout-button--active' : '')} onClick={this.props.checkOut} >Checkout</span>
                </form>
            </div>
        );
    }
}
