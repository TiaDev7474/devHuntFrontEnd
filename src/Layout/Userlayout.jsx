import React  from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../compenents/navbar'
import Filter from '../compenents/navbar/filter/filter.android'
import { CreateForum, ForumList } from '../features/forum/components'
import { CreatePostForm, PostFeed } from '../features/publication'
import ForumLayout from '../Pages/forum/LayoutForum'
import Postlayout from '../Pages/Posts/Postlayout'


function Userlayout() {
  return (
    <div className=' h-[90vh] md:h-screen w-full relative '>
         <Navbar/>
         <Filter/>
         <Routes>
              <Route path='/post'element={<Postlayout/>}>
                    <Route path='' index={true} element={<PostFeed/>}/>
                    <Route path=':postId' element={<h1>Post item</h1>}/>
                    <Route path='create' element={<CreatePostForm/>}/>
                    <Route path=':postId/edit' element= {<h1>Post edit</h1>}/>
                    <Route path='*' element={<h1>page not found</h1>}/> 
              </Route>
              <Route path='/forum' element={<ForumLayout/>}>
                    <Route path='' index={true} element={<ForumList/>} />
                    <Route path='create' element={<CreateForum/>}/>
              </Route>
         </Routes>
    </div>
  )
}

export default Userlayout