import "./App.css";
import Banner from "./share/Banner/Banner";
import NavBar from "./share/NavBar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCart from "./share/BookCart/BookCart";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import router from "./router/router";
import {useEffect} from 'react'
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "./redux/feature/Auth/AuthSlice";
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setLoading(true))
    const token = localStorage.getItem("token")
    const user =JSON.parse(localStorage.getItem("user")) 
    console.log(user,'hhh');
    
    console.log(token);
    if(token){
      dispatch(setUser(user))
      dispatch(setLoading(false))
    }
    else{
      dispatch(setLoading(false))
    }

  },[dispatch])
  return (
   
    <RouterProvider router={router} />
    

   
  );
}

export default App;
