import './App.css';
import { store } from './app/store.js'
import Header from './Header.js'
import Footer from './Footer.js'
import ProductItem from './features/product/ProductItem.js'
import Home from './pages/Home.js'
import ProductsPage from './pages/ProductsPage.js'
import CartPage from './pages/CartPage.js'

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'

function App() {


  return (
    <Router>
       <Header/>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="products" element={<ProductsPage/>}/>
          <Route path="cart" element={<CartPage/>}/>
       </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
