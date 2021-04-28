import React from 'react'

class CartList extends React.Component {

    listCart = () => {
        if (this.props.cart.length === 0) {
            return <p>Your cart is currently empty.</p>
        } else {
            return this.props.cart.map(product => <div key={product.id} className="product-card">
            <img className="product-image" src={product.image} alt={product.name}/>{product.name}<br/> 
            Price: ${product.price}<br/> 
            <button className="add-cart-btn" onClick={() => this.handleOnClick(product)}>Remove from Cart</button>
            </div>)
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