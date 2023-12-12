import { Outlet, useLocation } from "react-router-dom";
import { SwitchTransition , CSSTransition } from "react-transition-group"
import SideNavbar from "./SideNavbar";
function Layout() {
    
     const location = useLocation();
     return (
          <>
             <div className=' flex'>
               <SideNavbar/>
               <SwitchTransition>
                    <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
                    <Outlet/>
                    </CSSTransition>
               </SwitchTransition>
             </div>
          </>
     )
 }

 export default Layout 
