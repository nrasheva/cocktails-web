import { axios } from '../axios';

export const login = async (email, password) => {
  return await axios.post('/auth/login', { email, password });
};

export const register = async (email, password) => {
  return await axios.post('/auth/register', { email, password });
};
