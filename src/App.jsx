import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import AllProducts from './components/products/AllProducts'
import About from './components/About'
import Cart from './components/cart/Cart'
import CartIcon from "./assets/add-button.png";
import Logo from "./assets/ugg-logo.png";
import HomePage from './components/HomePage'

function App() {
  
  return (
    <BrowserRouter>
      <nav>
        <ul className="nav nav-underline">
          <li>
          <NavLink className="nav-link" to="/home" activeClassName="active">
            <img src={Logo} alt="Logo" height="40px" />
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/products" activeClassName="active">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart" activeClassName="active">
              <img src={CartIcon} class="cartImg" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
