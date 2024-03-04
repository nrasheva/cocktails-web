import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';

import App from './App';
import './index.css';
import { Cocktails } from './pages/Cocktails/Cocktails';
import { Create } from './pages/Create/Create';
import { Details } from './pages/Details/Details';
import { Edit } from './pages/Edit/Edit';
import { Home } from './pages/Home/Home';
import { Location } from './pages/Location/Location';
import { Login } from './pages/Login/Login';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { Register } from './pages/Register/Register';
import { setIsAuthenticated } from './redux/reducers/authentication';
import { setIsAuthorized } from './redux/reducers/authorization';
import { store } from './redux/store';
import { decodeToken, validateToken } from './tools';

const guard = async (path) => {
  const validToken = validateToken();

  const { isAdmin } = decodeToken();

  store.dispatch(setIsAuthenticated(validToken));
  store.dispatch(setIsAuthorized(isAdmin));

  if (validToken && (path === 'login' || path === 'register')) {
    return redirect('/cocktails');
  }

  if (!isAdmin && path === 'cocktails/create') {
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
        element: <Edit />,
        path: '/details/:cocktailId/edit',
      },
      {
        element: <Create />,
        loader: () => guard('cocktails/create'),
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
      {
        element: <Location />,
        path: '/location',
      },
      {
        element: <PageNotFound />,
        path: '*',
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
