import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import ProductsContainer from './containers/productsContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={ProductsContainer}/>
      </Router>
    </div>
  );
}

export default App
