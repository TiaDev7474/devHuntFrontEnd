import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { ForumList,Forumdetails,CreateForum } from '../../features/forum'
import ForumLayout from '../../Layout/LayoutForum'

function Forumlayout() {
  return (
    <>
      <Routes>
        <Route  element={<ForumLayout/>}>
          <Route path='' element={<ForumList/>} index={true}/>
          <Route path='details' element={<Forumdetails/>} />
          <Route path='create' element={<CreateForum/>}/>
          <Route errorElement={<p>erreur</p>}/>
        </Route>
      </Routes>  
    </>
  )
}

export default Forumlayout