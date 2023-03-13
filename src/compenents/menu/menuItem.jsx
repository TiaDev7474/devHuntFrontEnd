import {React , memo}from 'react'
import { NavLink } from 'react-router-dom'

function MenuItem({href,name}) {
  return (
    
         <NavLink 
            to={href}
                style={({isActive})=>
                    isActive ? activeLink: desactiveLink 
                }
                 className='py-5  px-10'
          >
                {name}
         </NavLink>

  )
}

const activeLink = {
    color:"#00CF35"
}
const desactiveLink = {
   color:"#0d0d0d"
}

export default memo(MenuItem);