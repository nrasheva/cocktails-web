import { axios } from '../axios';

export const getCocktails = async () => {
  const { data } = await axios.get(`/cocktails`);
  return { cocktails: data };
};
