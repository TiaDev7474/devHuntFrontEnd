import React, { memo, useState } from 'react'


function TextCard() {
    const [isLess, setIsLess] =useState(true)
    const NeedToCutText = texte.length > 150
    const CuttedTexte = texte.slice(0,150)
  return (
    <div className='w-full h-[250px]py-3 px-5 bg-[#f2f2f2]'>
        {NeedToCutText?
        (<span className='text-[16px] font-normal text-gray-800'>
            {isLess ? CuttedTexte  :texte }
            <span 
                className='ml-1 text-[16px] font-bold text-[#001935] cursor-pointer '
                onClick={()=> setIsLess(!isLess)}
                >
                {isLess ? '..ReadMore' :'ReadLess'}
            </span>
        </span>):
        <span>{texte}</span>
        }
    </div>
  )
}
const texte = "Lorem ipsum dolor sit amet consectetur adipisi id consectetur earum amet pariatur suscipit ea, qui id consectetur earum amet pariatur suscipit ea, quiLorem ipsum dolor sit amet consectetur adipisi id consectetur earum amet pariatur suscipit ea, qui id consectetur earum amet pariatur suscipit ea, quiLorem ipsum dolor sit amet consectetur adipisi id consectetur earum amet pariatur suscipit ea, qui id consectetur earum amet pariatur suscipit ea, quiLorem ipsum dolor sit amet consectetur adipisi id consectetur earum amet pariatur suscipit ea, qui id consectetur earum amet pariatur suscipit ea, qui" 

export default memo(TextCard)