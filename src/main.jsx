import * as React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Component/Layout/Root.jsx';
import Home from "./Component/Pages/Home/Home.jsx";
import Login from "./Component/Pages/Login/Login.jsx";
import Register from "./Component/Pages/Register/Register.jsx";
import Error from "./Component/Pages/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'Register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },

]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
