import React from 'react'

import AddToCartButton from './addToCartButton'

class Product extends React.Component {

    render() {
        return (
            <div className="product-card">
                <img className="product-image" src={this.props.image} alt={this.props.name}/>
                <h6>{this.props.name}</h6>
                Price: ${this.props.price}<br/>
                <div onClick={this.props.addToCart}>
                    <AddToCartButton/>
                </div>
            </div>
        )
    }

}

export default Product
