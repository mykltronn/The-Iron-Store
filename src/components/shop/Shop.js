import React, { Component } from 'react';
// import styles
import './styles/shop.css'
// import data
import { NuUData } from '../../data/NuUData.js'
// import children
import ProductCard from './ProductCard.js';
import OptionSlider from './slider/OptionSlider.js'



export default class Shop extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.state = {
            selectedU: null,
        }
    }

    handleClick(event) {
        for(let i=0; i < NuUData.results.length; i++){
            if(event.target.id == NuUData.results[i].id) {
                this.setState({ selectedU: NuUData.results[i] })
            }
        }
    }



    render() {
        if(this.state.selectedU) {
            return (
                <div>
                    <OptionSlider selectedU={this.state.selectedU}/>
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
