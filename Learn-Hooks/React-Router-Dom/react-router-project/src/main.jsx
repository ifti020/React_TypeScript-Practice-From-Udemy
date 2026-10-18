import {StrictMode} from 'react'

import './index.css'

import Home from "./components/home/Home.jsx";
import Layout from "./Layout.jsx";
import About from "./components/about/About.jsx";

import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route, useLoaderData} from 'react-router-dom'
import Contact from "./components/contact/Contact.jsx";
import {createRoot} from 'react-dom/client'
import User from "./components/User/User.jsx";
import GitHub, {gitHubInfoLoader} from "./components/github/GitHub.jsx";


// Its an option for routing
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout/>,
//         children: [
//                         {
//                         path:"",
//                             element: <Home/>
//                         },
//                         {
//                         path:"about",
//                         element: <About/>
//                         },
//                           {
//                               path:"contact",
//                                 element: <Contact/>
//                              }
//                      ]
//     }
//     ])

// its very is option for routing..


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={`/`} element={<Layout/>}>
            <Route path={``} element={<Home/>}/>
            <Route path={`/about`} element={<About/>}/>
            <Route path={`/contact`} element={<Contact/>}/>
            <Route path={`/user/:userid`} element={<User/>}/>
            <Route
                loader={gitHubInfoLoader}
                path={`/github`} element={<GitHub/>}/>
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
