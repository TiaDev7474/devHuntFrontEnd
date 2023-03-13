import React from 'react'
import { Outlet } from 'react-router-dom'
import { AsidePostFilter, AsidePostSuggestion } from '../features/publication'
import {Sidebar , Feed , Rightbar} from '../compenents'
function Postlayout() {
  return (
    <div className=' relative w-full'>
        <Sidebar>
            <AsidePostFilter/>
        </Sidebar>

        <Feed>
            <Outlet/>
        </Feed>
        <Rightbar>
             <AsidePostSuggestion/>
        </Rightbar>
    </div>
  )
}

export default Postlayout