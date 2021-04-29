import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import User from './components/User'
import ProductsContainer from './containers/productsContainer'
import CartContainer from './containers/cartContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={ProductsContainer}/>
        <Route exact path="/cart" component={CartContainer}/>
      </Router>
    </div>
  );
}

export default App
