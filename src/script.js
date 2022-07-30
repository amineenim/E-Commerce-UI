
const api = 'https://fakestoreapi.com/products'
const productsList = document.querySelector('.body')


async function getData(){

	const response =await fetch(api)
	const products = await response.json()
	console.log(products)

	printData(products)
}

function printData(products){

	productsList.innerHTML += `
	${
	  	products.map(
	  		(product) => `
	  		<div className="card" key="${product.id}">
	           <img src="${product.image}" className="card-img-top" alt="product photo"/>
	           <div className="card-body">
	              <h5 className="card-title">${product.title}</h5>
	              <p className="card-text">${product.description}</p>
	              <button className="btn btn-primary">Add to Cart</button>
	            </div>
	        </div>`
	  		)
	  }
	`
}

getData()