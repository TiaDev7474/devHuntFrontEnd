import React, { Fragment } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Userlayout from '../Layout/Userlayout'


function AppRouter() {
  return (
       <Fragment>
              <BrowserRouter>
                    <Routes>
                         <Route path='/'element={<h1>Homepage</h1>}/>
                         <Route path='/auth/*' element={<h1>Authentiaction page</h1>}/>
                         <Route path='/user/*' element={<Userlayout/>}/>
                         <Route path='admin/*' element={<h1>Admin page</h1>}/>
                    </Routes>
              </BrowserRouter>
       </Fragment>
  )
}

export default AppRouter