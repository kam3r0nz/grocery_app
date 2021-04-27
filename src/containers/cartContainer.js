import React from 'react'
import { connect } from 'react-redux'

class CartContainer extends React.Component {
    
    render() {
        return (
            <h1>This is the cart</h1>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CartContainer)