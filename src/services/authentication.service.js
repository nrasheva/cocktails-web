import { axios } from '../axios';

export const login = async (email, password) => {
  const { data } = await axios.post('/auth/login', { email, password });
  return {
    token: data.access_token,
    roles: data.roles,
  };
};

export const register = async (email, password) => {
  return await axios.post('/auth/register', { email, password });
};
