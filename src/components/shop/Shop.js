import React, { Component } from 'react';
// import styles
import './styles/shop.css'
// import children
// import ProductCard from './ProductCard.js';
// import Cart from './Cart.js';
import OptionsCarousel from './OptionsCarousel.js';


export default class Shop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedU: "Fireman",
        }
    }



    render() {
        let renderMe;
        if(this.state.selectedU) {
            renderMe = <OptionsCarousel selectedU={this.state.selectedU}/>
        }
        // let productCard = NuUData.map((NuU) => {
        //     return <ProductCard key={} NuU={} />
        //     })

        return (
            <div className="shop-component">
                {renderMe}
            </div>

        )
    }
}
