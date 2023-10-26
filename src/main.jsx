import * as React from 'react';
import * as ReactDom from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import Root, { action } from './routes/root';
// import {Contacts} from './contacts'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
ErrorPage
import Contact , {loader as contactLoader, action as contactAction} from './routes/contact';
import { loader as rootLoader , action as rootAction } from "./routes/root";
import EditContact,{ action as editAction} from './routes/edit';
import { action as destroyAction } from './routes/destroy';
import Index from "./routes/index";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          }},
      {index:true , element:<Index />},
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
     },
     {
      path: "contacts/:contactId/destroy",
      action: destroyAction,
      errorElement: <div>oops! there was an error</div>
     }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}></RouterProvider>
  
)
