import React,{useCallback, useState} from 'react';
import { AnimatePresence } from 'framer-motion';
import CodeInput from '../Create/CodeInput';
import TextInput from '../Create/TextInput';
import {motion} from 'framer-motion'

function CreateForum() {      
  const [addCode,setAddCode] = useState(false)
  const HandleAddCodeChange = useCallback(()=>{
    setAddCode(ancien=>!ancien)
  },[])
  return (
    <div className='w-full'>
        <motion.div className=" bg-[#ffffff16]   h-[55vh] rounded-lg mt-1 mx-4 p-3 overflow-hidden">
          <AnimatePresence>
            <motion.div className="flex flex-col">
              {addCode ? <CodeInput/> : <TextInput HandleClikCode={HandleAddCodeChange} />}
            </motion.div>
          </AnimatePresence>
            <div className="flex justify-start items-center h-[7vh] mt-2">
              <button className='text-[#f2f2f2] bg-[#00CF35] rounded-lg p-2'>
                  Demander
              </button>
              <button className='ml-4 bg-transparent border border-[#00cf35] text-[#00cf35] p-2 rounded-lg'>
                  Annuler
              </button>
            </div>
        </motion.div>
    </div>
  )
}

export default CreateForum


