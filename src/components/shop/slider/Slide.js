import React, { Component } from 'react'

export default class Slide extends Component {

    getAnswer(event) {
        this.props.getOption(this.props.label, event.target.value)
    }

    render() {

        return (
            <div className={"slide" + ((this.props.active === true) ? ' slide--active' : '')}>
                <h2 className="slide-title">{this.props.title}</h2>
                <form>
                    <label className="option-label">{this.props.label}</label>
                    {this.props.options.map(option => {
                        return (
                            <div className="button-label-div" key={option}>
                                <span className="radio-button-label">{option}</span>
                                <input onChange={this.getAnswer.bind(this)} className="radio-button"  type="radio" name="button" value={option}/>
                            </div>
                        )
                    })}
                </form>
            </div>
        );
    }
}
