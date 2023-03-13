import React from 'react'

function sidebar({children}) {
  return (
    <div className='hidden md:block md:w-[30%] w-0 md:h-screen  md:fixed top-32 left-0 '>
        {children} 
    </div>
    //  <div className=''>
    //     {children}
    //  </div>
  )
}

export default sidebar