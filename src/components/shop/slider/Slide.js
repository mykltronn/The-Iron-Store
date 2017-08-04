import React, { Component } from 'react'

export default class Slide extends Component {

    getAnswer(event) {
        this.props.getOption(this.props.ident, event.target.value, event.target.id)
    }

    render() {

        return (
            <div className={"slide" + ((this.props.active === true) ? ' slide--active' : '')}>
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
                </form>
            </div>
        );
    }
}
