import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

export default class PageLayout extends Component {
    render(){
        return (
            <Header />
            {this.props.children}
            <Footer />
        )
    }
}
