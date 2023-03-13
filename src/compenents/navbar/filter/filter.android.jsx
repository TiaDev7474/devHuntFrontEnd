import React from 'react'
import { Link } from 'react-router-dom'
import FilterIcon from '../../../assets/imagess/filter.svg'


const topic = 'all'
const links= [
    {
        to:`user/post?topic=${topic}}&filterBy=All`,
        name:'All'
    },
    {
        to:`user/post?topic=${topic}&filterBy=Newest`,
        name:'Newest'
    },
    {
        to:`user/post?topic=${topic}&filterBy=TopRank`,
        name:'Top Ranking'
    }
]
function Filter() {
  return (
    <div className='fixed px-4 top-16 h-[50px] bg-[#001935] z-10 w-full md:hidden'>
           <div className='w-[100%] text-[#f2f2f2] flex justify-between items-center'>
               <div className='text-[14px]'>
                    {
                            links.map(link =>{
                                return(
                                    <Link 
                                    to={link.to}
                                    className=' border px-3 py-2'
                                    >
                                    {link.name}
                                    </Link>
                                )
                            })
                        }
               </div>
                
                <div className=' items-cener  flex justify-end  gap-2 bg-[#ffffff13] py-2 px-5'>
                     <img src={FilterIcon} alt='filter icon'className='w-5'/>
                     <span className='text-[14px]'>Filter</span>
                </div>
                
           </div>
           
    </div>
  )
}

export default Filter
