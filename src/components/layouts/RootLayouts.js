import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Footerbottom from '../Footerbottom'

const RootLayouts = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
        <Footerbottom />
    </>
  )
}

export default RootLayouts