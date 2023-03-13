import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../features/authentification/Login'
import Signup from '../features/authentification/Signup'
import Confirmation from '../features/authentification/Confirmation'

function AuthLayout() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/confirmation' element={<Confirmation/>}/>
    </Routes>
  )
}

export default AuthLayout