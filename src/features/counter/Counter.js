import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,incrementByAmount,reset } from './counterSlice'
import { useState } from 'react'

function Counter(){

	const count = useSelector((state) => state.counter.count )
	const dispatch = useDispatch()
	//a state variable that refers to the incrementing amount
	const [incrementAmount,setIncrementAmount] = useState(1)

	const resetAll = () => {
		setIncrementAmount(0)
		dispatch(reset())
	}

	return (
		<section className="container-fluid">
		   <div>
		      <button onClick ={() => dispatch(increment())} className="btn btn-outline-success ">Increment+</button>
		      <span className=""> {count} </span>
		      <button onClick ={() => dispatch(decrement())} className="btn btn-outline-danger">Decrement-</button> 
		   </div>
		   <p className="flex">set your new incrementing amount here :
		   <span className="input-group-text"><button className="btn btn-primary" onClick={() => dispatch(incrementByAmount(incrementAmount))}>Add amount</button></span>
		   <input type="text" name="increment-amount" className="form-control"
		   onChange = {(e) => setIncrementAmount(e.target.value)}
		   	value = {incrementAmount}/>
		   <button onClick={() => dispatch(resetAll())}>Reset To Zero</button>
		   </p>
		</section>
		)

}

export default Counter ;