import React from 'react'
import { connect } from 'react-redux'
import CartList from '../components/cartList'
import { fetchCarts } from '../actions/cartActions'

class CartContainer extends React.Component {
    
    render() {
        return (
            < >
            <h1>Cart</h1>
            <CartList user={this.props.user} fetchCarts={this.props.fetchCarts}/>
            </ >
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { fetchCarts })(CartContainer)