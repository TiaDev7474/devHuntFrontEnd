import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/imagess/logo.svg'

function Signup() {
  return (
    <div className='flex justify-center items-center h-[90vh] w-[100%]'>
        <div className="w-[100%] md:w-[70%] flex flex-col space-y-4 md:space-y-6 ">
                <div className=" w-[80%] flex justify-center items-center mx-auto ">
                    <img className='w-[15em]' src={Logo} alt='logo'/>
                </div>
                <div className="w-[100%] flex justify-center items-center mx-auto">
                    <div className="w-[70%] md:w-[50%] flex flex-col space-y-4 md:space-y-0 md:flex-row justify-around items-center  ">
                        <div className="flex flex-col  w-[100%] items-center space-y-1 ">
                            <div className="flex justify-start w-[100%] md:w-[60%]">
                                <h3 className='ml-3 md:ml-0  text-[#868686] text-start '>Nom</h3>
                            </div>
                            <input type='text' name='fname' 
                            id='fname' className='border border-none w-[100%]  md:w-[60%] 
                            text-sm text-[#7B7777] bg-[#F2F2F2] pl-4 md:pl-2
                              h-[6vh] rounded-full focus:outline-none bg-none' 
                              placeholder='Entrer votre nom...'
                              />
                        </div>
                        <div className="flex flex-col  w-[100%] items-center space-y-1 ">
                            <div className="flex justify-start w-[100%] md:w-[60%]">
                                <h3 className='ml-3 md:ml-0  text-[#868686] text-start '>Prenom</h3>
                            </div>
                            <input type='text' name='fname' 
                            id='fname' className='border border-none w-[100%]  md:w-[60%] 
                              text-sm text-[#7B7777] bg-[#F2F2F2] pl-4 md:pl-2
                              h-[6vh] rounded-full focus:outline-none bg-none' 
                              placeholder='Entrer votre prenom...'
                              />
                        </div>
                    </div>
                </div>
                <div className="flex w-[100%] flex-col  justify-center items-center">
                    <div className="w-[70%] md:w-[80%] flex justify-center items-center flex-col space-y-1">
                        <div className="flex justify-start w-[100%] md:w-[50%] ">
                            <h3 className='ml-3 md:ml-3  text-[#868686] text-start '>Email</h3>
                        </div>
                        <input type='text' name='email' 
                        id='email' className='border border-none w-[100%]  md:w-[50%] 
                        text-sm text-[#7B7777] bg-[#F2F2F2] pl-4
                          h-[6vh] rounded-full focus:outline-none bg-none' 
                          placeholder='Entrer votre email...'
                          />
                    </div>
                </div>
                <div className="flex w-[100%] flex-col  justify-center items-center">
                    <div className="w-[70%] md:w-[80%] flex justify-center items-center flex-col space-y-1 ">
                        <div className="flex justify-start w-[100%] md:w-[50%] ">
                            <h3 className='ml-3 md:ml-3  text-[#868686] text-start '>Mot de passe</h3>
                        </div>
                        <input type='password' name='fname' 
                        id='fname' className='border border-none w-[100%]  md:w-[50%] 
                        text-sm text-[#7B7777] bg-[#F2F2F2] pl-4
                          h-[6vh] rounded-full focus:outline-none bg-none' 
                          placeholder='Entrer votre mot de passe...'
                          />
                    </div>
                </div>
                <div className="flex justify-between items-center w-[100%] mx-auto pt-2">
                    <div className="w-[70%] md:w-[40%] flex justify-center items-center mx-auto">
                        <button  className="bg-[#00CF35] w-[100%] h-[6vh] flex justify-center items-center rounded-full text-[#f2f2f2] text-xl" >S' enregistrer</button>
                    </div>
                </div>
                <div className="flex justify-between items-center w-[100%] mx-auto ">
                    <div className="flex justify-between  w-[70%] md:w-[40%] mx-auto">
                            <div className="text-[#f2f2f2]">
                                <h2>Deja enregistrer ?</h2>
                            </div>
                            <div className="text-[#00B8FF] underline">
                                <Link to='/auth/login'>Se connecter</Link>
                            </div>
                     </div>
                </div>
        </div>
    </div>
  )
}

export default Signup


