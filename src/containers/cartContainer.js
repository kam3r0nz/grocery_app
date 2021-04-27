import React from 'react'
import { connect } from 'react-redux'
import CartList from '../components/cartList'

class CartContainer extends React.Component {
    
    render() {
        return (
            < >
            <h1>Cart</h1>
            <CartList cart={this.props.cart}/>
            </ >
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CartContainer)