import { useParams } from 'react-router-dom'
import React,{ useState,useEffect } from 'react'
import Axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
//api adress for fetching products 
const api = 'https://fakestoreapi.com/products/'



//this page should display a unique product corresponding to the id in the URL

function SingleProductPage(){


	const itemsInCart = useSelector((state) => state.cart.cartItems)
	const itemsInCartWithCount = useSelector((state) => state.cart.cartItemsWithCount)
	//a local state which takes the product to display in page
	const [productToDisplay,setProductToDisplay] = useState({})
	
    //return the productId passed in the URL 
	const params = useParams()
	const dispatch = useDispatch()
	
	//function that fetches for the product based on it's Id and then sets the 
	//local state productToDisplay to take the response object 

	const url = api+params.id


	//on each change of productId the getProduct method will be run 
	useEffect(() =>
	{
		Axios.get(url).then((response) => {setProductToDisplay(response.data)})
	},[params.id])

	function isInCart(product){
		const finalItem = itemsInCart.filter(
			(item) => item.id === product.id)
		if(finalItem.length > 0){
			return true
		}else{
			return false 
		}
	}	

	function getCount(id){
		const myProduct = itemsInCartWithCount.filter((item) => item.id === id)
		return myProduct[0].quantity
	}


	


	return (
		<div className="card single-product-page">
		   <img src={productToDisplay.image} alt="card image" className="card-top-image"/>
		   <div className="card-body">
		      <h5 className="card-title"> {productToDisplay.title} </h5>
		      <p className="card-text">{productToDisplay.description}</p>
		      <span className="product-price">Unit Price : {productToDisplay.price}$</span>
		      <span>
		      {isInCart(productToDisplay) ? 
		      	(<div className="quantity-update">
		 	   	            <button
		 	   	            className="btn btn-danger"
		 	   	            onClick={() => dispatch({type : 'cart/productDecrement',payload : {id : productToDisplay.id,price :productToDisplay.price} })}
		 	   	            >-</button>
		 	   	            <span className="items-quantity">{getCount(productToDisplay.id)}</span>
		 	   	            <button 
		 	   	            className="btn btn-success"
		 	   	            onClick={() => dispatch({type : 'cart/productIncrement',payload :{id : productToDisplay.id,price :productToDisplay.price} })}
		 	   	            >+</button>
		 	   	            </div>)
		      	: (
		      	<span 
		      	className="btn btn-primary"
		      	onClick = {() => dispatch({type : 'cart/productAdded',payload : productToDisplay})}
		      	>Add To Cart</span>
		      	)
		      }
		      </span> 
		   </div>
		</div>
		)
	
}

export default SingleProductPage