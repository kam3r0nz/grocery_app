import React from 'react'

class CartList extends React.Component {

    listCart = () => {
        if (this.props.user.carts === null || this.props.user.length === 0) {
            return <p>Your cart is currently empty.</p>
        } else {
            return <div>{this.props.user.carts.map(cart => cart.products)}</div>
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