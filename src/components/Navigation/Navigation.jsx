import { faCircleUser, faHouse, faMartiniGlassCitrus, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMedia } from 'use-media';

import styles from './Navigation.module.css';
import { setIsAuthenticated } from '../../redux/reducers/authentication';
import { Button } from '../Button/Button';
import { Toolbox } from '../Footer-toolbox/Footer-toolbox';

export const Navigation = () => {
  const [visible, setVisible] = useState(false);
  const isDesktop = useMedia({ minWidth: '1200px' });

  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);

  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isDesktop || !visible ? 'visible' : 'hidden';
  }, [visible, isDesktop]);

  const handleNavigation = () => {
    setVisible(!visible);
  };

  const hideNavigation = () => {
    setVisible(false);
  };

  const handleLink = (url) => {
    if (`${url}` !== location.pathname) {
      navigate(`/${url === 'home' ? '' : url}`);

      handleNavigation();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log('Logout');

    dispatch(setIsAuthenticated(false));

    navigate('/login');
  };

  return (
    <nav className='bg-white fixed w-full top-0 left-0 h-navigationHeight lg:px-36 flex justify-around border-b-2 border-navBorder z-100 inset-0'>
      <span
        className={`lg:px-20 py-3 cursor-pointer text-orangada uppercase font-staatliches font-bold tracking-wider text-3xl ${styles['text-shadow-custom']}`}
        onClick={() => navigate('/')}>
        Cocktailandia
      </span>
      <div className='lg:grow w-10 h-14 md:items-center'>
        <div
          className={` ${isDesktop || visible ? 'flex justify-center align-center' : 'hidden'} ${
            !isDesktop && visible && 'flex flex-col absolute inset-y-14 inset-0 h-screen w-screen bg-orangada'
          }`}>
          <div className='flex xl:flex-row flex-col flex-1 justify-center'>
            <span
              className='xl:bg-white xl:text-blueberry xl:px-10 py-4 cursor-pointer xl:hover:bg-border text-white capitalize flex items-center justify-center gap-2'
              onClick={() => handleLink('')}>
              <FontAwesomeIcon icon={faHouse} />
              <p>Home</p>
            </span>
            <span
              className='xl:bg-white xl:text-blueberry xl:px-10 py-4 cursor-pointer xl:hover:bg-border text-white capitalize flex items-center justify-center gap-2'
              onClick={() => handleLink('cocktails')}>
              <FontAwesomeIcon icon={faMartiniGlassCitrus} />
              <p>Cocktails</p>
            </span>
          </div>
          {!isAuthenticated && isDesktop ? (
            <span
              className='xl:text-blueberry xl:flex items-center px-6 rounded-full cursor-pointer xl:hover:bg-border text-white'
              onClick={() => handleLink('login')}>
              <FontAwesomeIcon icon={faCircleUser} />
            </span>
          ) : (
            <span
              className='xl:text-blueberry xl:flex items-center px-6 rounded-full cursor-pointer xl:hover:bg-border text-white'
              onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </span>
          )}

          {!isDesktop && visible && (
            <div className='fixed bottom-0 inset-x-0 bg-orangada'>
              <Toolbox onHideNavigation={hideNavigation} />
            </div>
          )}
        </div>
        {!isDesktop && (
          <Button
            type={`${visible ? 'hide' : 'hamburger'}`}
            className={visible ? '' : 'hidden'}
            onClick={handleNavigation}
          />
        )}
      </div>
    </nav>
  );
};
