import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//pages
import Home from './Pages/Home.jsx'
import Onama from './Pages/Onama.jsx'
import Usluge from './Pages/Usluge.jsx'
import Transformacija from './Pages/Transformacija.jsx'
import Utisci from './Pages/Utisci.jsx'
import Kontakt from './Pages/Kontakt.jsx'
import PageNotFound from './Pages/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'pocetna',
        element: <Home />
      },
      {
        path: 'onama',
        element: <Onama />
      },
      {
        path: 'usluge',
        element: <Usluge />
      },
      {
        path: 'transformacija',
        element: <Transformacija />
      },
      {
        path: 'utisci',
        element: <Utisci />
      },
      {
        path: 'kontakt',
        element: <Kontakt />
      },
      {
        path: '*',
        element: <PageNotFound />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
