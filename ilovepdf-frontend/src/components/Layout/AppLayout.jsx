import React from 'react'
import Header from '../UI/Header/Header'
import Footer from '../UI/Footer/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default AppLayout