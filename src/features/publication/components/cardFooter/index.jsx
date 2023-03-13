import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useState } from 'react';
import { Rating } from '@mui/material';

function CardFooter() {
    const [liked , setLiked] = useState(false)
    const [like , setLike] = useState(0)
    const comments = 21
  //   const handleClickLike = (action) =>{
  //       if(action==='like'){
  //         setLike(prev => prev + 1)
  //         setLiked(!liked)
  //          return
  //       }
  //       setLike(prev => prev-1)
  //       setLiked(!liked)
  // }
        
 
  return (
    <div className='flex justify-between px-5 items-center w-full h-[50px] bg-[#f2f2f2]'>
         <div className='flex justify-center items-center'>
             <span className='mr-2 text-xl text-gray-600'>{like}</span>
             
               { liked ?
                 <span>
                    <ThumbUpAltIcon
                     sx={{width:23 , height:23 , color:'blue'}}
                 />
                 </span>
                  :
                  <span>
                      <ThumbUpOffAltIcon
                          sx={{width:23 , height:23}}
                      />
                  </span>
               }
          
           
         </div>
         <div className='flex justify-center items-center'>
             <span className='mr-2 text-xl text-gray-600'>{comments} </span>
            <ChatBubbleOutlineIcon 
               sx={{width:20 , height:20}}
            />
             {/* <span>commentaires</span> */}
         </div>
         <Rating 
            name="half-rating" 
            defaultValue={2.5} 
            precision={0.5} 
        />
         
    </div>
  )
}

export default CardFooter