import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../pages/dashboard/components/Layout";
import AdminDashBoard from "../pages/dashboard";
import Login from "../pages/dashboard/Login";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export  const Routes = () => {
     const {user} : any = useContext(AuthContext)
     let isAuth = Boolean(user)
     const router = createBrowserRouter([
          {
               path:"/dashboard",
               element: isAuth ? <Layout/> : <Navigate to={"/dashboard/login"}/>,
               children:[
                    {
                         path:"",
                         element:<AdminDashBoard/>
                    }
               ],
          },
          {
               path:"/dashboard/login",
               element:isAuth ? <Login/> : <Navigate to={"/dashboard"}/>,
          }
     ])

     return(
          <RouterProvider router={router}/>
     )
}