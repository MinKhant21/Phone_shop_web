import {  useState } from "react";
import { FaEye ,FaEyeSlash } from "react-icons/fa";

export default function addUser() {
  const [show,setShow] = useState(true);
  const [password,setPassword] = useState<string>('');
     const [email,setEmail] = useState("")
     const [name,setName] = useState("")
  return (
    <>
          <button className="btn btn-primary cursor-pointer  font-semibold text-white rounded-md" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
          <dialog id="my_modal_2" className="modal">
               <div className="modal-box">
               <h3 className="font-bold text-lg">User Create Form</h3>
               <div className=" flex justify-center items-center gap-4 mt-10">
                    <label htmlFor="" className=" font-sans font-bold mr-9">Name</label>: 
                    <input type="text" name="email" 
                    className=" w-1/2 p-1 rounded-md border pl-4" 
                    placeholder="Enter Your Email" 
                    onChange={(e)=>setName(e.target.value)}
                    />
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
               </div>
               <form method="dialog" className="modal-backdrop">
               <button>close</button>
               </form>
          </dialog>
    </>
  )
}
