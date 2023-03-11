import React from 'react'
import { Outlet } from 'react-router-dom'
import RootContainer from '../compenents/ui/RootContainer'

function RootLayout() {
  return (
      <RootContainer>
          <Outlet/>
      </RootContainer>
  )
}

export default RootLayout