import { useState } from "react"

export default function UserForm() {
     const [userForm , setUserForm] = useState(true)
  return (
          <div className=" flex justify-center items-center mx-auto min-h-screen">
               <div className="w-[400px] md:w-1/2 bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0  shadow-md">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    {
                         userForm ?
                              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                   Login in to your account
                              </h1>
                         :
                         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                              Sign Up in to your account
                         </h1>
                    }
                    
                    <form className="space-y-4 md:space-y-6" action="#">
                         <div>
                              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"/>
                         </div>
                         <div>
                              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                              <input 
                                   type="password" 
                                   name="password" 
                                   id="password" 
                                   placeholder="••••••••" 
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              />
                         </div>
                         <div className="flex items-center justify-between">
                              <div className="flex items-start">
                                   <div className="flex items-center h-5">
                                   <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                   </div>
                                   <div className="ml-3 text-sm">
                                   <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                   </div>
                              </div>
                              <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                         </div>
                         <button type="submit" className=" btn btn-primary w-full">Sign in</button>
                         <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                              Don’t have an account yet? 
                              {
                                   userForm ?
                                   <p className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={()=>setUserForm(!userForm)}>Sign up</p>
                                   :
                                   <p className="font-medium text-primary-600 hover:underline dark:text-primary-500"  onClick={()=>setUserForm(!userForm)}>Login In</p>
                              }
                         </p>
                    </form>
                    </div>
               </div>
          </div>
  )
}
