import React from 'react'
import Product from './product'

class ProductsList extends React.Component {

    handleOnClick = (product) => {
        this.props.addToCart(product)
    }

    listProducts = () => {
        return this.props.products.map(product => 
            <div key={product.id}>
                <Product key={product.id} product={product} name={product.name} image={product.image} price={product.price}/>
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