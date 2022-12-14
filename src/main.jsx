import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WalletConnection from './components/WalletConnection'
import './index.css'
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'
import StoreBuilder from './pages/StoreBuilder'

const router = createBrowserRouter([
  {
    path: '/store-builder',
    element: (
      <WalletConnection>
        <StoreBuilder />
      </WalletConnection>
    ),
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
