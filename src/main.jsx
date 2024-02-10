import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

import App from './App';
import './index.css';
import { Cocktails } from './pages/Cocktails/Cocktails';
import { Create } from './pages/Create/Create';
import { Details } from './pages/Details/Details';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { setIsAuthenticated } from './redux/reducers/authentication';
import { setIsAuthorized } from './redux/reducers/authorization';
import { store } from './redux/store';

const guard = async (path) => {
  const { validateToken } = await import('./tools');

  const validToken = validateToken();
  const isAuthorized = localStorage.getItem('role') === 'admin';

  store.dispatch(setIsAuthenticated(validToken));
  store.dispatch(setIsAuthorized(isAuthorized));

  if (validToken && (path === 'login' || path === 'register')) {
    return redirect('/cocktails');
  }

  return null;
};

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
        loader: () => guard('register'),
        path: '/register',
      },
      {
        element: <Login />,
        loader: () => guard('login'),
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
