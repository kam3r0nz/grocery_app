import React from 'react'
import Product from './product'
import RemoveFromCartButton from './removeFromCartButton'
import CheckoutButton from './checkoutButton'

class CartList extends React.Component {

    constructor() {
        super()
        this.state = {
            showCheckout: false
        }
    }

    handleOnClick = (product) => {
        this.props.removeFromCart(product)
    }

    handleOnCheckout = () => {
        this.setState({
            showCheckout: true
        })
    }

    listProducts = () => {
        return this.props.cart.products.map(product => 
            <div key={product.id} className="product-card">
                <Product key={product.id} product={product} name={product.name} image={product.image} price={product.price}/><br/>
                <div onClick={() => this.handleOnClick(product)}>
                    <RemoveFromCartButton/>
                </div>
            </div>
            )
    }

    listCart = () => {
        if (this.props.cart.products.length === 0) {
            return <p className="p-text">Your cart is currently empty.</p>
        } else {
            return <div>{this.listProducts()}</div>
        }
    }

    render() {
        return (
            < >
            <h3>Total: ${Math.round(100*this.props.cart.total)/100} <div onClick={this.handleOnCheckout}><CheckoutButton/></div></h3>
            {this.listCart()}
            </ >
        )
    }
}

export default CartList