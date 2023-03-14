import React from 'react'
import {motion} from 'framer-motion'
import CollectionsIcon from '@mui/icons-material/Collections';
import CodeIcon from '@mui/icons-material/Code';


function TextInput({HandleClikCode}) {
  return (
    <>
        <div className="text-[#f2f2f2] font-semibold text-center flex justify-center items-center text-xl">
            <h3>Vous avez des problemes ?</h3>
        </div>
        <div className="mt-3">
            <textarea className='focus:outline-none bg-[#ffffff16] text-gray-300 h-2 w-full min-h-[30vh] max-h-[32vh] rounded-t-lg p-2'
             name="question" id="" cols="30" rows="10" placeholder='Poser vos questions...'/>
        </div>
        <div className="bg-[#ffffff16] px-4 w-full h-[8vh] rounded-b-lg flex justify-between items-center">
            <div className=" text-[#00CF35] relative h-full cursor-pointer">
                <div className="cursor-pointer  absolute  h-full">
                    <div className="flex  cursor-pointer items-center h-full">
                        <h5 className='pr-4 cursor-pointer text-[#f2f2f2]'>Photos</h5>
                        <h5 className='cursor-pointer'><CollectionsIcon/></h5>
                    </div>
                </div>
                <div className="absolute  h-full cursor-pointer ">
                    <input type='file' multiple  className='cursor-pointer h-full  input  opacity-0' name='image' />
                </div>
            </div>
            <div className="text-[#00CF35] cursor-pointer " onClick={HandleClikCode}>
                <h5><span className='text-[#f2f2f2]' >Add Code</span>  <CodeIcon/> </h5>
            </div>
        </div>
    </>
  )
}

export default TextInput