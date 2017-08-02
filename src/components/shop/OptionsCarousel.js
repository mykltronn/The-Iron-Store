import React, { Component } from 'react';
import Cart from './Cart.js'
// import * as Questions from './Questions.js'

export default class OptionsCarousel extends Component {

    // Cart is a child of this component so that Cart can recieve info about what is being selected and render it right away. However, we may wish to store the user selections in a variable rather than in state or something I need a break.

/*
So. Carousel from scratch...

It is multi-bits.
It could be an array.
carousel is made of frames
each frame is a new question
arrow buttons on sides should switch questions
shuold be able to go back and forth
preferably, when you go back a frame, your answer is reset.
So each question answered starts with this.setState({answer to this: null})
and ends with this.setState({ answer to this: user answer})
so each qq could be a function. Or one function could create all the questions maybe?
anyway, that way when you go back to a previous question, answer to this= null. Or not. Maybe you can just reselect it and it'll change it.
Then when you finish the form your state is stored in an immutable variable.
-- aside: can you store an array in state? And just push items to the state array? Is that bad practice? What8r.
So back to the arrows and navigation.
The arrows need to know two things:
one: they need to know where you are currently
two: they need to know what's next/previous
Arrows need to be able to point to the previous or next question and say "render this one now"
Maybe better than state being an array is state being an object?
this.state = {
    answers: {
        answer01: null,
        answer02: null,
        answer03: null,
        answer04: null
    }
}

Questions live in a Questions.js?

*/


    render() {
        return (
            <div className="cart-and-carousel">

                <Cart selectedU={this.props.selectedU}/>

                <div className="options-carousel">
                    <h1>Options for {this.props.selectedU.title}</h1>
                    <form>
                        <label>Question 1</label><br/>
                        <input type="radio" name="q1" value="option1" />option 1<br/>
                        <input type="radio" name="q1" value="option2" />option 2<br/>
                        <input type="radio" name="q1" value="option3" />option 3<br/>
                    </form>

                    <form>
                        <label>Question 2</label><br/>
                        <input type="radio" name="q2" value="option1"/>option 1<br/>
                        <input type="radio" name="q2" value="option2"/>option 2<br/>
                        <input type="radio" name="q2" value="option3"/>option 3<br/>
                    </form>

                    <form>
                        <label>Question 3</label><br/>
                        <input type="radio" name="q3" value="option1"/>option 1<br/>
                        <input type="radio" name="q3" value="option2"/>option 2<br/>
                        <input type="radio" name="q3" value="option3"/>option 3<br/>
                    </form>
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
