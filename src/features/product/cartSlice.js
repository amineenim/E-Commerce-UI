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
			//filter the cartItems array
			state.cartItems = state.cartItems.filter((elt) => elt.id !== productId)
			//map the cartItemsWithCount and return the numberOfItems for the product to delete
			const productNumberOfItems = state.cartItemsWithCount.filter(
				(elt) => elt.id === productId )
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
		}
	}


})

export const {productAdded,productRemoved} = cartSlice.actions 
export default cartSlice.reducer 