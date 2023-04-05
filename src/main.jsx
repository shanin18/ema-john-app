import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import OrderReview from './components/OrderReview/OrderReview'
import ManageInventory from './components/ManageInventory/ManageInventory'
import Login from './components/Login/Login'
import cartProductsLoader from './loaders/cartProductLoader'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path:"/review",
        element:<OrderReview></OrderReview>,
        loader: cartProductsLoader
      },
      {
        path:"/inventory",
        element: <ManageInventory></ManageInventory>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  },
  
]) 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
