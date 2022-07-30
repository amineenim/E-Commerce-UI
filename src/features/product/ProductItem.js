import Axios from 'axios'
import  React, {useState,useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {productAdded} from './cartSlice.js'

function ProductItem ({id}){

	const dispatch = useDispatch();
	const [product,setProduct] = useState({})
	const url = 'https://fakestoreapi.com/products/'+Number(id)
	
	
	useEffect (() => {
		Axios.get(url).then(response => {
		console.log(response.data)
		setProduct(response.data)
	})
	},[url])

	return (
	<div className="card container">
	   <img src={product.image} className="card-img-top" alt="product photo" width="50px"/>
	   <div className="card-body">
	      <h5 className="card-title">{product.title}</h5>
	      <p className="card-text">{product.description} </p>
	      <button className="btn btn-primary"
	      onClick = {() => dispatch({type : 'cart/productAdded',payload : product})}
	      >Add to Cart</button>
	   </div>
	</div>

)}


export default ProductItem