import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import './index.css';
import { Cocktails } from './pages/Cocktails/Cocktails';
import { Create } from './pages/Create/Create';
import { Details } from './pages/Details/Details';
import { Home } from './pages/Home/Home';
import { Register } from './pages/Register/Register';

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <Cocktails />,
        path: '/cocktails',
      },
      {
        element: <Details />,
        path: '/details/:cocktailId',
      },
      {
        element: <Create />,
        path: '/cocktails/create',
      },
      {
        element: <Register />,
        path: '/register',
      },
    ],
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
