import React from 'react';
import { NavLink } from 'react-router-dom';

const TempHeader = (props) => {
    return (
        <nav>
            <NavLink activeClassName="selected" className="nav-link" exact to="/">Splash</NavLink>
            <NavLink activeClassName="selected" className="nav-link" exact to="/shop">Shop</NavLink>
            <NavLink activeClassName="selected" className="nav-link" exact to="/checkout">Checkout</NavLink>
            <NavLink activeClassName="selected" className="nav-link" exact to="/reviews">Reviews</NavLink>
            <NavLink activeClassName="selected" className="nav-link" exact to="/admin">Admin</NavLink>
        </nav>
    )
}

export default TempHeader
