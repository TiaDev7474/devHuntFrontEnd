import React from 'react'
import UserIcon from '../../../../assets/imagess/user.svg'

function Card() {
  return (
    <div className='w-full h-[400px] py-3 px-10 flex flex-col items-start bg-black'>
          <div className='flex '>
               <img src={UserIcon}  alt='user profile' className='w-14 h-14'/>
          </div>

    </div>
  )
}

export default Card