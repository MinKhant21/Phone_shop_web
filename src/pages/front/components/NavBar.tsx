import { useState } from 'react';
import Logo from '../../../assets/images/Logo.jpeg'
import { GrCart } from "react-icons/gr";
import { TfiMenuAlt } from "react-icons/tfi";
import {
     PaperAirplaneIcon,
     MoonIcon,
     SunIcon,
     Bars3Icon,
   } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
const NavBar = ()  => {
     const [toggleMenu, setToggleMenu] = useState(false);
  return (
    
          <nav>
        <div className="mx-auto shadow-md">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-5 ">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  {/* <PaperAirplaneIcon className="h-6 w-6 text-primary" /> */}
                  <img  src={Logo} className='flex-none   w-10 rounded-full object-cover mr-10 '/>
                  <span>Paper.io</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
                <a href="#" className="">
                  Home
                </a>
                <a href="#">Apple</a>
                <a href="#">Sums Us</a>
                <a href="#">ME</a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
            <div className='hidden md:flex'>
               <div className=' flex justify-center items-center float-right gap-10'>
                    <div className=' relative'>
                         <GrCart className="" />
                         <span className=' absolute text-sm bottom-1 left-5  '>1</span>
                    </div>
                    <Link to={'/login'} className=' py-1 bg-slate-100 px-4 font-sans text-md font-bold rounded-lg hover:bg-slate-200'>Login</Link>
                    <Link className=' py-1 bg-gray-700 text-white px-4 font-sans text-md font-bold rounded-lg'>Sign Up</Link>
               </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="border-l-4 border-gray-600">
                Features
              </a>
              <a href="#">Pricing</a>
              <a href="#">Download</a>
              <a href="#">Classic</a>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default NavBar