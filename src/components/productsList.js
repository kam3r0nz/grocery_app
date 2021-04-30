import React from 'react'

class ProductsList extends React.Component {

    handleOnClick = (product) => {
        this.props.addToCart(product)
    }
    
    handleOnViewClick = () => {
        
    }

    listProducts = () => {
        return this.props.products.map(product => 
            <div key={product.id} className="product-card">
                <img className="product-image" src={product.image} alt={product.name}/><h6>{product.name}</h6>
                Price: ${product.price}<br/>
                <button className="cart-btn" onClick={() => this.handleOnViewClick(product)}>View</button>
                <button className="cart-btn" onClick={() => this.handleOnClick(product)}>Add To Cart</button>
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