import React from 'react'

class CartList extends React.Component {

    listCart = () => {
        if (this.props.user.cart === null) {
            return <p>Your cart is currently empty.</p>
        } 
    }

    render() {
        return (
            < >
            {this.listCart()}
            </ >
        )
    }
}

export default CartList