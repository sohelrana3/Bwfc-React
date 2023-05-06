import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

const RootLayouts = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <h1>Footer</h1>
    </>
  )
}

export default RootLayouts