import { useState } from 'react'


function ProductItemInCart({product}){


	const [numberOfItems,setNumberOfItems] = useState(1)

	function handleItemAdded() {

		setNumberOfItems(numberOfItems+1)
	}

	function handleItemRemoved(){
		setNumberOfItems(numberOfItems-1)
	}


	return (
		numberOfItems > 0 ? (
		   <div className="product-row-in-cart">
		   <p> {product.title} </p>
		   <span>Unit Price : {product.price}€</span>
		   <div className="product-counter">
		   <button onClick={() => handleItemAdded()}
		   >+</button>
		   <span>{numberOfItems}</span>
		   <button onClick={() => handleItemRemoved()}
		   >-</button>
		   <span className="product-total-price">{numberOfItems* product.price}</span>
		   </div>
	    </div>) : ''
		
		)
	
}

export default ProductItemInCart