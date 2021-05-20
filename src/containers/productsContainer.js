import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/productActions'
import ProductsList from '../components/productsList'

class ProductsContainer extends React.Component {

    render() {
        return (
            < >
            <h1>Products</h1>
            <ProductsList products={this.props.products} cart={this.props.cart} addToCart={this.props.addToCart}/>
            </ >
        )
    }

}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { addToCart })(ProductsContainer)