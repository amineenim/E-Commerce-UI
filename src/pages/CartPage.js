import { useState,useEffect } from 'react'
import Axios from 'axios'
import ProductItem from '../features/product/ProductItem.js'
import { useSelector,useDispatch } from 'react-redux'


function CartPage(){

	const dispatch = useDispatch()
	//import info from state to display it
	const productsInCart = useSelector((state) => state.cart.cartItems)
	const productsInCartWithCount = useSelector((state) => state.cart.cartItemsWithCount)
	const TotalPrice = useSelector((state) => state.cart.totalPrice)
	// function that returns the number of items for a product 
	const getCount = (id) => {
		const myProduct = productsInCartWithCount.filter(
			(item) => item.id === id)
		return myProduct[0].quantity
	}

	return (
		productsInCart.length > 0 ?
		(   
			<div className="cart-table">
			<div className="cart-intro">
			   <h4>My Cart</h4>
			   <span className="material-icons-two-tone">shopping_cart</span>
			</div>
		 	<table className="table">
		 	 <thead>
		 	   <tr>
		 	      <th scope="col">Product number</th>
		 	      <th scope="col">Product Name</th>
		 	      <th scope="col">Product Description</th>
		 	      <th scope="col">Product Quantity</th>
		 	      <th scope="col">Product Unit Price</th>
		 	      <th scope="col">Total for product Items</th>
		 	   </tr>
		 	 </thead>
		 	 <tbody>
		 	   {
		 	   	productsInCart.map(
		 	   	(item) => (
		 	   		    <tr key={item.id}>
		 	   		        <th scope="row">{item.id}</th>
		 	   	            <td>{item.title}</td>
		 	   	            <td>{item.description}</td>
		 	   	            <td>
		 	   	            <div className="quantity-update">
		 	   	            <button
		 	   	            className="btn btn-danger"
		 	   	            onClick={() => dispatch({type : 'cart/productDecrement',payload : {id : item.id,price :item.price} })}
		 	   	            >-</button>
		 	   	            <span className="items-quantity">{getCount(item.id)}</span>
		 	   	            <button 
		 	   	            className="btn btn-success"
		 	   	            onClick={() => dispatch({type : 'cart/productIncrement',payload :{id : item.id,price :item.price} })}
		 	   	            >+</button>
		 	   	            </div>
		 	   	            </td>
		 	   	            <td>{item.price}</td>
		 	   	            <td>{item.price*getCount(item.id)}</td>
		 	   	        </tr>)

		 	   	)
		 	   }
		 	 </tbody>
		 	</table>
		 	<p className="total-cart">Total for the Cart : {TotalPrice}</p>
		 	</div>
		) 
		 	: (<p className="empty-cart-text">Your Cart is empty ,Go shopping !</p>)
		)
}
export default CartPage