import { Link } from "react-router-dom";
import useGetUser from "../../hooks/useGetUser";
import { useEffect } from "react";
import Loading from '../../component/Loading'
export default function UserList() {
  let {loading,error,users,getUsers} = useGetUser()
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <>
     
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <Link to={"/dashboard/user/create"} className=" cursor-pointer  px-3 w-15 py-2 text-white rounded-lg text-center mb-5 f bg-danger">
        Add
      </Link>
      <br />
      {
      !loading ?
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                UserName
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Invoice date
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user : any)=>
                  <UserList key={user.id} user={user}/>
              )
            }
          </tbody>
        </table>
      </div>
      : <h1>Not have Data</h1>
     } 
    </div> 
    </>
  )
}
