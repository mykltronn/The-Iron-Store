import React, { Component } from 'react'
import Cart from '../Cart.js'
import Slides from './Slides.js'
import { Pagination } from './Pagination.js'
import Controls from './Controls.js'
import { questions } from './QuestionList.js'

export default class OptionsSlider extends Component {

    render() {
        console.log(questions);
        return (
            <div className="slideshow">
                <Slides data={questions} />
                <Pagination data={questions} />
                <Controls data={questions}/>
            </div>
        );
    }
}
