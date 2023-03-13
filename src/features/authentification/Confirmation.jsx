import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/imagess/logo.svg'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Confirmation() {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
        <div className="flex flex-col space-y-6">
            <div className="flex justify-center items-center w-[100%]">
                <img className='w-[15em]' src={Logo} alt='logo'/>
            </div>
            <div className="text-center text-[#868686]">
                <p>Nous avons envoyés une code de confirmation via  example@gmail.com .</p>
            </div>
            <div className="md:w-[40%] w-[60%]  flex justify-center flex-col space-y-3  mx-auto">
                <input type='number' name='code'  
                 id='password' className='border border-none  w-[100%] 
                   text-2xl text-center text-[#7B7777] bg-[#F2F2F2] h-[7vh] rounded-full focus:outline-none bg-none'
                    placeholder='000000'
                 />
            </div>
            <div className="flex justify-center items-center w-[100%]">
                <div className="flex justify-between items-center w-[80%]">
                    <div className="text-[#f2f2f2]">
                          <h3>Code non recus ? <span className='text-[#00B8FF]'>renvoyer</span></h3>
                    </div>
                    <div className="">
                          <Link to='/auth/login' className='text-[#f2f2f2]'> <KeyboardBackspaceIcon/> Back</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Confirmation