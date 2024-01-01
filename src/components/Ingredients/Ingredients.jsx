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

  return (
    <div className='bg-pink-500'>
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
      <div className='flex'>
        <Input
          type='radio'
          name='unit'
          value='cl'
          text='CL'
          onClick={() => {
            setActiveUnit('cl');
          }}
          isActive={activeUnit === 'cl'}
        />
        <Input
          type='radio'
          name='unit'
          value='oz'
          text='OZ'
          onClick={() => {
            setActiveUnit('oz');
          }}
          isActive={activeUnit === 'oz'}
        />
        <Input
          type='radio'
          name='unit'
          value='ml'
          text='ML'
          onClick={() => {
            setActiveUnit('ml');
          }}
          isActive={activeUnit === 'ml'}
        />
      </div>
    </div>
  );
};
