import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/UI/button'

const Login = () => {
  return (
    <>
    <div className="login-signup">
    <img src='https://www.ilovepdf.com/img/ilovepdf.svg' alt="iLovePDF Logo" width={200} />    
        <p>Login to your Account</p>
        <div >
            <Button>Facebook</Button>
            <Button>Instagram</Button>
            <Button>SSO</Button>
        </div>
        <input type="text" placeholder='Enter your email' />
        <input type="text" placeholder='Password' />
        <Link to='/forgotpassword'>Forgot your Password?</Link>
        <button>Login</button>
        <div className="create-alreadyaccount">
            <p>Don't have an accont?</p>
            <Button variant={'destructive'} to='/signup'>Create an account?</Button>
        </div>
    </div>
    
    </>
  )
}

export default Login