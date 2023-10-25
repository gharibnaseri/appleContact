import * as React from 'react';
import * as ReactDom from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import Root, { action } from './routes/root';
// import {Contacts} from './contacts'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
ErrorPage
import Contact , {loader as contactLoader} from './routes/contact';
import { loader as rootLoader , action as rootAction } from "./routes/root";
import EditContact,{ action as editAction} from './routes/edit';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
              },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}></RouterProvider>
  
)