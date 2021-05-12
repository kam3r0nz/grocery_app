import React from 'react'

class Product extends React.Component {

    render() {
        return (
            < >
                <img className="product-image" src={this.props.image} alt={this.props.name}/>
                <h6>{this.props.name}</h6>
                Price: ${this.props.price}
            </ >
        )
    }

}

export default Product
