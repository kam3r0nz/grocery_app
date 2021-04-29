import React from 'react'

class CartList extends React.Component {

    listProducts = () => {
        return this.props.cart.products.map(product => 
            <div key={product.id} className="product-card">
                <img className="product-image" src={product.image} alt={product.name}/>{product.name}<br/> 
                Price: ${product.price}<br/> 
                <button className="add-cart-btn" onClick={() => this.handleOnClick(product)}>Remove From Cart</button>
            </div>)
    }

    listCart = () => {
        if (this.props.cart === null || this.props.cart.length === 0 || this.props.user.length === 0) {
            return <p>Your cart is currently empty.</p>
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