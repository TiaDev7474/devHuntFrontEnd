import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Userlayout from '../Pages/Root/layout'
function UserRoutes() {
  return (
          <BrowserRouter>
               <Routes>
                    <Route path="admin/*" element/>
                    <Route path='/*' element={<Userlayout/>}/>
                    {/* <Route path='auth/*' element/> */}
               </Routes>
          </BrowserRouter>
  )
}

export default UserRoutes