
import React from 'react'
import  Photo from '../../../../assets/imagess/Nomena.jpg'
import CardFooter from '../cardFooter'
import HeadCard from '../CardHead'
import ImageCard from '../imageCard'
import TextCard from '../TextCard'




function Card() {

 
  return (
    <div className='w-full  flex flex-col mb-1  h-auto'>
            <HeadCard/>
            <TextCard/>
            <div className=' lg:h-[500px] '>
            <img 
                className='lg:h-[500px] w-full'
                src={Photo} alt='file that user upload'
            />
    </div>
            <CardFooter/>
    </div>
  )
}

export default Card