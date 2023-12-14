import { useState } from "react";
import { FaEye ,FaEyeSlash } from "react-icons/fa";
import useSubmit from "../../hooks/useSubmit";
interface Data {
  email : string ,
  password : string 
}
export default function Login() {
  const [show,setShow] = useState(true);
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const {Login,loading,message} = useSubmit();

  const HandleLogin = async (e:any) => {
    e.preventDefault();
    let data:Data = {
      email,
      password
    }
    let resData = await Login(data)
    console.log(resData)
  }
  return (
    <div className=" h-screen w-full flex justify-center items-center mx-auto">
      <h1>{loading && <p>loading.........</p>}</h1>
      <div className=" p-5 w-[700px] h-[350px] border   shadow-md rounded-md flex-row justify-center items-center">
        <div className=" border-b-2 pb-5">
          <h1 className=" text-center font-sans font-semibold">Admin Dashboard Login in</h1>
        </div>
        <div className=" flex justify-center items-center gap-4 mt-10">
          <label htmlFor="" className=" font-sans font-bold mr-9">Email</label>: 
          <input type="text" name="email" 
            className=" w-1/2 p-1 rounded-md border pl-4" 
            placeholder="Enter Your Email" 
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <div className=" flex justify-center items-center gap-4 mt-10  ">
          <label htmlFor="" className=" font-sans font-bold ">Password</label>:
            <div className="w-1/2  relative">
              <input type={`${show ? 'password' : 'text'}`} name="password" 
                className="w-full p-1 rounded-md bg-white border pl-4" 
                placeholder="Enter Your password" 
                onChange={(e)=>setPassword(e.target.value)}
              />
              <div className=" absolute top-2 right-3 cursor-pointer" onClick={()=>setShow(!show)}>
                {
                  show ?
                  <FaEye/> :
                  <FaEyeSlash/>
                }
              </div>
            </div>
        </div>
        <div className=" text-center">
            {message ? <p className=" mr-20 mt-3 text-red-500 text-sm">{message}</p> :  ""}
        </div>
        <div className="flex justify-center items-center mt-10">
          <button  onClick={HandleLogin} className=" p-2 bg-purple-400 text-white w-2/3 rounded-md">Login</button>
        </div>
      </div>
    </div>
  )
}
