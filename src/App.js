import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProducts } from './actions/productActions'
import User from './components/User'
import ProductsContainer from './containers/productsContainer'
import CartContainer from './containers/cartContainer'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar user={this.props.user}/>
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

export default connect(mapStateToProps, { fetchProducts })(App)
