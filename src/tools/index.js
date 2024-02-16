import { jwtDecode } from 'jwt-decode';

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

// Validates authentication credentials
export const validateCredentials = (email, password) => {
  const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validPassword = password.length >= 8;

  if (!validEmail && !validPassword) {
    return 'Enter a valid email and password of at least 8 characters';
  }

  if (!validEmail) {
    return 'Enter a valid email';
  }

  if (!validPassword) {
    return 'Your password must have at least 8 characters';
  }

  return '';
};

export const decodeToken = () => {
  const access_token = localStorage.getItem('token');

  if (!access_token) return { decoded: null, isAdmin: false };

  const decoded = jwtDecode(access_token);
  const isAdmin = decoded.roles && decoded.roles.includes('admin');

  return { decoded, isAdmin };
};

export const validateToken = () => {
  const decodedToken = decodeToken();

  if (decodedToken) {
    const now = Math.floor(new Date().getTime() / 1000.0);
    return decodedToken.exp > now;
  } else {
    return false;
  }
};
