import Logo from '../../../assets/images/Logo.jpeg'
const NavBar = ()  => {
  return (
    <nav className=" p-5 flex shadow-md">
          <img src={Logo} className=' w-10 rounded-full object-cover mr-10'/>
          <ul className=" flex justify-around items-center gap-10">
               <li>heom</li>
               <li>heom</li>
               <li>heom</li>
               <li>heom</li>
          </ul>
    </nav>
  )
}

export default NavBar