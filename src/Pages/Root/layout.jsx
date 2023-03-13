import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from '../../Layout/RootLayout'
import Publayout from '../Post/layout'
import Forumlayout from '../forum/layout'

function layout() {
  return (
    <Fragment>
            <Routes>
                  <Route element={<RootLayout/>}>
                      <Route path='post/*'element={<Publayout/>}/>
                      <Route path = 'forum/*' element={<Forumlayout/>}/>
                  </Route>  
            </Routes>
    </Fragment>
  )
}

export default layout