import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMedia } from 'use-media';

import styles from './Navigation.module.css';
import { Button } from '../Button/Button';

const MENU_ITEMS = ['home', 'cocktails'];

export const Navigation = () => {
  const [visible, setVisible] = useState(false);
  const isDesktop = useMedia({ minWidth: '1200px' });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isDesktop || !visible ? 'visible' : 'hidden';
  }, [visible, isDesktop]);

  const handleNavigation = () => {
    setVisible(!visible);
  };

  const handleLink = (url) => {
    if (`${url}` !== location.pathname) {
      navigate(`/${url === 'home' ? '' : url}`);

      handleNavigation();
    }
  };

  return (
    <nav className='lg:px-36 flex px-10 items-center justify-between border-b-2 border-navBorder z-5 inset-0'>
      <span
        className={`lg:px-10 py-3 cursor-pointer text-orangada uppercase font-staatliches font-bold tracking-tightest text-3xl ${styles['text-shadow-custom']}`}
        onClick={() => handleNavigation('/')}>
        Cocktailandia
      </span>
      <div className='lg:grow w-10 h-14 md:items-center'>
        <div
          className={` ${isDesktop || visible ? 'flex justify-center align-center' : 'hidden'} ${
            !isDesktop && visible && 'flex flex-col absolute inset-y-14 bottom-0 inset-0 bg-orangada'
          }`}>
          {MENU_ITEMS.map((menuItem) => {
            return (
              <span
                className='lg:bg-white lg:text-black md:px-10 py-4 cursor-pointer lg:hover:bg-border text-white capitalize'
                key={menuItem}
                onClick={() => handleLink(menuItem)}>
                {menuItem}
              </span>
            );
          })}
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
