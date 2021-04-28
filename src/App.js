import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import UserInput from './components/userInput'
import ProductsContainer from './containers/productsContainer'
import CartContainer from './containers/cartContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={UserInput}/>
        <Route exact path="/products" component={ProductsContainer}/>
        <Route exact path="/cart" component={CartContainer}/>
      </Router>
    </div>
  );
}

export default App
