import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice.js'
import cartReducer from '../features/product/cartSlice.js'

export const store = configureStore(
{
	reducer : {

		counter : counterReducer,
		cart    : cartReducer
	}
})