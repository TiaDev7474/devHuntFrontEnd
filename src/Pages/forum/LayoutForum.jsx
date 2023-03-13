import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar} from '../../compenents'
import { ForumLeftBar } from '../../features/forum'

const ForumLayout = () => {
  return (
    <>
      <Sidebar>
        <ForumLeftBar/>
      </Sidebar>
      <Outlet/>
    </>
  )
}

export default ForumLayout
