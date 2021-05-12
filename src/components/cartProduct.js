import React from 'react'
import RemoveFromCartButton from './addToCartButton'

class CartProduct extends React.Component {

    render() {
        return (
            <div className="product-card" key={this.props.key}>
                <img className="product-image" src={this.props.image} alt={this.props.name}/>
                <h6>{this.props.name}</h6>
                Price: ${this.props.price}<br/>
                <div onClick={this.props.addToCart}>
                    <RemoveFromCartButton/>
                </div>
            </div>
        )
    }

}

export default CartProduct
