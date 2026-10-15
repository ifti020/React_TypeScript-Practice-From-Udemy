import React, { useState } from 'react'

import './App.css'
import Navbar from "./componenets/Navbar.jsx";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Home from "./componenets/Home.jsx";
import Login from "./componenets/Login.jsx";
import About from "./componenets/About.jsx";
import User from "./componenets/User.jsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Navbar />
                    <Outlet /> {/* এখানে হোম, এবাউট বা লগইন লোড হবে */}
                </>
            ),
            children: [
                { path: "/", element: <Home /> },
                { path: "/about", element: <About /> },
                { path: "/login", element: <Login /> },
                { path: "/user/:username", element: <User /> }
            ]
        }
    ]);

  return (
    <>

        <RouterProvider router={router}/>
      <br/>
      <div>
      <h4>This is body</h4>
    </div>
    </>
  )
}

export default App
