import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <div className="login-signup">
    <img src='https://www.ilovepdf.com/img/ilovepdf.svg' alt="iLovePDF Logo" width={200}/>
        <p>Login to your Account</p>
        <div className="using-f-e-s">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>SSO</p>
        </div>
        <input type="text" placeholder='Enter your name' />
        <input type="email" placeholder='Enter your email' />
        <input type="password" placeholder='Password' />
        <Link to='/forgotpassword'>Forgot your Password?</Link>
        <button>Sign Up</button>
        <div className="create-alreadyaccount">
            <p>Don't have an accont?</p>
            <Link to='/login'>Already have an account?</Link>
        </div>
    </div>
    
    </>
  )
}

export default Signup