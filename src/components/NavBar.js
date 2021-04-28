import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

    return <div id="navbar">
        <NavLink to="/">Home</NavLink> &nbsp;
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/products">Products</NavLink> &nbsp;
        <NavLink className="align-right" to="/cart">Cart</NavLink>
    </div>
}

export default NavBar