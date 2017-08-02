import React, { Component } from 'react';
// import styles
import './styles/shop.css'
// import data
import { NuUData } from '../../data/NuUData.js'
// import children
import ProductCard from './ProductCard.js';
import OptionsCarousel from './OptionsCarousel.js';



export default class Shop extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.state = {
            selectedU: null,
        }
    }

    handleClick(event) {
        console.log(event.target.id);
        console.log(NuUData.results[0].id);
        for(let i=0; i < NuUData.results.length; i++){
            if(event.target.id == NuUData.results[i].id) {
                this.setState({ selectedU: NuUData.results[i] })
            }
        }
        // this.setState({ selectedU: event.target.id})
    }



    render() {
        if(this.state.selectedU) {
            return (
                <div>
                    <OptionsCarousel selectedU={this.state.selectedU}/>
                </div>
            )
        }
        let productCard = NuUData.results.map((NuU) => {
            return <ProductCard key={NuU.id} NuU={NuU} handleClick={this.handleClick}/>
            })

        return (
            <div className="shop-component">
                {productCard}
            </div>

        )
    }
}
