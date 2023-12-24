import { faCartShopping, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Toolbox = () => {
  return (
    <div className='flex justify-center bg-blueberry'>
      <div className='flex text-white gap-5'>
        <span className='flex items-center gap-2 lg:px-36 sm:px-4 py-4 cursor-pointer hover:bg-darkBerry'>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Find us</p>
        </span>
        <span className='flex items-center gap-2 lg:px-36 sm:px-4 py-4 cursor-pointer hover:bg-darkBerry'>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Sign up</p>
        </span>
        <span className='flex items-center gap-2 lg:px-36 sm:px-4 py-4 cursor-pointer hover:bg-darkBerry'>
          <FontAwesomeIcon icon={faCartShopping} />
          <p>Shop</p>
        </span>
      </div>
    </div>
  );
};
