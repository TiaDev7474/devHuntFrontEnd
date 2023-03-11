import React from 'react'

function sidebar({children}) {
  return (
    <div className='bg-red w-[20%]'>
        {children}
    </div>
  )
}

export default sidebar