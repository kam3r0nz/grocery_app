import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

    showCartProductCount() {
        if(this.props.cart.products.length !== 0) {
            return this.props.cart.products.length
        }
    }

    showUserLinks() {
        if(this.props.user.length !== 0) {
            return < > <NavLink to="/products">Products</NavLink> &nbsp; <NavLink className="align-right" to="/cart">Cart <span id="cart-count">{this.showCartProductCount()}</span></NavLink> </ >
        }
    }

    render() {
        return (
            <div id="navbar">
                <NavLink to="/">Home</NavLink> &nbsp;
                {this.showUserLinks()}
            </div>
        )
    }
}

export default NavBar