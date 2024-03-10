import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Category from './pages/Products/Category';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Provider} from 'react-redux';
import VeniaProductPage from './pages/VeniaProductPage/VeniaProductPage';

const Layout = () =>{
  return (
    <>
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    
    },
    {
      path:"/products/:id",
      element:<Category/>
    
    },
    {
      path:"/product/:id",
      element:<Product/>
    },
    {
      path:"/venia/:id",
      element:<VeniaProductPage/>
    }
  ]
}
,{
  path:"/about",
  element:<span>About</span>
}])

function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
