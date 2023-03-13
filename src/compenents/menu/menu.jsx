import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import CloseIcon from '../../assets/imagess/Close.svg'
import MenuItem from './menuItem'



function Menu({view, setView}) {
    
  return (
    <AnimatePresence>
       
         <motion.aside
            initial={
            {
               width:0,
    
            }
            }
            animate={{
               width:200,
             
            }}
         className={view ?'absolute right-0  bg-white min-h-screen z-50':'hidden'}
         >
            <span onClick={()=> setView(!view)}>
                <img src={CloseIcon} alt="close icon" className='p-2 rounded-full hover:bg-gray-300 cursor-pointer'/>  
            </span>
            <motion.div 
               initial="closed"
               animate="open"
               variants={sideVariants}
               className='flex flex-col items-center gap-1'
            >
                 {links.map((link, index) =>{
                    return (<MenuItem href={link.href} name={link.name} key={index}/>) 
                 })}
               
            </motion.div>
         </motion.aside>
    </AnimatePresence>
  )
}
const sideVariants= {
    closed:{
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }

    },
    open:{
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
         }

    }
}

const links = [
    {
        href:'/user/post',
        name:'Accueil'
    },
    {
        href:'/user/forum',
        name:'Forum'
    },
    {
        href:'/user/challenge',
        name:'Challenge'
    },
]

export default Menu