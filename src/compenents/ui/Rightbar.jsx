import React from 'react'

function Rightbar({children}) {
  return (
    <div className=' hidden md:block md:w-[30%]  md:h-screen  md:fixed top-32 right-0 '>
      {children}
    </div>
      // <div className=''>
      //      {children}
      // </div>

  )
}

export default Rightbar