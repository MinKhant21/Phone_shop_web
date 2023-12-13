import { useState } from "react";
import { FaEye ,FaEyeSlash } from "react-icons/fa";
export default function Login() {
  const [show,setShow] = useState(true);
  const HandleLogin = () => {

  }
  return (
    <div className=" h-screen w-full flex justify-center items-center mx-auto">
      <div className=" p-5 w-[700px] h-[350px] border   shadow-md rounded-md flex-row justify-center items-center">
        <div className=" border-b-2 pb-5">
          <h1 className=" text-center font-sans font-semibold">Admin Dashboard Login in</h1>
        </div>
        <div className=" flex justify-center items-center gap-4 mt-10">
          <label htmlFor="" className=" font-sans font-bold mr-9">Email</label>: 
          <input type="text" name="email" className=" w-1/2 p-1 rounded-md border pl-4" placeholder="Enter Your Email" />
        </div>
        <div className=" flex justify-center items-center gap-4 mt-10  ">
          <label htmlFor="" className=" font-sans font-bold ">Password</label>:
            <div className="w-1/2  relative">
              <input type={`${show ? 'password' : 'text'}`} name="password" className="w-full p-1 rounded-md bg-white border pl-4" placeholder="Enter Your password" />
              <div className=" absolute top-2 right-3 cursor-pointer" onClick={()=>setShow(!show)}>
                {
                  show ?
                  <FaEye/> :
                  <FaEyeSlash/>
                }
              </div>
            </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <button  onClick={HandleLogin} className=" p-2 bg-purple-400 text-white w-2/3 rounded-md">Login</button>
        </div>
      </div>
    </div>
  )
}
