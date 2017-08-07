import React from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js';

const FullLayout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}

export default FullLayout
