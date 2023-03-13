import React from 'react'
import  Photo from '../../../../assets/imagess/Nomena.jpg'
function ImageCard() {

  return (
    <div className=' lg:h-[500px] '>
        <img 
           className='lg:h-[500px] w-full'
           src={Photo} alt='file that user upload'
        />
    </div>
  )
}

export default ImageCard

