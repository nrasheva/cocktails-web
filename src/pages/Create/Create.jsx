import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Intro } from '../../components/Intro/Intro';
import { createCocktail } from '../../services/cocktails.service';
import { validateCocktail } from '../../tools';

export const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    img: '',
    ingredients: [],
    recipe: [],
    taste: '',
    time: '',
    level: '',
  });
  const [error, setError] = useState('');
  const [warning, setWarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const issues = validateCocktail(
      formData.name,
      formData.description,
      formData.img,
      formData.ingredients,
      formData.recipe,
      formData.taste,
      formData.time,
      formData.level,
    );

    // If there is an API error, clear the error when the user starts correcting the credentials
    setError('');
    setWarning(issues);
  }, [
    formData.description,
    formData.img,
    formData.ingredients,
    formData.level,
    formData.name,
    formData.recipe,
    formData.taste,
    formData.time,
  ]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (index, e) => {
    const newIngredients = formData.ingredients.map((ingredient, i) => {
      if (index === i) {
        return [e.target.value, ingredient[1]];
      } else {
        return ingredient;
      }
    });
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const handleQuantityChange = (index, e) => {
    const newIngredients = formData.ingredients.map((ingredient, i) => {
      if (index === i) {
        return [ingredient[0], e.target.value];
      } else {
        return ingredient;
      }
    });
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const handleRecipeChange = (index, e) => {
    const newRecipe = formData.recipe.map((step, i) => {
      if (index === i) {
        return e.target.value;
      } else {
        return step;
      }
    });
    setFormData({ ...formData, recipe: newRecipe });
  };

  const addIngredientField = (e) => {
    e.preventDefault();
    setFormData({ ...formData, ingredients: [...formData.ingredients, ['', '']] });
  };

  const removeIngredientField = (indexToRemove) => {
    setFormData({
      ...formData,
      ingredients: formData.ingredients.filter((_, index) => index !== indexToRemove),
    });
  };

  const addRecipeField = (e) => {
    e.preventDefault();
    setFormData({ ...formData, recipe: [...formData.recipe, ''] });
  };

  const removeRecipeField = (indexToRemove) => {
    setFormData({
      ...formData,
      recipe: formData.recipe.filter((_, index) => index !== indexToRemove),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setSubmitted(true);

    const validationMessage = validateCocktail(
      formData.name,
      formData.description,
      formData.img,
      formData.ingredients,
      formData.recipe,
      formData.taste,
      formData.time,
      formData.level,
    );

    setWarning(validationMessage); // Store the validation message in warning state
    setError('');

    if (!validationMessage) {
      try {
        await createCocktail(formData);
        navigate('/cocktails');
      } catch (error) {
        console.error('Failed to create cocktail:', error);
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Intro text='Create new cocktail' />
      <div className='bg-create bg-center bg-cover flex justify-center'>
        <form
          onSubmit={handleSubmit}
          className='bg-lightOrangada rounded flex flex-col items-center gap-3 xl:w-1/3 w-full xl:my-8 p-8'>
          <div className='flex flex-col gap-3 w-full xl:px-8 px-7'>
            <Input type='text' name='name' value={formData.name} onChange={handleInputChange} placeholder='Name' />
            <textarea
              name='description'
              value={formData.description}
              onChange={handleInputChange}
              placeholder='Description'
              className='w-full py-2 px-4 max-h-24'
            />
            <Input type='text' name='img' value={formData.img} onChange={handleInputChange} placeholder='Image URL' />
          </div>
          <div className='flex flex-col items-center gap-3 xl:w-full lg:px-8 px-7'>
            <h3 className='text-darkBerry font-semibold'>Ingredients</h3>
            {formData.ingredients.map((ingredient, index) => (
              <div key={index} className='flex items-center gap-2 w-full'>
                <Input
                  type='text'
                  value={ingredient[0]}
                  onChange={(e) => handleIngredientChange(index, e)}
                  placeholder='Ingredient'
                />
                <Input
                  type='text'
                  value={ingredient[1]}
                  onChange={(e) => handleQuantityChange(index, e)}
                  placeholder='Quantity'
                />
                <p className='cursor-pointer' onClick={() => removeIngredientField(index)}>
                  <FontAwesomeIcon icon={faXmark} />
                </p>
              </div>
            ))}
            <Button type='button' text=' Add Ingredient' onClick={addIngredientField} />
          </div>
          <div className='flex flex-col items-center gap-3 w-full xl:px-8 px-7'>
            <h3 className='text-darkBerry font-semibold'>Recipe</h3>
            {formData.recipe.map((step, index) => (
              <div key={index} className='flex items-center gap-2 w-full'>
                <textarea
                  value={step}
                  onChange={(e) => handleRecipeChange(index, e)}
                  placeholder={`Step ${index + 1}`}
                  className='w-full py-2 px-4 max-h-24'
                />
                <p className='cursor-pointer' onClick={() => removeRecipeField(index)}>
                  <FontAwesomeIcon icon={faXmark} />
                </p>
              </div>
            ))}
            <Button type='button' text='Add Step' onClick={addRecipeField} />
          </div>
          <div className='flex flex-col gap-3 w-full xl:px-8 px-7'>
            <Input type='text' name='taste' value={formData.taste} onChange={handleInputChange} placeholder='Taste' />
            <Input
              type='text'
              name='time'
              value={formData.time}
              onChange={handleInputChange}
              placeholder='Time to make'
            />
            <Input
              type='text'
              name='level'
              value={formData.level}
              onChange={handleInputChange}
              placeholder='Skill Level'
            />
          </div>
          {submitted && Boolean(warning.length) && <p className='text-blueberry font-bold'>{warning}</p>}
          {Boolean(error.length) && <p>{error}</p>}
          <Button type='submit' text='Submit' />
        </form>
      </div>
    </>
  );
};
