import {useState,useEffect} from 'react'
import Axios from 'axios'
import ProductItem from './ProductItem.js'


function ProductsList(){

	const [productsList,setProductsList] = useState([])

	const getProducts = () => {
		Axios.get('https://fakestoreapi.com/products?limit=10').then((response) => {
			setProductsList(response.data)
		})
	}

	useEffect(() => {
		getProducts()

	},[])

	return (
		<div className="products-list container">
		<h1 className="products-list-title">All Products</h1>
		<section className="products-list-body row">
		{
			productsList.map((product) => (

			<ProductItem id = {product.id} key={product.id} className="col"/>

			))
		}
		</section>
		</div>
		)
}

export default ProductsList