import React, {useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import { GlobalContext } from './context'
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  const {logIn} = GlobalContext()
    // const signIn = () => {
    //     // auth.signInWithEmailAndPassword(email, password)
    //     // .then((userCredential) => {
    //     //   // Signed in
    //     //   var user = userCredential.user;
    //     //   console.log(user)

    //     //   // ...
    //     // })
    //     // .catch((error) => {
    //     //   var errorCode = error.code;
    //     //   var errorMessage = error.message;

    //     //   console.log(errorMessage, errorCode)
    //     // });
    //     // auth.onAuthStateChanged((user) => {
    //     //   if (user) {
    //     //     // User is signed in, see docs for a list of available properties
    //     //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     //     var uid = user.uid;
    //     //     console.log(uid)
    //     //     // ...
    //     //   } else {
    //     //     // User is signed out
    //     //     // ...
    //     //   }
    //     // });
    //     if(email === 'lekan' && password === 'saheed'){
    //      state.isLoggedin = true
    //     }
    // }
    return (
        <div className='login-container'>
            <div className='login-modal-container'>
            <span className='logo'>
                            GoCart<i className="bi bi-cart-dash"></i></span>
             <div className="login-modal">
                 <p>LOGIN</p>
            <div className='modal-group'>
            <div className='login-input-container'>
                <input className='login-input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email e.g (johndoe@gmail.com)'/>
            </div>
            <div className='login-input-container'>
                <input className='login-input' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
            </div>
            <div className='login-input-container'>
                <button disabled={!email || !password} style={{backgroundColor: `${email && password ? 'rgb(4, 130, 94)' : 'rgb(127,208,150)'}`}}className='login-btn' onClick={() => logIn(email, password)}>Login to your account</button>
            </div>
            </div>
           
            </div>
            <div> <span style={{letterSpacing: '1px', color: '#cdd2d6', fontWeight: 'bold'}}>New to GoCart? </span> <Link style={{fontWeight: 'bold', color: 'white'}} to='signup'>Signup</Link><br/>
           <Link style={{color: 'white', fontWeight: 'bold'}}to='forget-password'>Forgot Password?</Link>
           </div>
            </div>
        </div>
    )
}

export default Login
