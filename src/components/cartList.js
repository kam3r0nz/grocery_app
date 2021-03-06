import React from 'react'
import Product from './product'
import RemoveFromCartButton from './removeFromCartButton'
import Checkout from './checkout'
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
        if (this.state.showCheckout === false) {
            this.setState({
                showCheckout: true
            })
        } else {
            this.setState({
                showCheckout: false
            })
        }
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

    showCheckoutButton = () => {
        if (this.props.cart.total > 0) {
            return <div onClick={this.handleOnCheckout}><CheckoutButton/></div>
        }
    }

    showCheckoutForm = () => {
        if (this.state.showCheckout === true) {
            return <Checkout/>
        }
    }

    render() {
        return (
            < >
            <h3>Total: ${Math.round(100*this.props.cart.total)/100} {this.showCheckoutButton()}</h3>
            {this.showCheckoutForm()}
            {this.listCart()}
            </ >
        )
    }
}

export default CartList