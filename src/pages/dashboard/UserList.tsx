import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import AddUser from './modals/addUser'
export default function UserList() {
  return (
    <>
      <h1 className=" text-3xl text-black font-sans font-semibold mb-5">Users List</h1>
      <hr />
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg divide-y  dark:border-gray-100">
              <div className=" flex justify-between items-center">
                <div className="py-3 px-4">
                  <div className="relative max-w-xs">
                    <label for="hs-table-search" className="sr-only">Search</label>
                    <input type="text" name="hs-table-search " id="hs-table-search" className="py-2 px-3 ps-9 block w-full border-gray-100 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-200 dark:border-gray-100 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Search for items" />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                      <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </div>
                  </div>
                </div>
                <div className="mr-10">
                  {/* <p className=" cursor-pointer  px-4 py-2 bg-slate-800 font-semibold text-white rounded-md">Add User</p>
                   */}
                  <AddUser/>
                </div>
              </div>
              
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="">
                    <tr>
                      <th scope="col" className="py-3 px-4 pe-0">
                        <div className="flex items-center h-5">
                          <input id="hs-table-search-checkbox-all" type="checkbox" className="border-gray-100 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-100 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                          <label for="hs-table-search-checkbox-all" className="sr-only">Checkbox</label>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase">Name</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase">Age</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-bold text-gray-700 uppercase">Address</th>
                      <th scope="col" className="float-left px-6 py-3 text-end text-xs font-bold text-gray-700 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 ">
                    <tr>
                      <td className="py-3 ps-4">
                        <div className="flex items-center h-5">
                          <input id="hs-table-search-checkbox-1" type="checkbox" className="border-gray-100 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800  dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                          <label for="hs-table-search-checkbox-1" className="sr-only">Checkbox</label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">John Brown</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm ">45</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm ">New York No. 1 Lake Park</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium float-left flex gap-5">
                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                          <FaEdit />
                        </button>
                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                          <RiDeleteBin6Fill />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
