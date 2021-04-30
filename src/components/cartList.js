import React from 'react'

class CartList extends React.Component {

    handleOnClick = (product) => {
        

    }

    listProducts = () => {
        const cartProducts = this.props.cart[0]
        return cartProducts.products.map(product => 
            <div key={product.id} className="product-card">
                <img className="product-image" src={product.image} alt={product.name}/><h6>{product.name}</h6>
                Price: ${product.price}<br/> 
                <button className="cart-btn" onClick={() => this.handleOnClick(product)}>Remove From Cart</button>
            </div>)
    }

    listCart = () => {
        if (this.props.cart === null || this.props.cart.length === 0 || this.props.user.length === 0) {
            return <p className="p-text">Your cart is currently empty.</p>
        } else {
            return <div>{this.listProducts()}</div>
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