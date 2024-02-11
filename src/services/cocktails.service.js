import { axios, instance } from '../axios';

export const createCocktail = async (cocktail) => {
  const { data } = await instance.post(`/cocktails`, cocktail);
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

export const editCocktail = async (cocktailId, data) => {
  await instance.put(`/cocktails?id=${cocktailId}`, data);
};
