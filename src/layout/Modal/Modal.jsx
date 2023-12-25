import { useEffect, useRef, useState } from 'react';

import styles from './Modal.module.css';
import { Button } from '../../components/Button/Button';

export const Modal = () => {
  const [show, setShow] = useState(true);
  const [year, setYear] = useState('');
  const [underaged, setUnderaged] = useState(true);

  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [show]);

  const handleInputChange = (e) => {
    setYear(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      const currentYear = new Date().getFullYear();

      if (currentYear - year >= 18) {
        setShow(false);
        setUnderaged(false);
      } else {
        setUnderaged(false);
      }
    }
  };

  const handleModal = () => {
    setUnderaged(true);
  };

  return (
    <>
      <dialog className={styles.dialog} ref={modalRef}>
        {underaged ? (
          <div className='flex flex-col justify-center items-center p-8'>
            <h2
              className={`lg:px-10 py-3 cursor-pointer text-orangada uppercase font-staatliches font-bold tracking-wider text-3xl ${styles['text-shadow-custom']}`}>
              Cocktailandia
            </h2>
            <div className={styles.content}>
              <p className='text-blueberry'>PLEASE ENTER YOUR YEAR OF BIRTH</p>
            </div>
            <input
              placeholder='YYYY'
              type='number'
              id='year'
              name='year'
              className={`bg-transparent text-5xl text-center text-blueberry ${styles.year}`}
              value={year}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyPress}
            />
          </div>
        ) : (
          <div className='bg-blueberryLight flex flex-col gap-3 justify-center items-center p-8 text-white'>
            <p>SORRY YOU ARE NOT OLD ENOUGH TO ACCESS TO THE WEBSITE</p>
            <Button text='I MADE A MISTAKE' type='regular' onClick={handleModal} />
          </div>
        )}
      </dialog>
    </>
  );
};
