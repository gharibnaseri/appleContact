import * as React from 'react';
import * as ReactDom from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import Root from './routes/root';
// import {Contacts} from './contacts'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
ErrorPage


const router = createBrowserRouter([
  {path: "/" , element:<Root />, errorElement:<ErrorPage />}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}></RouterProvider>
  
)
