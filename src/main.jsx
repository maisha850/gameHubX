import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root.jsx'
import Home from './Pages/Home.jsx'
import GameDetails from './Components/GameDetails.jsx'
import LogIn from './Components/LogIn.jsx'
import Register from './Components/Register.jsx'
import AuthProvider from './Components/Auth/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import ErrorPage from './Pages/ErrorPage.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'
import About from './Pages/About.jsx'
import ResetPass from './Pages/ResetPass.jsx'
import Profile from './Pages/Profile.jsx'
import UpdProfile from './Pages/UpdProfile.jsx'
const router= createBrowserRouter([
  {
    path:'/',
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        Component: Home,
        loader:()=>fetch('/game.json')
      },
      {
        path: '/gameDetails/:id',
        loader: ()=>fetch('/game.json'),
       element:<PrivateRoute>
        <GameDetails></GameDetails>
       </PrivateRoute>
      },
      {
        path:'/logIn',
        Component: LogIn

      },
      {
        path:'/register',
        Component: Register
      },
      {
        path:'/about',
        Component: About
      },
      {
        path:'/resetPassword',
        Component: ResetPass
      },
      {
        path: '/profile',
        Component: Profile
      },
      {
        path:'/updateProfile',
        Component:UpdProfile
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   <ToastContainer></ToastContainer>
</AuthProvider>
  </StrictMode>,
)
