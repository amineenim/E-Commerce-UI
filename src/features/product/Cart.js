import {useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import ProductItemInCart from './ProductItemInCart.js'

function Cart(){

	const productsInCart = useSelector ((state) => state.cart)

	return (
		<div className="cart-container">
		<h4>My Cart</h4>
		<ul className="products-in-cart">
		{
			productsInCart.map (
			(product) => (
			<li key={product.id}>
			<ProductItemInCart product={product} />
			</li>
			
			)
			)
		}
		</ul>
		</div>
		)
}

export default Cart