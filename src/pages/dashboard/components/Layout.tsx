import { Outlet, useLocation } from "react-router-dom";
import { SwitchTransition , CSSTransition } from "react-transition-group"
function Layout() {
    
     const location = useLocation();
     return (
         <>
             <div className=''>
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
