// Validates Create cocktail
export const validateCocktail = (name, description, img, ingredients, recipe, taste, time, level) => {
  const validImg = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/.test(img.trim());
  // const validQuantity = /^\d+\s?(unit|scoop(s)?|dash(es)?|Tbsp(s)?|ml|cl|oz)$/.test(ingredients[1]);

  if (![name, description, img, taste, time, level].every((field) => field.trim() !== '')) {
    return 'You need to fill all fields';
  }

  if (ingredients.length === 0 || recipe.length === 0) {
    return 'You need to fill all fields';
  }

  const allIngredientsValid = ingredients.every((ingredient) => {
    return /^\d+\s?(unit|scoop(s)?|dash(es)?|Tbsp(s)?|ml|cl|oz)$/.test(ingredient[1].trim());
  });

  if (!validImg) {
    console.log('Wrong Img');
    return 'Enter a valid URL address';
  }

  if (!allIngredientsValid) {
    return 'You need to enter quantity + measure unit choosing from one of the following: unit, scoop(s), dash(es), Tbsp(s), ml, oz, cl';
  }

  return '';
};
