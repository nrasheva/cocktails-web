import { faCartShopping, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export const Toolbox = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center bg-blueberry'>
      <div className='flex text-white gap-5'>
        <span className='flex items-center gap-2 lg:px-36 sm:px-4 py-4 cursor-pointer hover:bg-darkBerry'>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Find us</p>
        </span>
        <span
          className='flex items-center gap-2 lg:px-36 sm:px-4 py-4 cursor-pointer hover:bg-darkBerry'
          onClick={() => navigate('/register')}>
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
