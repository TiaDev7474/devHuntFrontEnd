import React from 'react'
import { Outlet } from 'react-router-dom'
import Userlayout from '../../Layout/UserLayout'

function RootPage() {
    //Ato asina verification oe authentifié ve ilay user 
    //raha tsia dia asaina makany am authpage
  return (
       <Userlayout>
          <Outlet/>
       </Userlayout>

  )
}

export default RootPage