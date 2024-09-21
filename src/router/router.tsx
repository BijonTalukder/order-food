import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../page/Authentication/Login";
import Registration from "../page/Authentication/Registration";
import DashboardLayout from "../page/DashBoards/Layout/Layout";
import Profile from "../page/DashBoards/Profile";
import CreateProductCategory from "../page/DashBoards/ProductType/CreateProductCategory";
import ListProductCategory from "../page/DashBoards/ProductType/ListProductCategory";
import ViewProductType from "../page/DashBoards/ProductType/ViewProductType";
import CreateStores from "../page/DashBoards/stores/CreateStores";
import StoresProfile from "../page/Stores/StoresProfile/StoresProfile";
import CreateProduct from "../page/DashBoards/Product/CreateProduct";
import StoreLayoutComponent from "../component/StoreLayoutComponent/StoreLayoutComponent";
// import StoreCart from "../component/StoreLayoutComponent/StoreLayoutComponent";
// import StoreLaout from "../component/StoreLayoutComponent/"

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
        path:"store/:id",
        element:<StoresProfile/>
    },
    {
        path:"/store",
        element:<StoreLayoutComponent/>
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
        },
        {
            path:"create-food",
            element:<CreateProduct/>
            
        }
    ]
   }


    // {
    //     path:'/All-Books',
    //     element:<BookC
    // }

])
export default router