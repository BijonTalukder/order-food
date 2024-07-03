import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../page/Authentication/Login";
import Registration from "../page/Authentication/Registration";
import DashboardLayout from "../page/DashBoards/Layout/Layout";
import Profile from "../page/DashBoards/Profile";
import CreateProductCategory from "../page/DashBoards/Product/CreateProductCategory";
import ListProductCategory from "../page/DashBoards/Product/ListProductCategory";
import ViewProductType from "../page/DashBoards/Product/ViewProductType";
import CreateStores from "../page/DashBoards/stores/CreateStores";
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
        },
        {
            path:"category",
            element:<CreateProductCategory/>
        }     ,
        {
            path:"list-category",
            element:<ListProductCategory/>
        }  ,
        {
            path:"view-category/:id",
            element:<ViewProductType/>
        } ,
        {
            path:"create-store",
            element:<CreateStores/>
        }
    ]
   }


    // {
    //     path:'/All-Books',
    //     element:<BookC
    // }

])
export default router