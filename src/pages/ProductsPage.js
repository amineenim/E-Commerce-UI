import { useState,useEffect } from 'react'
import Axios from 'axios'
import ProductItem from '../features/product/ProductItem.js'
import { Outlet } from 'react-router-dom'
const api = 'https://fakestoreapi.com/products/category/'

function ProductsPage(){

	const [items,setItems] = useState([])
	const [categories,setCategories]=useState([])
	const [selectedCategory,setSelectedCategory] = useState("")

	const getItems= (selectedCategory) => {
		if(selectedCategory !==""){
        const apiWithCategory = api+selectedCategory
		Axios.get(apiWithCategory).then(
			(response) => {setItems(response.data)})
		
		}else{
			const apiWithCategory='https://fakestoreapi.com/products/'
			Axios.get(apiWithCategory).then(
				(response) => {setItems(response.data)})
		}
		
	}

	useEffect(() => {
		getCategories()
	},[])

	useEffect(() => {
		getItems(selectedCategory)
	},[selectedCategory])

	const getCategories = () => {
		Axios.get('https://fakestoreapi.com/products/categories').then(
			(response) => {setCategories(response.data)})
	}
	

	return(
		<div className="products-page container">
		<div className="select-products row">
		   <label htmlFor="category-select"><strong>Select your desired Category of products Here :</strong></label>
		   <select name="products-category" 
		   id="category-select"
		   onChange={(e) => setSelectedCategory(e.target.value)}
		   > 
		      <option value="" selected>All Categories</option>
		      {
		      	categories.map((category) => 
		      	(<option value={category}>{category}</option>))
		      }
		   </select>

		</div>
		<section className="products row">
		{items.map((item) => (<ProductItem id = {item.id} key={item.id} className="col" />))}
		</section>
		<Outlet/>
		</div>
		)
}
export default ProductsPage