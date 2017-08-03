import React, { Component } from 'react'

export default class Slide extends Component {
    render() {
        return (
            <div className={"slide" + ((this.props.active === true) ? ' slide--active' : '')}>
                <h2 className="slide-title">{this.props.title}</h2>
                <form>
                    <label className="option-label">{this.props.label}</label>
                    {this.props.options.map(option => {
                        return (
                            <div className="button-label-div" key={option}>
                                <input className="radio-button"  type="radio" value={option}/><span className="radio-button-label">{option}</span>
                            </div>
                        )
                    })}
                </form>
            </div>
        );
    }
}
