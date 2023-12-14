import { createContext, useEffect, useReducer } from "react";


let AuthContext : any = createContext();

let AuthReducer = (state: any,action: any) => {
     switch (action.type) {
          case "LOGIN":
               return {...state,user:action.payload}
               break;
          case "LOGOUT":
               return {...state,user:action.payload}
          default:
               return state
               break;
     }
}
const AuthContextProvider = ({children} : any)   => {
     let [state ,dispatch] = useReducer(AuthReducer,{user:null})
     useEffect(()=>{
         let userData : any = localStorage.getItem('userData')
         if(userData){
               dispatch({type:"LOGIN",payload : userData})
         }else{
               dispatch({type:"LOGOUT"})
         }
     },[])
     return (
          <AuthContext.Provider value={state}>{children}</AuthContext.Provider> 
     )
}

export {AuthContext,AuthContextProvider}