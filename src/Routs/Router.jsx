import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "./../pages/Order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRout from "./privateRoute/PrivateRout";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRout><Dashboard></Dashboard></PrivateRout>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },

      // admin Routes
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      }
    ]
  }
]);