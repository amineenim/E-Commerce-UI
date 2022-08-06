import { createSlice,current } from '@reduxjs/toolkit'


const initialState = {cartItemsCount:0, cartItems :[],cartItemsWithCount : [],totalPrice :0}




export const cartSlice = createSlice(
{

	name : 'cart',
	initialState,
	reducers : {
		productAdded : (state,action) => 
		{

			//when the product is added we incremet the cartItemsCount
			state.cartItemsCount +=1 ;
			//retreive the product comming in payload of the action
			const addedProduct = action.payload
			//retreive the price for the added product 
			//update the total price
			state.totalPrice += addedProduct.price 
			//verify if the product already exists in cartItems
			const existingProduct = state.cartItems.find(
				(item) => item.id === addedProduct.id
				)
			//if the product exists, we increment it's quantity in cartItemsWithCount
			if (existingProduct)
			{
				//we retreive the product with the same id from cartItemsWithCount
				const updatedItem = state.cartItemsWithCount.filter((item) => item.id === addedProduct.id)
				//we increment the item quantity
				updatedItem[0].quantity = updatedItem[0].quantity+1;
			}
			else{
				state.cartItems.push(addedProduct)
				state.cartItemsWithCount.push({id : addedProduct.id , quantity:1})
				
			}
		},

		productRemoved : (state,action) => 
		{
			//retreive the id of the item to delete
			const productId = action.payload 
			//retreive the unit price of the product
			const productPrice = state.cartItems.filter((elt) => elt.id === productId)[0].price
			//filter the cartItems array
			state.cartItems = state.cartItems.filter((elt) => elt.id !== productId)
			//map the cartItemsWithCount and return the numberOfItems for the product to delete
			const productNumberOfItems = state.cartItemsWithCount.filter(
				(elt) => elt.id === productId )
			//decrement the totalprice by productPrice*quantity
			state.totalPrice -= productPrice*productNumberOfItems[0].quantity
			//filter the cartItemsWithCount array to delete the element with id eqauls to productId
			state.cartItemsWithCount = state.cartItemsWithCount.filter((elt) => elt.id !== productId)
			//decrement the cartItemsCount by number of items of deleted product
			state.cartItemsCount -=productNumberOfItems[0].quantity
	
		},

		cartReset : (state) => 
		{
			state.cartItemsCount = 0 
			state.cartItems = []
			state.cartItemsWithCount = []
			state.totalPrice = 0

		},

		productIncrement : (state,action) => 
		{
			state.cartItemsCount +=1 
			const incrementedProduct = state.cartItemsWithCount.filter((item) => item.id ===action.payload.id)
			incrementedProduct[0].quantity +=1
			state.totalPrice+= action.payload.price
		},

		productDecrement : (state,action) => 
		{
			state.cartItemsCount -=1

			const decrementedProduct = state.cartItemsWithCount.filter((item) => item.id === action.payload.id)
			if(decrementedProduct[0].quantity === 1)
			{
				state.cartItemsWithCount = state.cartItemsWithCount.filter((item) => item.id !== action.payload.id)
				state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
				state.totalPrice -= action.payload.price
			}
			else
			{
				decrementedProduct[0].quantity -=1
				state.totalPrice -= action.payload.price
				
			}

			

		}
	}


})

export const {productAdded,productRemoved} = cartSlice.actions 
export default cartSlice.reducer 