import axios from "axios"
import { useState } from "react"
import {BACKEND_URL} from '../utils/constant'
export default function useGetUser() {
     let [loading ,setLoading] = useState(true)
     let [error ,setError] = useState(null)
     let [users,setUsers] = useState([])
     const getUsers =  async () => {
          try {
               let res : any = await axios.get(`${BACKEND_URL}/user-list`,{
                    headers:{
                         "Content-Type" : "application/json",
                         "x-auth-token" : localStorage.getItem('token')
                    }
               })
               if(res){
                    setLoading(false)
                    setUsers(res.data.data)

               }else{
                    setLoading(true)
               }
          } catch (error : any) {
               setError(error)
          }
     }
     
     return {
          loading,
          error ,
          users,
          getUsers
     }
}
