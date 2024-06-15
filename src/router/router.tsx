import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../page/Authentication/Login";
import Registration from "../page/Authentication/Registration";
import DashboardLayout from "../page/DashBoards/Layout/Layout";
import Profile from "../page/DashBoards/Profile";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>

    },
    {
        path:'/Login',
        element:<Login/>
    },
    {
        path:'/Sign-up',
        element:<Registration/>
    },
   {
    
    path:'/dashboard',
    element:<DashboardLayout/>,
    children:[
        {
            path:"profile",
            element:<Profile/>
        }        
    ]
   }
    
  
    // {
    //     path:'/All-Books',
    //     element:<BookC
    // }

])
export default router 