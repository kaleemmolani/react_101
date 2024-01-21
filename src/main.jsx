import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { Root } from './root.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from './pages/dashboard.jsx';
import { Profile } from './pages/profile.jsx';
import ErrorPage from './pages/error-page.jsx';
import { ProductPage } from './pages/product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:'dashboard',
        element: <Dashboard />
      },
      {
        path:'profile',
        element: <Profile />
      },
      {
        path:'properties',
        element:<ProductPage />
      }
    ],
    errorElement:<ErrorPage />
  }
]);
ReactDOM.createRoot(document.getElementById('hello')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
