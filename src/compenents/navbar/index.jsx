import React, { useState } from 'react'
import ENI from '../../assets/imagess/logo.svg'
import Search from '../../assets/imagess/Search.svg'
import MessageIcon from '../../assets/imagess/message.svg'
import UserProfile from '../../assets/imagess/Nomena.jpg'
import NotificationIcon from '../../assets/imagess/noti.svg'
import MenuIcon from '../../assets/imagess/menu.svg'
import { NavLink } from 'react-router-dom';
import Menu from '../menu/menu'
import { Avatar } from '@mui/material'

const activeLink = {
     color:"#00CF35"
}
const desactiveLink = {
    color:"#f2f2f2"
}
function NavBar() {
   const [viewMenu, setViewMenu] = useState(false)
  
  return (
      <div className='fixed top-0 left-0 w-[100%] h-16 md:h-32 z-20 bg-[#001935] '>
           <div className='w-full md:py-7  px-5 flex justify-between items-center relative'>
               <div className=' md:flex justify-between items-center gap-2 '>
                     <div className=''>
                          <img src={ENI} alt='logo eni lab' className='w-[120px] h-[50px] md:w-[150px] md:h-[50px]'/>
                     </div>
                     <div className='relative'>
                          <input 
                             type="search" 
                             className='hidden  md:block ml-3 focus:outline-none relative p-2 rounded-full mr-3 text-[#868686] bg-[#ffffff21]'
                             
                          />
                          <img style={{color:'white'}}src={Search} alt='icon search' className='hidden  md:absolute top-3 right-10 '/>
                     </div>
               </div>
               <div className='hidden lg:flex md:justify-around md:items-center md:w-1/3'>
                  <NavLink 
                        to='/user/post'
                        style={({isActive})=>
                            isActive ? activeLink: desactiveLink 
                          }
                    >
                        Accueil
                  </NavLink>
                  <NavLink 
                        to='/user/forum'
                        style={({isActive})=>
                            isActive ? activeLink: desactiveLink 
                          }
                    >
                        Forum
                  </NavLink>
                  <NavLink 
                        to='/user/Challenge'
                        style={({isActive})=>
                            isActive ? activeLink: desactiveLink 
                          }
                    >
                        Challenge
                  </NavLink>
               </div>
               <div className='w-[45%] md:w-[20%] flex justify-around gap-2 items-center '>
                    <img src={NotificationIcon} alt='notification icon'className='w-5' />
                    <img src={MessageIcon} alt='message icon' className='w-6 h-6'/>
                    <Avatar
                        alt="Remy Sharp"
                        src={UserProfile}
                        sx={{ width:30, height:30 }}
                    />
                    <span 
                        onClick={()=>setViewMenu(!viewMenu)}
                        className='block lg:hidden'
                    >
                        <img 
                            src={MenuIcon} 
                            alt='menu icon'
                            className='w-5'
                        /> 
                    </span> 
               </div>
             
              
         </div>
         <Menu view={viewMenu} setView={setViewMenu}/>
      </div>
        
    )
}

export default NavBar