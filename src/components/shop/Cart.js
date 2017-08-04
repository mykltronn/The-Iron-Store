import React, { Component } from 'react';

export default class Cart extends Component {



    render() {
        let U = this.props.selectedU
        return (
            <div className="cart">
                <img className="cart-image" src={U.image_url}/>
                <h3>{U.title}</h3>
                <ul className="cart-options-ul">
                    <li>Friends: {this.props.friends}</li>
                    <li>Likes: {this.props.likes}</li>
                    <li>Comments: {this.props.comments}</li>
                </ul>
            </div>
        )
    }
}
