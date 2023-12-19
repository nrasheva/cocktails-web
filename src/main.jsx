import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import './index.css';
import { Cocktails } from './pages/Cocktails/Cocktails';
import { Home } from './pages/Home/Home';

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
    ],
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
