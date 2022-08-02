import './App.css';
import { store } from './app/store.js'
import { useState,useEffect } from 'react'
import ProductsList from'./features/product/ProductsList.js'
import Header from './Header.js'
import Footer from './Footer.js'
import ProductItem from './features/product/ProductItem.js'
import Cart from './features/product/Cart.js'

function App() {


  return (
    <div className="container-fluid">
      <Header/>
      <div className="container">
      <Cart />
      <main className="main-content container-fluid">
      <ProductsList />
      </main>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
