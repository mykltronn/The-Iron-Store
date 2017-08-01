import React, { Component } from 'react';
import Cart from './Cart.js'

export default class OptionsCarousel extends Component {

    // Cart is a child of this component so that Cart can recieve info about what is being selected and render it right away. However, we may wish to store the user selections in a variable rather than in state or something I need a break.

    render() {
        return (
            <div className="cart-and-carousel">
                <Cart selectedU={this.props.selectedU}/>
                <div className="options-carousel">
                    <h1>Options for {this.props.selectedU.title}</h1>
                </div>
            </div>
        )
    }
}



/*
Screw this whole mess and screw bootstrap v v v


<div>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
    <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
            <form className="form">
                <label>Friends/Followers?</label><br/>
                <input type="radio" value="0-50">0-50</input>
                <input type="radio" value="50-100">50-100</input>
                <input type="radio" value="100-300">100-300</input>
                <input type="radio" value="300-500">300-500</input>
                <input type="radio" value="500-1000">500-1000</input>
                <input type="radio" value="1000+">1000+</input>
            </form>
        </div>
        <div className="carousel-item">
            <form className="form">
                <label>Comments/Tweets/Posts per day</label><br/>
                <input type="radio" value="1">1</input>
                <input type="radio" value="2">2</input>
                <input type="radio" value="3-5">3-5</input>
                <input type="radio" value="5-10">5-10</input>
                <input type="radio" value="10+">10+</input>
            </form>
        </div>
        <div className="carousel-item">
            <form className="form">
                <label>Another fake question</label><br/>
                <input type="radio" value="Fake1">Fake Option 1</input>
                <input type="radio" value="Fake2">Fake Option 2</input>
                <input type="radio" value="Fake3">Fake Option 3</input>
            </form>
        </div>
    </div>

    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span aria-hidden="true" id="control-chevron">
            <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
        </span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span aria-hidden="true" id="control-chevron">
            <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
        </span>
        <span className="sr-only">Next</span>
    </a>
</div>
</div>
*/
