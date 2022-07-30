import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	count : 0
}

export const counterSlice = createSlice({
	//the name of the slice
	//it will be used as the first part of the action type strings
	//that will be generated
	name : 'counter',
	initialState,
	reducers :{
		//the key name of each reducer will be used
		// as the second part of the action type string
		increment : (state) => {
			state.count +=1
		},

		decrement : (state) => {
			state.count -=1
		},

		incrementByAmount : (state,action) => {
			state.count += Number(action.payload) || 0
		},
		reset : (state) => {
			state.count = 0
		}
	}
})

export const { increment, decrement, incrementByAmount, reset} = counterSlice.actions
export default counterSlice.reducer 
