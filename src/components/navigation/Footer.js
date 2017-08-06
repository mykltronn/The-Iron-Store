import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <NavLink activeClassName="selected" className="nav-link" to="/admin">admin</NavLink>
        </footer>
    )
}

export default Footer
