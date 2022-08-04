import {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ProductItemInCart from './ProductItemInCart.js'

function Cart(){

	const dispatch =useDispatch()
	const productsInCart = useSelector ((state) => state.cart.cartItems)
	const productsWithCount = useSelector((state) => state.cart.cartItemsWithCount)
	const productsCountInCart = useSelector((state) => state.cart.cartItemsCount)
	const totalPrice = useSelector((state) => state.cart.totalPrice)

	function returnItemCount(product){
		let numberofItems = 0
		const myProduct = productsWithCount.filter((elt) => elt.id === product.id)
		if(myProduct)
		{
			numberofItems = myProduct[0].quantity
		}
		return numberofItems
	}
	
	return (
		<div className="cart-container">
		<div className="cart-header">
		<h4>My Cart<i className="material-icons-two-tone">shopping_cart</i></h4>
		<p className="total">Total Price : {totalPrice} € </p>
		</div>
		<ul className="products-in-cart">
		{
			productsInCart.map (
			(product) => (
			<div key={product.id}>
			<ProductItemInCart product={product} quantity={returnItemCount(product)} />
			</div>
			)
			)
		}
		</ul>
		{productsInCart.length > 0 ? 
		(<button className="btn btn-success reset-cart"
		  onClick={() => dispatch({type : 'cart/cartReset'})}>Reset Cart</button>) 
		: (<p>your cart is empty </p>)}
		</div>
		)
}

export default Cart