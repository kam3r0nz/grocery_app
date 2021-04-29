import React from 'react'

class CartList extends React.Component {

    componentDidMount() {
        if (this.props.user) {
            this.props.fetchCarts(this.props.user.id)
        }
    }

    listProducts = () => {
        return this.props.cart.products.map(product => 
            <div key={product.id} className="product-card">
                <img className="product-image" src={product.image} alt={product.name}/>{product.name}<br/> 
                Price: ${product.price}<br/> 
                <button className="add-cart-btn" onClick={() => this.handleOnClick(product)}>Remove From Cart</button>
            </div>)
    }

    listCart = () => {
        if (this.props.user.cart === null || this.props.user.length === 0) {
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