import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main />,
      children:[
        {
            path:'/',
            element: <Home />
        },
        {
          path:'/menu',
          element:<Menu />
        },
        {
          path:'/order/:category',
          element:<Order />
        },
        {
          path:'/login',
          element:<Login />
        }
      ]
    },
  ]);