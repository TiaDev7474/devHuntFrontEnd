import React, { Fragment } from 'react'
import Navbar from '../navbar'

function RootContainer({children}) {
  return (
    <Fragment>
        <div className='bg-gray-700 h-[20vh]'>
            <Navbar/>
        </div>
        <div className='bg-gray-500 h-[80vh] flex justify-center items-center'>
             {children}
        </div>
    </Fragment>
   
    
  )
}

export default RootContainer