import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../page/Authentication/Login";
import Registration from "../page/Authentication/Registration";
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
    }
    // {
    //     path:'/All-Books',
    //     element:<BookC
    // }

])
export default router 