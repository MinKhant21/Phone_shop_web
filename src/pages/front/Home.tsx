import Phone15 from '../../assets/phone/15.jpeg'
import { Link } from 'react-router-dom'
import { GrSearch } from "react-icons/gr";
export default function Home() {
  
  return (
    <main className=' ' >
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
      <div  className="  flex justify-center items-center mt-5">
      <div className="flex flex-wrap md:flex-nowrap  gap-5 md:gap-10 md:mx-10">
        <Link className='transition duration-1000 ease-in-out  hover:scale-110  px-5 rounded-lg shadow-md  w-[230px] md:w-1/4 '>
              <img src={Phone15} className=' w-full h-2/4 ' alt="" />
              <div className=' flex justify-between items-center mt-3 '>
                <div className=' flex items-center gap-10'>
                  <span className=' font-sans font-bold'>130,000 MMK</span>
                </div>
                <div>
                  <p>{10} stock</p>
                </div>
              </div>
              <div className=' max-w-md'>
                description
              </div>
              <div className=' float-right'>
                <p className=' px-4 py-1 text-sm font-sans font-bold text-center text-white bg-gray-600 rounded-md w-max mt-3'>Add To Cart</p>
              </div>
        </Link>
        <Link className='transition duration-1000 ease-in-out  hover:scale-110  px-5 rounded-lg shadow-md  w-[230px] md:w-1/4 '>
              <img src={Phone15} className=' w-full h-2/4 ' alt="" />
              <div className=' flex justify-between items-center mt-3 '>
                <div className=' flex items-center gap-10'>
                  <span className=' font-sans font-bold'>130,000 MMK</span>
                </div>
                <div>
                  <p>{10} stock</p>
                </div>
              </div>
              <div className=' max-w-md'>
                description
              </div>
              <div className=' float-right'>
                <p className=' px-4 py-1 text-sm font-sans font-bold text-center text-white bg-gray-600 rounded-md w-max mt-3'>Add To Cart</p>
              </div>
        </Link>
        <Link className='transition duration-1000 ease-in-out  hover:scale-110  px-5 rounded-lg shadow-md  w-[230px] md:w-1/4 '>
              <img src={Phone15} className=' w-full h-2/4 ' alt="" />
              <div className=' flex justify-between items-center mt-3 '>
                <div className=' flex items-center gap-10'>
                  <span className=' font-sans font-bold'>130,000 MMK</span>
                </div>
                <div>
                  <p>{10} stock</p>
                </div>
              </div>
              <div className=' max-w-md'>
                description
              </div>
              <div className=' float-right'>
                <p className=' px-4 py-1 text-sm font-sans font-bold text-center text-white bg-gray-600 rounded-md w-max mt-3'>Add To Cart</p>
              </div>
        </Link>
        <Link className='transition duration-1000 ease-in-out  hover:scale-110  px-5 rounded-lg shadow-md  w-[230px] md:w-1/4 '>
              <img src={Phone15} className=' w-full h-2/4 ' alt="" />
              <div className=' flex justify-between items-center mt-3 '>
                <div className=' flex items-center gap-10'>
                  <span className=' font-sans font-bold'>130,000 MMK</span>
                </div>
                <div>
                  <p>{10} stock</p>
                </div>
              </div>
              <div className=' max-w-md'>
                description
              </div>
              <div className=' float-right'>
                <p className=' px-4 py-1 text-sm font-sans font-bold text-center text-white bg-gray-600 rounded-md w-max mt-3'>Add To Cart</p>
              </div>
        </Link>
        <Link className='transition duration-1000 ease-in-out  hover:scale-110  px-5 rounded-lg shadow-md  w-[230px] md:w-1/4 '>
              <img src={Phone15} className=' w-full h-2/4 ' alt="" />
              <div className=' flex justify-between items-center mt-3 '>
                <div className=' flex items-center gap-10'>
                  <span className=' font-sans font-bold'>130,000 MMK</span>
                </div>
                <div>
                  <p>{10} stock</p>
                </div>
              </div>
              <div className=' max-w-md'>
                description
              </div>
              <div className=' float-right'>
                <p className=' px-4 py-1 text-sm font-sans font-bold text-center text-white bg-gray-600 rounded-md w-max mt-3'>Add To Cart</p>
              </div>
        </Link>
      </div>
      </div>
    </main>
  )
}
