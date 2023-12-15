import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { SwitchTransition , CSSTransition } from "react-transition-group"
import Footer from "./Footer";
export default function Layout() {
  const location = useLocation();

  return (
    <>
    <NavBar/>
    <SwitchTransition>
      <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
        <div className=" h-screen">
          <Outlet/>
        </div>
      </CSSTransition>
    </SwitchTransition>
    <Footer/>
  </>
  )
}
