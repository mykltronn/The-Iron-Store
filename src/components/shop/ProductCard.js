import React, { Component } from 'react';

export default class ProductCard extends Component {

    render() {
        let NuU = this.props.NuU
        return (
            <div className="product-card" id={NuU._id} onClick={this.props.handleClick}>
                <img id={NuU._id} src={NuU.image_url}/>
                <ul id={NuU._id}>
                    <li id={NuU._id}>{NuU.title}</li>
                    <li id={NuU._id}>{NuU.description}</li>
                    <li id={NuU._id}>{NuU.price}</li>
                </ul>
            </div>
        )
    }
}
