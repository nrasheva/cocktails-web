import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const Ingredients = (props) => {
  const [count, setCount] = useState(1);
  const [activeUnit, setActiveUnit] = useState('ml');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setCount(newValue);
  };

  const handleUnitChange = (unit) => {
    setActiveUnit(unit);
  };

  return (
    <div className='bg-pink-500 p-4'>
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faWineBottle} style={{ color: '#fa4616' }} size='xl' />
        <h2>INGREDIENTS</h2>
      </div>
      <div className='flex py-4 gap-2 items-center'>
        <div>
          <Button type='small' text='-' onClick={() => count > 0 && setCount(count - 1)} />
          <input
            className='w-10 py-1 text-center bg-transparent'
            value={count}
            onChange={(event) => handleInputChange(event)}
          />
          <Button type='small' text='+' onClick={() => setCount(count + 1)} />
        </div>
        <p>Cocktail(s)</p>
      </div>
      <div className='flex bg-yellow-50'>
        <Input
          type='radio'
          name='unit'
          value='cl'
          text='CL'
          onClick={() => handleUnitChange('cl')}
          isActive={activeUnit === 'cl'}
        />
        <Input
          type='radio'
          name='unit'
          value='oz'
          text='OZ'
          onClick={() => handleUnitChange('oz')}
          isActive={activeUnit === 'oz'}
        />
        <Input
          type='radio'
          name='unit'
          value='ml'
          text='ML'
          onClick={() => handleUnitChange('ml')}
          isActive={activeUnit === 'ml'}
        />
      </div>
      <div className='py-8'>
        <ul className='bg-red-200 flex flex-col gap-2 border-t-1px border-navBorder'>
          {props.ingredients.map((ingr) => {
            const ingredientQuantity = ingr[1].split(' ')[0];
            const ingredientUnit = ingr[1].split(' ')[1];

            return (
              <li key={ingr} className=' flex gap-6 py-4 px-8 border-b-1px border-navBorder'>
                <span className=''>
                  {ingredientQuantity * count}{' '}
                  {ingredientUnit === activeUnit ||
                  ingredientUnit === 'unit' ||
                  ingredientUnit === 'scoop(s)' ||
                  ingredientUnit === 'dash(es)' ||
                  ingredientUnit === 'Tbsp(s)'
                    ? ingr[1].split(' ')[1]
                    : activeUnit}
                </span>
                <span className=''>{ingr[0]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
