export function authReducer(state, {type,action}){
    switch(type){
        case 'LOGIN':{
          return{
            ...state,
            isAuthenticated:true,
            user:{
                ...state.user,
                ...action.payload,
            }
          } 
        }
        case'LOGOUT':{
            return {
                ...state,
                isAuthenticated:false,
                user:null
            }
          
        }
        case'SIGNUP':{
                return{
                  ...state,
                  isAuthenticated:true,
                  user:{
                      ...state.user,
                      ...action.payload,
                  }
                } 
        }
           
        default:{
            return state

        }
    }
}