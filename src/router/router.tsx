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
import UserList from "../pages/dashboard/UserList";
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
              element:<UserList/>
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