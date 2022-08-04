import Cart from '../features/product/Cart.js'
import ProductsList from '../features/product/ProductsList.js'


function Home (){
	return (
		<div className="home-content">
		   <Cart/>
		   <ProductsList />
		</div>
		)
}

export default Home 