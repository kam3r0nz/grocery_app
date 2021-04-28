import React from 'react'

class CartList extends React.Component {

    componentDidMount() {
        if (this.props.user) {
            this.props.fetchCarts(this.props.user.id)
        }
    }

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