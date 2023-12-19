import { GrSearch } from "react-icons/gr";

export default function SearchBar() {
  return (
     <div className=' flex justify-end items-center mt-10 mx-28'> 
     <div className=' w-full'>
       <div className='relative full '>
         <input type="text" className=' p-2 border w-4/5 text-gray-400 rounded-md' placeholder='Search Product Name' />
         <GrSearch className=" absolute top-3 right-6 left-3/4 w-16" />
       </div>
     </div>
     <div className='flex gap-10'>
       <div className="dropdown w-[200px]">
           <div tabIndex={0} role="button" className="btn m-1 w-[200px]">Click</div>
             <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
               <li><a>Item 1</a></li>
               <li><a>Item 2</a></li>
             </ul>
       </div>
       <div className="dropdown w-[200px]">
           <div tabIndex={0} role="button" className="btn m-1 w-[200px]">Click</div>
             <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
               <li><a>Item 1</a></li>
               <li><a>Item 2</a></li>
             </ul>
       </div>
       <div className="dropdown w-[200px]">
           <div tabIndex={0} role="button" className="btn m-1 w-[200px]">Click</div>
             <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
               <li><a>Item 1</a></li>
               <li><a>Item 2</a></li>
             </ul>
       </div>
     </div>
   </div>
  )
}
