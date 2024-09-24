import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/UI/button' // Assuming the shadcn button component is imported like this
import { Input } from '../components/UI/input'
import { Label } from '../components/UI/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/UI/card'
import { FaFacebook, FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa' // Added email and lock icons

const Login = () => {
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <img src='https://www.ilovepdf.com/img/ilovepdf.svg' alt="iLovePDF Logo" width={200} className="mx-auto" />
        <CardTitle className="text-center">Login to your Account</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Social Login Buttons */}
        <div className="flex justify-between space-x-2">
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

        {/* Email Input */}
        <div className="mt-6 relative">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
          </div>
        </div>

        {/* Password Input */}
        <div className="mt-3 relative">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input id="password" type="password" placeholder="Password" className="pl-10" />
          </div>
        </div>

        {/* Forgot Password Link */}
        <Link to='/forgotpassword' className="text-red-600 hover:underline mt-2 block">
          Forgot your Password?
        </Link>
      </CardContent>

      {/* Footer with Login Button and Sign Up Link */}
      <CardFooter className="flex flex-col space-y-3">
        <Button>Login</Button>
        <div className="text-center">
          <span>Don't have an account?</span>
          <Button className="mr-2 text-red-500" variant="link" onClick={() => navigate('/signup')}>
            Create an account
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Login
