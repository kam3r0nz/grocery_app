import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends React.Component {

    showCartProductCount() {
        if(this.props.cart.products.length !== 0) {
            return this.props.cart.products.length
        }
    }

    showCartLink() {
        if(this.props.user.length !== 0) {
            return <NavLink className="align-right" to="/cart">Cart {this.showCartProductCount()}</NavLink>
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

const mapStateToProps = state => {
    return {
      user: state.user, cart: state.cart, products: state.products
    }
  
}

export default connect(mapStateToProps)(NavBar)