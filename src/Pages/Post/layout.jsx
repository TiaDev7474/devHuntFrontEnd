import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

import { CreatePost, PostFeed, PostItem } from '../../features/publication'


function Publayout() {
    //Ato asina verification oe authentifié ve ilay user 
    //raha tsia dia asaina makany am authpage
  return (
         <Fragment>
              <Routes>
                        <Route path='' index  element={<PostFeed/>}/>
                         <Route path=':postId' element={<PostItem/>}/>
                         <Route path=':postId/edit' element={<CreatePost/>}/>
                         <Route path='create' element={<CreatePost/>}/>
              </Routes>
         </Fragment>

  )
}

export default Publayout