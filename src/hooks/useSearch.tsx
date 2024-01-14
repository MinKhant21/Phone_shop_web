import { useState } from "react";
import { BACKEND_URL } from "../utils/constant";
import axios from "axios";
export default function useSearch() {
  let [searchData, setSearchData] = useState([]);
  const searchIdFetch = async ({ id, module }: any) => {
    let res = await axios.get(
      `${BACKEND_URL}/search?id=${id}&module=${module}`,
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );
    setSearchData(res.data.data);

    //     .then((result)=>{
    //          if (result.status == "200") {
    //           if(result.data.data){
    //                setSearchData(result.data)
    //                console.log(searchData)
    //           }
    //      }
    //     })
  };
  return {
    searchData,
    searchIdFetch,
  };
}
