import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const Ingredients = (props) => {
  const [count, setCount] = useState(1);
  const [activeUnit, setActiveUnit] = useState('ml');

  const convertQuantity = (quantity, unit) => {
    if (unit === 'cl') return quantity * 0.1;
    if (unit === 'oz') return (quantity * 0.033814).toFixed(1);
    return quantity;
  };

  const handleInputChange = useCallback((event) => {
    setCount(event.target.value);
  }, []);

  const handleUnitChange = useCallback((unit) => {
    setActiveUnit(unit);
  }, []);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrementCount = useCallback(() => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  }, []);

  return (
    <div className='p-4'>
      <div className='flex items-center gap-1 text-blueberry'>
        <FontAwesomeIcon icon={faWineBottle} style={{ color: '#fa4616' }} size='xl' />
        <h2>INGREDIENTS</h2>
      </div>
      {/* Count buttons */}
      <div className='flex py-4 gap-2 items-center'>
        <div>
          <Button type='small' text='-' onClick={decrementCount} />
          <input
            className='w-10 py-1 text-center bg-transparent'
            value={count}
            onChange={(event) => handleInputChange(event)}
          />
          <Button type='small' text='+' onClick={incrementCount} />
        </div>
        <p className='text-blueberry'>Cocktail(s)</p>
      </div>
      {/* Units inputs */}
      <div className='flex'>
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
      {/* Ingredients quantity */}
      <div className='py-8'>
        <ul className='flex flex-col gap-2 border-t-1px border-navBorder'>
          {props.ingredients.map((ingr, index) => {
            const [ingredient, quantityUnit] = ingr[1].split(' ');
            const quantity = !['unit', 'scoop(s)', 'dash(es)', 'Tbsp(s)'].includes(quantityUnit)
              ? convertQuantity(parseFloat(ingredient), activeUnit)
              : ingredient;

            const displayUnit =
              quantityUnit === activeUnit || ['unit', 'scoop(s)', 'dash(es)', 'Tbsp(s)'].includes(quantityUnit)
                ? quantityUnit
                : activeUnit;

            return (
              <li
                key={`${ingr[0]}-${index}`}
                className='flex gap-6 py-4 px-8 border-b-1px border-navBorder text-blueberry'>
                <span>
                  {quantity * count} {displayUnit}
                </span>
                <span>{ingr[0]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
