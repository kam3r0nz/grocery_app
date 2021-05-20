import React from 'react'
import { connect } from 'react-redux'
import CartList from '../components/cartList'
import { removeFromCart } from '../actions/productActions'

class CartContainer extends React.Component {
    
    render() {
        return (
            < >
            <h1>Cart</h1>
            <CartList cart={this.props.cart} removeFromCart={this.props.removeFromCart}/>
            </ >
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user, cart: state.cart, products: state.products
    }
}

export default connect(mapStateToProps, { removeFromCart })(CartContainer)