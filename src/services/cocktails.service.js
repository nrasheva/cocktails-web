import { axios } from '../axios';

export const getCocktails = async () => {
  const { data } = await axios.get(`/cocktails`);
  return { cocktails: data };
};

export const getCocktail = async (cocktailId) => {
  const { data } = await axios.get(`/cocktails/details?id=${cocktailId}`);
  return { cocktail: data };
};
