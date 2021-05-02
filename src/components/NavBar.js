import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

    showCartLink() {
        if(this.props.user.length !== 0) {
            return <NavLink className="align-right" to="/cart">Cart</NavLink>
        }
    }

    render() {
        return (
            <div id="navbar">
                <NavLink to="/">Home</NavLink> &nbsp;
                <NavLink to="/products">Products</NavLink> &nbsp;
                {this.showCartLink()}
            </div>
        )
    }
}

export default NavBar