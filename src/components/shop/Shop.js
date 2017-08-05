import React, { Component } from 'react';
// import styles
import './styles/shop.css'
// import children
import ProductCard from './ProductCard.js';
import OptionSlider from './slider/OptionSlider.js'



export default class Shop extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.state = {
            selectedU: null,
            NuUData: []
        }
    }

    componentWillMount() {
        let url = "https://intense-river-24910.herokuapp.com/api/products"
        fetch(url).then(resp => resp.json())
            .then(resp => {
              console.log(resp);
                this.setState({ NuUData: resp.results})
            })
    }

    handleClick(event) {
        let NuUData = this.state.NuUData
        for(let i=0; i < NuUData.length; i++){
            if(event.target.id == NuUData[i]._id) {
                this.setState({ selectedU: NuUData[i] })
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
        let productCard = this.state.NuUData.map((NuU) => {
            return <ProductCard key={NuU._id} NuU={NuU} handleClick={this.handleClick}/>
            })

        return (
            <div className="shop-component">
                {productCard}
            </div>

        )
    }
}
