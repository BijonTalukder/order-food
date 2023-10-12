import "./App.css";
import Banner from "./share/Banner/Banner";
import NavBar from "./share/NavBar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCart from "./share/BookCart/BookCart";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import router from "./router/router";
function App() {
  return (
   
    <RouterProvider router={router} />
    

   
  );
}

export default App;
