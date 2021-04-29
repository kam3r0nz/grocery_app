import React from 'react'

class ProductsList extends React.Component {

    handleOnClick = (userId, cartId, product) => {
        this.props.addToCart(this.props.user.id, this.props.cart.id, product)
    }

    listProducts = () => {
        return this.props.products.map(product => 
            <div key={product.id} className="product-card">
                <img className="product-image" src={product.image} alt={product.name}/>{product.name}<br/> 
                Price: ${product.price}<br/> 
                <button className="add-cart-btn" onClick={() => this.handleOnClick(product)}>Add To Cart</button>
            </div>)
    }

    render() {
        return (
            < >
                {this.listProducts()}
            </ >
        )
    }
}

export default ProductsList