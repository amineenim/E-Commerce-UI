import './App.css';
import { store } from './app/store.js'
import Header from './Header.js'
import Footer from './Footer.js'
import ProductItem from './features/product/ProductItem.js'
import Home from './pages/Home.js'
import ProductsPage from './pages/ProductsPage.js'
import CartPage from './pages/CartPage.js'
import ErrorPage from './pages/ErrorPage.js'
import SingleProductPage from './pages/SingleProductPage.js'
import LoginPage from './pages/LoginPage.js'
import RegisterPage from './pages/RegisterPage.js'

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'

function App() {


  return (
    <Router>
       <Header/>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="products">
             <Route index element={<ProductsPage/>}/>
             <Route path=":id" element={<SingleProductPage/>}/>
          </Route>
          <Route path="cart" element={<CartPage/>}/>
          <Route path ="login" element ={<LoginPage/>} />
          <Route path="register" element = { <RegisterPage /> }/>
          <Route path="*" element={<ErrorPage/>}/>
       </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
