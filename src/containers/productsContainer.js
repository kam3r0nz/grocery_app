import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productActions'
import ProductsList from '../components/productsList'

class ProductsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }
    
    render() {
        return (
            < >
            <h1>Products</h1>
            <ProductsList products={this.props.products}/>
            </ >
        )
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, { fetchProducts })(ProductsContainer)