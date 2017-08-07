import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink activeClassName="selected" className="nav-link" exact to="/">home</NavLink>
            <NavLink activeClassName="selected" className="nav-link" exact to="/shop">shop</NavLink>
            <NavLink activeClassName="selected" className="nav-link" exact to="/reviews">reviews</NavLink>
        </nav>
    )
}

export default Navbar
