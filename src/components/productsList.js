import React from 'react'
import Product from './Product'

class ProductsList extends React.Component {

    listProducts = () => {
        return this.props.products.map(product => 
            <div key={product.id} className="product-card">
                <img className="product-image" src={product.image} alt={product.name}/>{product.name}<br/> 
                Price: ${product.price}<br/> 
                <button className="add-cart-btn">Add To Cart</button>
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