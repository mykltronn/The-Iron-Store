import React, { Component } from 'react';

export default class Cart extends Component {



    render() {
        let U = this.props.selectedU
        return (
            <div className="cart">
                <img className="cart-image" src={U.image_url}/>
                <h3>{U.title}</h3>
                <ul className="cart-options-ul">
                  <div className="pricediv">
                    <li>Friends: {this.props.friends}</li> <span className="bluestuff">{this.props.fPrice}</span>
                    </div>
                    <div className="pricediv">
                    <li>Likes: {this.props.likes}</li> <span className="bluestuff">{this.props.lPrice}</span>
                    </div>
                    <div className="pricediv">
                    <li>Comments: {this.props.comments}</li> <span className="bluestuff">{this.props.cPrice}</span>
                    </div>
                    <div className="pricediv">
                    <li>Posts: {this.props.posts}</li> <span className="bluestuff">{this.props.pPrice}</span>
                    </div>
                </ul>
            </div>
        )
    }
}
