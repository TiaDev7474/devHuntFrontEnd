import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import {Sidebar} from '../compenents'
import {Feed} from '../compenents'
import {Rightbar} from '../compenents'
import { AsidePostFilter, AsidePostSuggestion} from '../features/publication'
function Postlayout() {
  return (
    <Fragment>
        <Sidebar>
             <AsidePostFilter/>
        </Sidebar>
        <Feed>
             <Outlet/>
        </Feed>
        <Rightbar>
             <AsidePostSuggestion/>
        </Rightbar>
    </Fragment>
     
  )
}

export default Postlayout