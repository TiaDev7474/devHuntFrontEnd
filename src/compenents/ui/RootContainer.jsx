import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar'

function RootContainer({childreen}) {
  return (
    <Fragment>
        <div className='bg-gray-700 h-[20vh]'>
            <Navbar/>
        </div>
        <div className='bg-gray-500 h-[80vh] flex justify-center items-center'>
             <Outlet/>
        </div>
    </Fragment>
   
    
  )
}

export default RootContainer