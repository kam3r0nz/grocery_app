import React from 'react'
import Product from './product'
import AddToCartButton from './addToCartButton'

class ProductsList extends React.Component {

    handleOnClick = (product) => {
        this.props.addToCart(product)
    }

    listProducts = () => {
        return this.props.products.map(product => 
            <div key={product.id} className="product-card">
                <Product product={product} name={product.name} image={product.image} price={product.price}/><br/>
                <div onClick={() => this.handleOnClick(product)}>
                    <AddToCartButton/>
                </div>
            </div>
        )
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