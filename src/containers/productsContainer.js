import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/productActions'
import ProductsList from '../components/productsList'

class ProductsContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            searchTerm: ''
        }
    }

    handleOnChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            < >
            <div className="search-box">
                <form>
                    <label for="search-text">Search Products: </label>
                    <input type="text" name="search-text" value={this.state.searchTerm} onChange={this.handleOnChange}/>
                    <input type="submit" value="Search"/>
                </form>
            </div>

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