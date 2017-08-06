import React, { Component } from 'react';
import TempHeader from '../TempHeader/TempHeader.js'
export default class ProductCard extends Component {

    render() {
        let NuU = this.props.NuU
        return (
            <div className="product-card" id={NuU._id} onClick={this.props.handleClick}>
                <img className="product-card-image" id={NuU._id} src={NuU.image_url}/>
                <ul className="product-card-ul" id={NuU._id}>
                    <li className="product-card-title" id={NuU._id}>{NuU.title}</li>
                    <li id={NuU._id}>{NuU.description}</li>
                    <li id={NuU._id}>{NuU.price}</li>
                </ul>
            </div>
        )
    }
}
