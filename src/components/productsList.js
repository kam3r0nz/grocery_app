import React from 'react'
import Product from './product'
import AddToCartButton from './addToCartButton'

class ProductsList extends React.Component {

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

    handleOnSubmit = (e) => {
        e.preventDefault()

        this.setState({
            searchTerm: ''
        })
    }

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
                <div className="search-box">
                    <form onSubmit={this.handleOnSubmit}>
                        <label for="search-text">Search Products: </label>
                        <input type="text" name="search-text" value={this.state.searchTerm} onChange={this.handleOnChange}/>
                        <input type="submit" value="Search"/>
                    </form>
                </div>
                {this.listProducts()}
            </ >
        )
    }
}

export default ProductsList