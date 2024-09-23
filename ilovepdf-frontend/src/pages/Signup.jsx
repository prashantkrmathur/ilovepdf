import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/UI/button' // assuming the shadcn button component is imported like this
import { Input } from '../components/UI/input'
import { Label } from '../components/UI//label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/UI/card'
import { FaFacebook, FaGoogle } from 'react-icons/fa' // Facebook and Google icons

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <img src='https://www.ilovepdf.com/img/ilovepdf.svg' alt="iLovePDF Logo" width={200} className="mx-auto" />
        <CardTitle className="text-center">Sign up for an Account</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between space-x-2 mb-4">
          <Button 
            className="bg-[#4267B2] text-white hover:bg-[#365899]" // Facebook blue color
            variant="solid"
          >
            <FaFacebook className="mr-2" /> Facebook
          </Button>
          <Button 
            className="bg-white text-black border border-gray-300 hover:bg-gray-100" // Google white button
            variant="outline"
          >
            <FaGoogle className="mr-2 text-red-500" /> Google
          </Button>
          <Button 
            className="bg-gray-600 text-white hover:bg-gray-700" // SSO button
            variant="solid"
          >
            SSO
          </Button>
        </div>
        <div className="mt-6">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Enter your name" />
        </div>
        <div className="mt-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="mt-3">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Password" />
        </div>
        <Link to='/forgotpassword' className="text-blue-600 hover:underline mt-2 block">
          Forgot your Password?
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3">
        <Button>Sign Up</Button>
        <div className="text-center">
          <p>Already have an account?</p>
          <Button variant="link" onClick={()=>navigate('/login')}>
            Log In
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Signup
