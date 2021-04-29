import React from 'react'
import { connect } from 'react-redux'
import CartList from '../components/cartList'
import { fetchCart } from '../actions/cartActions'

class CartContainer extends React.Component {

    componentDidMount() {
        if (this.props.user.length !== 0) {
            this.props.fetchCart(this.props.user.id)
        }
    }
    
    render() {
        return (
            < >
            <h1>Cart</h1>
            <CartList user={this.props.user} cart={this.props.cart}/>
            </ >
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { fetchCart })(CartContainer)