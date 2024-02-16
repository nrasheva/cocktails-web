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
    const controller = new AbortController();

    const validToken = validateToken();

    if (!validToken) {
      controller.abort();
      store.dispatch(setIsAuthenticated(false));
      store.dispatch(setIsAuthorized(false));
      router.navigate('/login');
    }

    const token = localStorage.getItem('token');

    config.headers['Authorization'] = `Bearer ${token}`;
    return {
      ...config,
      signal: controller.signal,
    };
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { axios, instance };
