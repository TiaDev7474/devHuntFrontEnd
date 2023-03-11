import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Postlayout from '../../Layout/Postlayout'
import RootLayout from '../../Layout/RootLayout'

function layout() {
  return (
    <Fragment>
            <Routes>
                  <Route path='/'element={<RootLayout/>}>
                      <Route path='post'element={<Postlayout/>}/>
                  </Route>  
            </Routes>
    </Fragment>
  )
}

export default layout