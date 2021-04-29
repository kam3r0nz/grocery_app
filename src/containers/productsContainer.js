import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/productActions'
import ProductsList from '../components/productsList'

class ProductsContainer extends React.Component {

    render() {
        return (
            < >
            <h1>Products</h1>
            <ProductsList user={this.props.user} products={this.props.products} cart={this.props.cart} addToCart={this.props.addToCart}/>
            </ >
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.user, cart: state.cart, products: state.products
    }
}

export default connect(mapStateToProps, { addToCart })(ProductsContainer)