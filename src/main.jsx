import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import './index.css';
import { Cocktails } from './pages/Cocktails/Cocktails';
import { Create } from './pages/Create/Create';
import { Details } from './pages/Details/Details';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { setIsAuthenticated } from './redux/reducers/authentication';
import { store } from './redux/store';

const { validateToken } = await import('./tools');

const validToken = validateToken();

store.dispatch(setIsAuthenticated(validToken));

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
      {
        element: <Login />,
        path: '/login',
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
