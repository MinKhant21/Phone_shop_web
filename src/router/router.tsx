import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/dashboard/components/Layout";
import AdminDashBoard from "../pages/dashboard";
import Login from "../pages/dashboard/Login";

const router = createBrowserRouter([
     {
          path:"/dashboard",
          element:<Layout/>,
          children:[
               {
                    path:"",
                    element:<AdminDashBoard/>
               }
          ],
     },
     {
          path:"/dashboard/login",
          element:<Login/>
     }
])

export default router