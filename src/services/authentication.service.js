import { axios } from '../axios';

export const register = async (email, password) => {
  return await axios.post('/auth/register', { email, password });
};
