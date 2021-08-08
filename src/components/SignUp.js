import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './SignUp.css'

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [checked, setChecked] = useState(null)

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName, lastName, email, password, confirmPassword, checked)
}
    return (
        <div className='signup-overlay'>
               <span className='logo'>
                            GoCart<i className="bi bi-cart-dash"></i></span>
                
                <form className='signup'>
                <p>SIGN UP</p>
                    <div>
                    <label htmlFor='firstname'>First Name</label><br/>
                        <input className='signup-input' id='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)} type='text'/>

                    </div>
                    <div>
                    <label htmlFor='lastname'>Last Name</label><br/>
                        <input className='signup-input' id='lastname' value={lastName} onChange={(e) => setLastName(e.target.value)} type='text'/>

                    </div>
                    <div>
                    <label htmlFor='email'>Input Your Email</label><br/>
                        <input className='signup-input' id='email' value={email} onChange={(e) => setEmail(e.target.value)} type='email'/>

                    </div>
                    <div>
                    <label htmlFor='password'>Choose a Password</label><br/>
                        <input className='signup-input' id='password' value={password} onChange={(e) => setPassword(e.target.value)} type='text'/>

                    </div>
                    <div>
                        <label htmlFor='confirmPass'>Confirm Password</label><br/>
                        <input className='signup-input' id='confirmPass' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type='text'/>

                    </div>
                   <div className='terms'>
                   <input checked={checked} onClick={(e)=> setChecked(e.target.checked)} type='radio' /><span> By clicking, you agree to GoCart's <Link to="/terms-and-condition">Terms and Conditions</Link></span><br/>
                    <button className='btn-signup' disabled={!checked || !firstName || !lastName || !email || !password || !confirmPassword} style={{background:`${!firstName || !lastName || !email || !password
                         || !confirmPassword || !checked ? 'rgb(127,208,150)' : 'rgb(4, 130, 94)'}` }} onClick={handleSubmit}>Sign Up</button><br/>
                   </div>
                    
                </form>
              <div>  <span>Already have a GoCart account?</span><Link to='/login'>Login</Link></div>
        </div>
    )
}

export default SignUp
