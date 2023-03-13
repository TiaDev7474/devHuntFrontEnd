import { useNavigate } from 'react-router-dom'
import UserProfile from '../../../../assets/imagess/Nomena.jpg'
import SendIcon from '../../../../assets/imagess/send.svg'
import React from 'react'
import Card from '../card/card'
import { Avatar } from '@mui/material'

// import { Link } from 'react-router-dom'

function PostFeed() {
  const navigate = useNavigate()
  const handleFocus = ()=>{
       navigate('/user/post/create')
  }
  return (
    <>  
        {/* <div className='w-full mt-[120px] bg-black md:mt-0 md:pt-32 md:px-[30%]'> */}
        <div className="flex justify-between items-center h-16  px-5 w-full bg-[#0d0d0d]">
                          <div className="w-[50px] flex justify-end">
                            <Avatar  src={UserProfile}/>
                          </div>
                          <div className="w-[60%]">
                            <input type='text' name='text'
                              onFocus={handleFocus} 
                              id='text' className='border border-none   
                                text-sm text-[#868686] bg-[#ffffff21] w-[100%] h-[4vh] rounded-full focus:outline-none pl-5'
                              placeholder='Partager aux collegues..'
                            />
                          </div>
                          <div className="w-[15%] flex justify-start">
                            <img src={SendIcon} alt="Sendicon" />
                          </div>
              </div>

        {/* </div> */}
        
        <Card/>
        <Card/>
        
       
         
    </>
  )
}

export default PostFeed