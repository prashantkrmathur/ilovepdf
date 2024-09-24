import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import AppLayout from './components/Layout/AppLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MergePdf from './pages/MergePdf'
const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[

      {
        path:'/',
        element:<Home/>
      },
      {
        path:'about',
        element:<Home/>
      },

    ]

  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/merge-pdf',
    element:<MergePdf/>
  }
 
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App