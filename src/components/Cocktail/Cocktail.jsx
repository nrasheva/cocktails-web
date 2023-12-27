import { faFaceGrinTongueSquint } from '@fortawesome/free-regular-svg-icons';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Cocktail = (props) => {
  return (
    <div className='cursor-pointer'>
      <div className='border-b-1px border-navBorder'>
        <img className='w-64 h-64' src={props.img} alt={props.name} />
        <p className='font-oswald p-2 flex items-start'>{props.name}</p>
      </div>
      <div className='flex items-start text-xs p-2 gap-6'>
        <span className='flex items-center gap-1'>
          <FontAwesomeIcon icon={faFaceGrinTongueSquint} />
          <p>{props.taste}</p>
        </span>
        <span className='flex items-center gap-1'>
          <FontAwesomeIcon icon={faRankingStar} />
          <p>{props.level}</p>
        </span>
      </div>
    </div>
  );
};
