import React from 'react';
import { NavLink } from 'react-router-dom';

import './TempHeader.css'

const TempHeader = (props) => {
    return (
        <div>
            <nav>
                <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
                <NavLink activeClassName="selected" className="nav-link" exact to="/shop">Shop</NavLink>
                <NavLink activeClassName="selected" className="nav-link" exact to="/reviews">Reviews</NavLink>
                <NavLink activeClassName="selected" className="nav-link" exact to="/admin">Admin</NavLink>
            </nav>
            <div className= "nav-indicator-tab"> Menu ▲ </div>
            {props.children}
        </div>
    )
}

export default TempHeader
