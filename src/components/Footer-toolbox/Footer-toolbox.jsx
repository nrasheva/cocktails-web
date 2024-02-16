import { faCartShopping, faCircleUser, faLocationDot, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setIsAuthenticated } from '../../redux/reducers/authentication';
import { setIsAuthorized } from '../../redux/reducers/authorization';

export const Toolbox = ({ onHideNavigation, onLogout }) => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');

    dispatch(setIsAuthenticated(false));
    dispatch(setIsAuthorized(false));

    navigate('/login');
  };

  return (
    <div className='flex justify-center bg-blueberry'>
      <div className='flex text-white gap-5'>
        <span className='flex items-center gap-2 lg:px-36 sm:px-4 py-4 cursor-pointer hover:bg-darkBerry'>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Find us</p>
        </span>
        {!isAuthenticated ? (
          <span
            className='flex items-center gap-2 lg:px-36 sm:px-4 py-4 cursor-pointer hover:bg-darkBerry'
            onClick={() => {
              navigate('/register');
              if (onHideNavigation) onHideNavigation();
            }}>
            <FontAwesomeIcon icon={faCircleUser} />
            <p>Sign up</p>
          </span>
        ) : (
          <span
            className='flex items-center gap-2 lg:px-36 sm:px-4 py-4 cursor-pointer hover:bg-darkBerry'
            onClick={() => {
              console.log('Logout clicked');
              if (onHideNavigation) onHideNavigation();
              handleLogout();
            }}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <p>Logout</p>
          </span>
        )}
        <span className='flex items-center gap-2 lg:px-36 sm:px-4 py-4 cursor-pointer hover:bg-darkBerry'>
          <FontAwesomeIcon icon={faCartShopping} />
          <p>Shop</p>
        </span>
      </div>
    </div>
  );
};
