import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { findOrCreateUser } from './actions/userActions'
import { fetchCart } from './actions/cartActions'
import { fetchProducts } from './actions/productActions'
import User from './components/User'
import ProductsContainer from './containers/productsContainer'
import CartContainer from './containers/cartContainer'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchProducts()
    if (this.props.user !== null) {
      this.props.fetchCart()
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route exact path="/" component={User} />
          <Route exact path="/products" component={ProductsContainer} />
          <Route exact path="/cart" component={CartContainer}/>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user, cart: state.cart, products: state.products
  }

}

export default connect(mapStateToProps, { fetchCart, fetchProducts })(App)
