import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import DLayout from "../pages/dashboard/components/Layout";
import AdminDashBoard from "../pages/dashboard";
import Login from "../pages/dashboard/Login";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Home from "../pages/front/Home";
import Layout from "../pages/front/components/Layout";
import UserForm from '../pages/front/UserForm'
import NotFound from "../component/NotFound";

export  const Routes = () => {
     const {user} : any = useContext(AuthContext)
     let isAuth = Boolean(user)
     const router = createBrowserRouter([
          {
               path : "/",
               element : <Layout/>,
               children:[
                    {
                         path:"",
                         element : <Home/>
                    },
                    {
                         path:'/login',
                         element:<UserForm/>
                    }
               ]
          },
          {
               path:"/dashboard",
               element: isAuth ? <DLayout/> : <Navigate to={"/dashboard/login"}/>,
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
          },
          {
               path:"*",
               element:<NotFound/>
          }
     ])

     return(
          <RouterProvider router={router}/>
     )
}