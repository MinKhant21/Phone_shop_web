import { Outlet, useLocation } from "react-router-dom";
import { SwitchTransition , CSSTransition } from "react-transition-group"
import SideNavbar from "./SideNavbar";
function Layout() {
    
     const location = useLocation();
     return (
          <>
             <div className='flex gap-96'>
               <SideNavbar/>

               <SwitchTransition>
                    <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
                         <div className=" relative p-10 h-screen w-full  ">
                              <Outlet/>
                         </div>
                    </CSSTransition>
               </SwitchTransition>
             </div>
          </>
     )
 }

 export default Layout 
