import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="login-signup">
    <img src='https://www.ilovepdf.com/img/ilovepdf.svg' alt="iLovePDF Logo" width={200} />    
        <p>Login to your Account</p>
        <div className="using-f-e-s">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>SSO</p>
        </div>
        <input type="text" placeholder='Enter your email' />
        <input type="text" placeholder='Password' />
        <Link to='/forgotpassword'>Forgot your Password?</Link>
        <button>Login</button>
        <div className="create-alreadyaccount">
            <p>Don't have an accont?</p>
            <Link to='/signup'>Create an account?</Link>
        </div>
    </div>
    
    </>
  )
}

export default Login