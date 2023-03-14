import { Avatar } from '@mui/material'
import React from 'react'


function Feed({children}) {
  
  return (
        <div className='w-full mt-[120px]  md:mt-0 md:pt-32 md:px-[30%]'>
              {children}
        </div>
  )
}

export default Feed