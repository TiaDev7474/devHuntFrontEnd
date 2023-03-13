import { Avatar } from '@mui/material'
import React from 'react'
import UserProfile from '../../../../assets/imagess/Nomena.jpg'
import global from '../../../../assets/imagess/Globe.svg'


function HeadCard() {
  return (
    <div className=' relative flex justify-start items-center h-[70px]  p-4 w-full bg-[#f2f2f2] md:p-7 md:h-[80px]'>
                    <Avatar
                        alt="Remy Sharp"
                        src={UserProfile}
                        sx={{ width:{xs: 45 , md:50 ,lg:60 }, height: {xs: 45 , md:50 ,lg:60 } }}
                    />
               <div className=' flex flex-col ml-2 justify-center '>
                  <span className='text-[16px] text-[#0d0d0d] font-sans font-bold '> Andrianiaina Nomena </span>
                  <div className='flex justify-start items-center'>
                      <span className='text-gray-500 text-[12px]' >1 hour ago</span>
                      <img src={global} alt='globe icone' className='ml-2'/>
                  </div>
               </div>
               <div 
                  className='text-2xl absolute right-0 top-1 mr-4 hover:opacity-80 cursor-pointer'
                >
                  ...
                </div>
                
          </div>
  )
}

export default HeadCard