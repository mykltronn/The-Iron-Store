import React, { Component } from 'react'

export default class Slide extends Component {
    render() {
        return (
            <div className={"slide" + ((this.props.active === true) ? 'slide--active' : '')}>
                <img src={this.props.imagePath} alt={this.props.imageAlt} />
                <h2>{this.props.title}</h2>
                <h3>{this.props.subtitle}</h3>
                <p>{this.props.text}</p>
                <a href={this.props.actionHref}>{this.props.action}</a>
            </div>
        );
    }
}
