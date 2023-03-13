import React, { createContext, useReducer, useState } from 'react'
import {authReducer } from './authreducer'
import axios from 'axios'
export const AuthContext = createContext() 
export const AuthDispatchContext= createContext()

const initialState= {
    isAuthenticated:false,
    user:null
}
function Authcontext({children}) {
    const [user, dispatch] = useReducer(authReducer,initialState)
    const [error, setError] = useState("")
    const [loading, setLoading]= useState(false)

    const  login = async(email, password)=>{
        try{
             setLoading(true)
             const response= await axios.post('http://localhost:3002/api/auth/login',{
                 body:{
                      email:email,
                      password:password
                 }
             })
             if (response.status==='201'){
                const {userId, isAdmin, token} = response.data
                 dispatch({type:'LOGIN',payload:{id:userId,isAdmin:isAdmin,token:token}})
                 localStorage.setItem('token',token)
             }else if (!response.ok){
                 setError("server error")
             }
        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
   
   }

      
  return (
     <AuthContext.Provider value={{error, user, loading ,login}}>
           <AuthDispatchContext.Provider value={dispatch}>
                     {children}
           </AuthDispatchContext.Provider> 
     </AuthContext.Provider>
  )
}

export default Authcontext

