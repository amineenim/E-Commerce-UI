import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'


function ProductItemInCart({product,quantity}){

	const dispatch = useDispatch()

	return (
		<div className="product-in-cart">
		<h4 className="product-title"> {product.title} </h4>
		<div className="product-data">
		<span className="product-price">Unit Price : {product.price}</span>
		<span className="items-count">number of items : {quantity}</span>
		<span className="items-amount">Total for product: {product.price*quantity}€</span>
		</div>
		<button 
		className="btn btn-danger remove-product-button"
		onClick={() => dispatch({type : 'cart/productRemoved',payload:product.id})}
		>Remove Product</button>
		<hr/>
		</div>

		)

	
}

export default ProductItemInCart