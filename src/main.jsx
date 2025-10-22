import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root.jsx'
import Home from './Pages/Home.jsx'
import GameDetails from './Components/GameDetails.jsx'
const router= createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {
        index:true,
        Component: Home,
        loader:()=>fetch('/game.json')
      },
      {
        path: '/gameDetails/:id',
        loader: ()=>fetch('/game.json'),
        Component: GameDetails
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
