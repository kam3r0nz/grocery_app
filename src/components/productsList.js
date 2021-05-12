import React from 'react'
import AddToCartButton from './addToCartButton'

class ProductsList extends React.Component {

    handleOnClick = (product) => {
        this.props.addToCart(product)
    }

    listProducts = () => {
        return this.props.products.map(product => 
            <div key={product.id} className="product-card">
                <img className="product-image" src={product.image} alt={product.name}/><h6>{product.name}</h6>
                Price: ${product.price}<br/>
                <div onClick={() => this.handleOnClick(product)}>
                    <AddToCartButton/>
                </div>
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