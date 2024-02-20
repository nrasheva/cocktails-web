import axios from 'axios';

import { router } from '../main';
import { setIsAuthenticated } from '../redux/reducers/authentication';
import { setIsAuthorized } from '../redux/reducers/authorization';
import { store } from '../redux/store';
import { validateToken } from '../tools';

const baseURL = 'http://localhost:3000';
const timeout = 10000;

axios.defaults.baseURL = baseURL;
axios.defaults.timeout = timeout;

const instance = axios.create({ baseURL, timeout });

instance.interceptors.request.use(
  async (config) => {
    const validToken = validateToken();

    if (!validToken) {
      store.dispatch(setIsAuthenticated(false));
      store.dispatch(setIsAuthorized(false));
      router.navigate('/login');
    }

    const token = localStorage.getItem('token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

export { axios, instance };
