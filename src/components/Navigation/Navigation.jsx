import { useEffect, useState } from 'react';
import { useMedia } from 'use-media';

import styles from './Navigation.module.css';
import { Button } from '../Button/Button';

export const Navigation = () => {
  const [visible, setVisible] = useState(false);
  const isDesktop = useMedia({ minWidth: '1200px' });

  useEffect(() => {
    document.body.style.overflow = isDesktop || !visible ? 'visible' : 'hidden';
  }, [visible, isDesktop]);

  const handleHamburgerMenuClick = () => {
    setVisible(!visible);
  };

  return (
    <nav className='lg:px-36 flex px-10 items-center justify-between border-b-2 border-border z-5 inset-0'>
      <span
        className={`lg:px-10 py-3 cursor-pointer text-orangada uppercase font-staatliches font-bold tracking-wide text-xl ${styles['text-shadow-custom']}`}>
        Cocktailandia
      </span>
      <div className='lg:grow w-10 h-14 md:items-center'>
        <div
          className={` ${isDesktop || visible ? 'flex justify-center align-center' : 'hidden'} ${
            !isDesktop && visible && 'flex flex-col absolute inset-y-14 bottom-0 inset-0 bg-orangada'
          }`}>
          <span className='lg:bg-white lg:text-black md:px-10 py-4 cursor-pointer lg:hover:bg-border text-white'>
            <p>Home</p>
          </span>
          <span className='lg:bg-white lg:text-black md:px-10 py-4 cursor-pointer lg:hover:bg-border text-white'>
            <p>Cocktails</p>
          </span>
        </div>
        {!isDesktop && <Button type={`${visible ? 'hide' : 'hamburger'}`} onClick={handleHamburgerMenuClick} />}
      </div>
    </nav>
  );
};
