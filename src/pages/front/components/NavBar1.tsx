import Logo from '../../../assets/images/Logo.jpeg'
import { GrCart } from "react-icons/gr";
import { TfiMenuAlt } from "react-icons/tfi";
const NavBar = ()  => {
  return (
    <div className=" py-5 flex justify-between items-center shadow-md w-full px-10 ">
          <img src={Logo} className='flex-none   w-10 rounded-full object-cover mr-10 '/>
          <div className='  '>
               <ul className="hidden  md:flex float-left justify-around items-center gap-10 ">
                    <li>heom</li>
                    <li>heom</li>
                    <li>heom</li>
                    <li>heom</li>
               </ul>
          </div>
          <div className='hidden md:flex'>
               <div className=' flex justify-center items-center float-right gap-10'>
                    <div className=' relative'>
                         <GrCart className="" />
                         <span className=' absolute text-sm bottom-1 left-5  '>1</span>
                    </div>
                    <p className=' py-1 bg-slate-100 px-4 font-sans text-md font-bold rounded-lg'>Login</p>
                    <p className=' py-1 bg-gray-700 text-white px-4 font-sans text-md font-bold rounded-lg'>Sign Up</p>
               </div>
          </div>
          <div className=' md:hidden '>
               <TfiMenuAlt />
          </div>
    </div>
  )
}

export default NavBar