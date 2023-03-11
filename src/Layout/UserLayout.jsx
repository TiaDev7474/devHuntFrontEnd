import React from 'react'
import Navbar from '../compenents/navbar'

function Userlayout({childreen}) {
  return (
    <div>
        <Navbar/>
        {childreen}
    </div>
  )
}

export default Userlayout