
import axios from 'axios'
const Base_URL= process.env.BASE_URL

export async function login(email, password){
    
     try{
          const response= await axios.post(`${Base_URL}/auth/login`,{
              body:{
                   email:email,
                   password:password
              }
          })
          if (response.status==='200'){
              dispatch()
          }
     }catch(err){

     }

}