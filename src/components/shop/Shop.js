import React, { Component } from 'react';
// import styles
import './styles/shop.css'
// import children
import ProductCard from './ProductCard.js';
import OptionSlider from './slider/OptionSlider.js'
import TempHeader from '../TempHeader/TempHeader.js'



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
        <div className="shop-body-wrapper move-to">
            <TempHeader />
            <h4 className="shop-title-desc">Revitalizing your online presence begins with deciding who you want to be.  You can be anyone you want to be.  Now is your chance to re-create yourself.</h4>
            <h1 className="shop-title" > Make your selection from these options </h1>
            <div className="shop-component">
                {productCard}
            </div>
        </div>

        )
    }
}
