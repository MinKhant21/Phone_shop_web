import axios from "axios"
import {  useState } from "react"
import {MOBILE_API} from '../utils/constant'

export default function useFetch() {
     let [productList,setProductList] = useState([])

     const fetchProducts = async () => {
          try {
               await axios.get(`${MOBILE_API}?_page=1&_limit=10`)
               .then((data : any)=>{
                    setProductList(data.data)
               })
          } catch (error) {
               console.error(error)
          }
          
     }
     return {
          productList,
          fetchProducts
     }
}
