import axios from 'axios'
import { useEffect, useState } from 'react'


const base_url ='http://localhost:3002'
function usePostApi(url,method,payload) {
     const [isLoading,setIsLoading] = useState(false)
     const [data ,setData] = useState('')
     const [error , setError] =useState(false)
     useEffect( () =>{
         if(!url) return
         setIsLoading(true)
        async function fecthData(){
            try{
                const response = await axios`.${method}(${base_url}/${url},${payload})`
                if(response.status ==='201'){
                    setData(response.data)
                }
            }catch(err){
                setError(true)
                console.log(err)
            }
            finally{
                setIsLoading(false)
            }
            
            
        }
        fecthData()
     },[url,method,payload])
     

  return {isLoading , error ,data}
}

export default usePostApi