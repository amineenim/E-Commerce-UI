import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice(
{
	name : 'cart',
	initialState,
	reducers : {
		productAdded : (state,action) => {
			state.push(action.payload)
		}
	}

})

export const {productAdded} = cartSlice.actions 
export default cartSlice.reducer 