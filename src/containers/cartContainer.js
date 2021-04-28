import React from 'react'
import { connect } from 'react-redux'
import CartList from '../components/cartList'

class CartContainer extends React.Component {
    
    render() {
        return (
            < >
            <h1>Cart</h1>
            <CartList user={this.props.user}/>
            </ >
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(CartContainer)