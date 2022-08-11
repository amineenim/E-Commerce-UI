import { useState, useEffect, useRef } from 'react' 
import { Link } from 'react-router-dom'


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_].{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

function RegisterPage () {

	//a reference to the user input so that we can put 
	//focus on the user input field when the form is displayed
	const userRef = useRef()
	//a reference to the error so that we can put 
	//focus on it when there is an erro
	const errRef = useRef()

	//a state that tracks the username input
	const [userName,setUserName] = useState('')
	//a state that verifies if the username is valid
	const [validUserName,setValidUserName] = useState(false)

	const [userNameFocus,setUserNameFocus] = useState(false)


	//a state that tracks the password field input
	const [password,setPassword] = useState('')
	//a state that tracks the confirm password input
	//a state that verifies if the username is valid
	const [validPassword,setValidPassword] = useState(false)
	const [passwordFocus,setPasswordFocus] = useState(false)

    //state that tracks the confirm password field input
	const [confirmPassword,setConfirmPassword] = useState('')
	//a state that checks if pawd and confirmpwd are matching
	const [validMatch,setValidMatch] = useState(false)
	const [matchFocus,setMatchFocus] = useState(false)

 	//a state that handles the error messages
	const [errMsg,setErrMsg] = useState('')
	//a state for success
	const [succes,setSucces] = useState(false)

	//the first time the page is loaded focus should be placed in username field
	useEffect(() => 
		{ userRef.current.focus() },[])
	//when the user changes the username,password or confirm password
	//the error messages sould be set to empty string
	useEffect(() => 
	{ setErrMsg('') }	,[userName,password,confirmPassword])

	//validate the userName
	useEffect(
		() => {
			const result = USER_REGEX.test(userName)
			console.log(userName)
			console.log(result)
			setValidUserName(result)
		},[userName])

	//validate the password
	useEffect(
		() => {
			const result = PWD_REGEX.test(password)
			console.log(result)
			setValidPassword(result)
			const match = password === confirmPassword 
			setValidMatch(match)
		},[password])

	return (
		<section className="register-form">
		   <p ref={errRef} className= { errMsg ? "errormessage" : "offscreen"} 
		   aria-live="assertive"> {errMsg} </p>
		   <h2>Register</h2>
		   <form >
              <div className="form-group">
                 <label htmlFor="username">Username : 

                 { userName ? ( validUserName ?
                 	          <span className="material-icons">done</span> :
                 	          <span className="material-icons">close</span> ) :(<p className="offscreen"></p>)
                 }
                 
                 
                 </label>
                 <input type="text" 
                 ref = {userRef}
                 className="form-control" 
                 id="username"  
                 placeholder="Enter username"
                 value = {userName}
                 required
                 autoComplete = "off"
                 onChange = {(e) => setUserName(e.target.value)}
                 aria-invalid = {validUserName ? "false" : "true"}
                 aria-describedby = "uidnote"
                 onFocus = {() => setUserNameFocus(true)}
                 onBlur = {() => setUserNameFocus(false)}
                 />
                 <p id ="uidnote" 
                 className= { userNameFocus && userName && !validUserName ? 
                 "instructions" : "offscreen" }>
                    4 to 24 characters.<br/>
                    Must begin with a letter.<br/>
                    Letters,Numbers,undesores are allowed
                 </p>
              </div>
              <div className="form-group">
                 <label htmlFor="password">Password</label>
                 <input type="password" 
                 className="form-control" 
                 id="password" 
                 placeholder="Password"
                 value = {password}
                 required
                 onChange = {(e) => setPassword(e.target.value)}
                 />
              </div>
              <div className="form-group">
                 <label htmlFor="confirmpassword">Password</label>
                 <input type="password" 
                 className="form-control" 
                 id="confirmpassword" 
                 placeholder="Confirm your Password"
                 value = {confirmPassword}
                 required
                 onChange = {(e) => setConfirmPassword(e.target.value)}
                 />
              </div>
              <div className="buttons-section">
                 <button className ="btn btn-outline-success register-button">Register</button>
              </div>
           </form>


		</section>
		)



}

export default RegisterPage 
