import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import About from './components/About';
import ICheckout from './components/ICheckout';
import ErrorPage from './error-page';
import './index.css';
import Success from './components/Success';
import Failure from './components/Failure';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/ichkout",
    element: <ICheckout />,
  },
  {
    path: '/success',
    element: (
        <Success/>
    )
  },
  {
      path: '/failure',
      element: (
          <Failure/>
      )
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
