import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../constant'
function MasterLayout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MasterLayout
