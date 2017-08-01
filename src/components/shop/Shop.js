import React, { Component } from 'react';
// import styles
import './styles/shop.css'
// import children
// import ProductCard from './ProductCard.js';
// import Cart from './Cart.js';
import OptionsCarousel from './OptionsCarousel.js';


export default class Shop extends Component {

    render() {
        return (
            <div className="shop-component">
                <OptionsCarousel />
            </div>

        )
    }
}
