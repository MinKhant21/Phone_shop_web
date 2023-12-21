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
export const Routes = () => {
     const { user   }: any = useContext(AuthContext);
     const isAuth = Boolean(user);
     
     const getDashboardRoute = () => {
       if (isAuth) {
         return {
           path: "/dashboard",
           element: <DLayout />,
           children: [
             {
               path: "",
               element: <AdminDashBoard />,
             },
           ],
         };
       }else{
          return {
               path: "/dashboard/login",
               element: <Login />,
             };
       }
      
     };
   
     const routes = [
       {
         path: "/",
         element: <Layout />,
         children: [
           {
             path: "",
             element: <Home />,
           },
           {
             path: "/login",
             element: <UserForm />,
           },
         ],
       },
       getDashboardRoute(),
       {
         path: "*",
         element: <NotFound />,
       },
     ];
   
     const router = createBrowserRouter(routes);
   
     return <RouterProvider router={router} />;
   };