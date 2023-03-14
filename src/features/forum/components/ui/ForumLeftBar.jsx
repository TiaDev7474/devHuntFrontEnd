import React,{useState} from 'react'
import filterIcon from '../../../../assets/imagess/filter.png'
import qIcon from '../../../../assets/imagess/Q.png'
import partIcon from '../../../../assets/imagess/Vector.png'
import Filter from '../Filter/Filter'


function ForumLeftBar() {
  const [visible, setVisible] = useState(false)
  const HandleClickMesParticipation = ()=>{

  }
  return (
    <div className='w-[80%] ml-4 flex justify-center'>
         <div className='w-full flex flex-col items-center m-2'>
              <div className='bg-[#ffffff16] flex flex-col w-full rounded-lg'>
                    <div 
                        onClick={()=> setVisible(!visible)}
                        className='flex justify-start items-center bg-[#ffffff16] rounded-xl py-3 px-6 w-full hover:opacity-90'>
                        <img src={filterIcon} alt="Question icon"/>
                        <span className='text-lg font-bold text-white ml-8 '>Filter</span>
                    </div>
                    <Filter visible={visible}/>
                 
              </div>
              <div onClick={HandleClickMesParticipation} className=' cursor-pointer flex justify-start items-center bg-[#ffffff16] rounded-xl py-2 px-4 w-full mt-4'>
                   <img src={qIcon} alt="Question icon"/>
                   <span className='text-lg font-bold text-white ml-8'>Mes questions</span>
              </div> 
              <div className='flex justify-start items-center bg-[#ffffff16] rounded-xl py-2 px-4 w-full mt-4'>
                   <img src={partIcon} alt="Question icon"/>
                   <span className='text-lg font-bold text-white ml-9'>Mes participations</span>
              </div>
         </div>
      </div>
  )
}

export default ForumLeftBar