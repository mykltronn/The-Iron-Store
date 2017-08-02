import React, { Component } from 'react';

export default class ProductCard extends Component {

    render() {
        let NuU = this.props.NuU
        return (
            <div className="product-card" id={NuU.id} onClick={this.props.handleClick}>
                <img id={NuU.id} src={NuU.image_url}/>
                <ul id={NuU.id}>
                    <li id={NuU.id}>{NuU.title}</li>
                    <li id={NuU.id}>{NuU.description}</li>
                    <li id={NuU.id}>{NuU.price}</li>
                </ul>
            </div>
        )
    }
}
