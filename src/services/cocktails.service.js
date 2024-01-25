import { axios } from '../axios';

export const createCocktail = async (cocktail) => {
  const { data } = await axios.post(`/cocktails/create`, cocktail);
  return { cocktail: data };
};

export const getCocktails = async () => {
  const { data } = await axios.get(`/cocktails`);
  return { cocktails: data };
};

export const getCocktail = async (cocktailId) => {
  const { data } = await axios.get(`/cocktails/details?id=${cocktailId}`);
  return { cocktail: data };
};
