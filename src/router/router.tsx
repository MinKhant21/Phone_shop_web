import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/dashboard/components/Layout";
import AdminDashBoard from "../pages/dashboard";

const router = createBrowserRouter([
     {
          path:"/dashboard",
          element:<Layout/>,
          children:[
               {
                    path:"",
                    element:<AdminDashBoard/>
               }
          ]
     }
])

export default router