import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from '../../Layout/RootLayout'
import Publayout from '../Post/layout'

function layout() {
  return (
    <Fragment>
            <Routes>
                  <Route element={<RootLayout/>}>
                      <Route path='post'element={<Publayout/>}/>
                  </Route>  
            </Routes>
    </Fragment>
  )
}

export default layout