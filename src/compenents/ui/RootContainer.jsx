import React from 'react'
import Navbar from '../navbar'

function RootContainer({childreen}) {
  return (
    <div className='bg-gray-700 h-[100vh]'>
        <Navbar/>
        {childreen}
    </div>
  )
}

export default RootContainer