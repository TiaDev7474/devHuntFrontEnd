import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar,Feed,Rightbar } from '../../compenents'
import { ForumLeftBar } from '../../features/forum/components'
import ForumRightBar from '../../features/forum/components/ui/ForumRightBar'

const ForumLayout = () => {
  return (
    <div className="relative w-full">
      <Sidebar>
          <ForumLeftBar/>
      </Sidebar>
      <Feed>
        <Outlet/>
      </Feed>
      <Rightbar>
         <ForumRightBar/>
      </Rightbar>
    </div>
  )
}

export default ForumLayout
