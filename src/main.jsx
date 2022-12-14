import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import './index.css'
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'
import StoreBuilder from './pages/StoreBuilder'

const router = createBrowserRouter([
  {
    path: '/store-builder',
    element: <StoreBuilder />,
  },
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
