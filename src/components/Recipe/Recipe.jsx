import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Recipe = (props) => {
  return (
    <div className='bg-purple-500 p-8'>
      <div className='flex items-center gap-1'>
        <FontAwesomeIcon icon={faMartiniGlassCitrus} style={{ color: '#fa4616' }} size='xl' />
        <h2 className='text-blueberry font-semibold'>HOW TO MAKE</h2>
      </div>
      <ul className='xl:flex gap-4 py-8'>
        {props.recipe.map((step) => {
          const [index, action] = step.split(':');

          return (
            <li key={step} className='flex flex-col items-start'>
              <p className='text-orangada font-semibold'>{'Step ' + index}</p>
              <p className='text-blueberry'>{action + '.'}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
