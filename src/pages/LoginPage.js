import { useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
//here will be the login page wich will be accessible via 
//the '/login' route 
//this page should display a form that allows users to authenricate
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_].{3,23}$/

function LoginPage() {

	//two local state variables that keep track of the username input and whether it's valid
	const [userName,setUserName] = useState('')
  const [validUserName,setValidUserName] = useState(false)

  //two local state variables that keep track of the password input and whether it's valid
	const [password,setPassword] = useState('')
  const [validPassword,setValidPassword] = useState(false)

  //a state variable that conatins error messages if there are any
	const [errorMsg,setErrorMsg] = useState('')

	const userRef = useRef()
	const errRef =useRef()

	//on first load of the page we put 
	//the focus on the username input that we reference with userRef
	useEffect(() => {
		userRef.current.focus()
	},[])

	useEffect(() => {
		setErrorMsg('')
	},[userName,password])

  useEffect(() => {
    const result = USER_REGEX.test(userName)
    setValidUserName(result)
  },[userName])

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(userName,password)
		setUserName('')
		setPassword('') 

	}

	return(
		<div className="login">
		   <h2>Sign In</h2>
		   <p ref={errRef} className={errorMsg ? "errormsg" : "offscreen"} aria-live="assertive"> {errorMsg} </p>
		   <form onSubmit ={handleSubmit} >
              <div className="form-group">
                 <label htmlFor="username">Username :
                 {userName ? (
                  validUserName ? (<span className="material-icons">done</span>) : 
                  <span className="material-icons">close</span>)
                  :(<p className= "offscreen"></p>)}
                 </label>
                 <input type="text" 
                 ref = {userRef}
                 className="form-control" 
                 id="username"  
                 placeholder="Enter username"
                 aria-describedby = "usernote"
                 aria-invalid = {validUserName ? "false" : "true"}
                 required
                 autoComplete = "off"
                 onChange = {(e) => setUserName(e.target.value)}
                 />
                 <p id="usernote" className={ userName && !validUserName ? "instructions" : "offscreen"} >
                 Must contain at least 5 characters.<br/>
                 upercase,lowercase letters,and numbers are allowed.<br/>
                 symbols, dashs and hyphens are allowed
                 </p>
              </div>
              <div className="form-group">
                 <label htmlFor="password">Password :</label>
                 <input type="password" 
                 className="form-control" 
                 id="password" 
                 placeholder="Password"
                 value = {password}
                 required
                 onChange = {(e) => setPassword(e.target.value)}
                 />
              </div>
              <div className="buttons-section">
                 <button type="submit" className="btn btn-outline-primary login-form-submit">Login</button>
                 <button className ="btn btn-outline-success register-button"><Link to ='/register'>Register</Link></button>
              </div>
           </form>
		</div>
		)

}

export default LoginPage