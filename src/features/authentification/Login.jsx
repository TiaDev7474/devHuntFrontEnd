import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/imagess/logo.svg'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-[90vh] w-[100%]'>
      <div className="flex flex-col space-y-5 ">
        <div className="flex justify-center items-center w-[100%]">
          <img className='w-[15em]' src={Logo} alt='logo'/>
        </div>
        <div className="text-center ">
           <p className='text-[#868686] text-base'>
              Veuillez indiquer ci-dessous votre mot de passe :
           </p>
        </div>
        <div className="w-[85%]  flex justify-center flex-col space-y-3  mx-auto ">
          <h3 className='text-start text-[#7B7777] text-base font-light '>Email</h3>
          <input type='email' name='email' 
           id='email' className='border border-none  w-[100%] 
            text-start pl-5 text-base text-[#7B7777] bg-[#F2F2F2]
             h-[6vh] rounded-full focus:outline-none bg-none' 
             placeholder='Entrer votre addresse email...'
             />
        </div>
        <div className="w-[85%]  flex justify-center flex-col space-y-3  mx-auto ">
          <h3 className='text-start text-[#7B7777] text-base font-light '>Mot de passe</h3>
            <input type='password' name='password'  
             id='password'  className='border pl-5 border-none  w-[100%] 
               text-base text-start text-[#7B7777] bg-[#F2F2F2]
               h-[6vh] rounded-full focus:outline-none bg-none' 
               placeholder='Entrer votre mot de passe...'
               />
        </div>
        <div className="flex justify-between items-center w-[85%] mx-auto">
          <div className=" flex justify-between items-center">
            <input type="checkbox"  className='h-5 border border-none outline-none ' name="remember" id="remember" />
            <label htmlFor="remember" className='text-[#f2f2f2] ml-2'> Se souvenir </label>
          </div>
          <div className="">
              <h6 className='text-[#00B8FF]'> Mot de passe oublier ?</h6>
          </div>
        </div>
        <div className="flex justify-between items-center w-[85%] mx-auto">
          <button  className="bg-[#00CF35] w-[100%] h-[6vh] flex justify-center items-center rounded-full text-[#f2f2f2] text-xl" >Se connecter</button>
        </div>
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <div className="text-[#f2f2f2]">
                <h3>Vous n'avez pas de compte ?</h3>
            </div>
            <div className="text-[#00B8FF] underline">
                <Link to='/auth/signup' >S' inscrire</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
