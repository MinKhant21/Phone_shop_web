import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Home from "../pages/front/Home";
import Layout from "../pages/front/components/Layout";
import UserForm from '../pages/front/UserForm'
import NotFound from "../component/NotFound";
import Login from "../pages/dashboard/Login";
import DLayout from "../pages/dashboard/components/Layout";
import AdminDashBoard from "../pages/dashboard";
import User from "../pages/dashboard/User";
import UserFormHandle from "../pages/dashboard/components/user/UserFormHandle";
import Category from "../pages/dashboard/modules/Category/Category";
import CreateCategory from "../pages/dashboard/modules/Category/CreateCategory";



export const Routes = () => {
  const { user   }: any = useContext(AuthContext);
  const isAuth = Boolean(user);
     const routes = [
        {
          path: "/dashboard",
          element: isAuth ?  <DLayout />  : <Login/>,
          children: [
            {
              path: "",
              element:<AdminDashBoard />,
            },
            {
              path:"/dashboard/users",
              element:<User/>
            },
            {
              path:"user/create",
              element:<UserFormHandle/>
            },
            {
              path:"/dashboard/categories",
              element:<Category/>,
            },
            {
              path:"/dashboard/categories/create",
              element:<CreateCategory/>
            }
          ],
        },
        {
          path:"/dashboard/login",
          element:!isAuth ? <Login/> : <Navigate to={'/dashboard'}/>
        },
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
       {
         path: "*",
         element: <NotFound />,
       },
     ];
   
     const router = createBrowserRouter(routes);
   
     return <RouterProvider router={router} />;
   };