import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import App from './App.jsx'
import './index.css'
import "@plusui/core/style.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Demo from './Demo.jsx';
import Signup from './Signup.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
    <RouterProvider router={router} />
    </Theme>
   
  </React.StrictMode>,
)
