import './App.css'
import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { findOrCreateUser } from './actions/userActions'
import { fetchCart } from './actions/cartActions'
import User from './components/User'
import ProductsContainer from './containers/productsContainer'
import CartContainer from './containers/cartContainer'


class App extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route exact path="/" component={User} user={this.props.user} cart={this.props.cart}/>
          <Route exact path="/products" component={ProductsContainer} products={this.props.cart}/>
          <Route exact path="/cart" component={CartContainer} cart={this.props.cart}/>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    cart: state.cart,
    products: state.products
  }

}

export default connect(mapStateToProps,  { fetchCart })(App)
