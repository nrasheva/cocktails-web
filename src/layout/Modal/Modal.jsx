import { useEffect, useRef, useState } from 'react';

import styles from './Modal.module.css';
import { Button } from '../../components/Button/Button';

export const Modal = () => {
  const [show, setShow] = useState(() => {
    const storedShow = localStorage.getItem('modalShow');
    return storedShow ? JSON.parse(storedShow) : true;
  });
  const [year, setYear] = useState('');
  const [underaged, setUnderaged] = useState(true);

  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }

    localStorage.setItem('modalShow', JSON.stringify(show));
  }, [show]);

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
              className={`bg-transparent lg:text-5xl text-2xl text-center text-blueberry ${styles.year}`}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              onKeyDown={handleInputKeyPress}
            />
          </div>
        ) : (
          <div className='lg:bg-blueberryLight flex flex-col gap-3 justify-center items-center p-8 lg:text-white text-blueberry'>
            <p>SORRY YOU ARE NOT OLD ENOUGH TO ACCESS TO THE WEBSITE</p>
            <Button text='I MADE A MISTAKE' type='regular' onClick={() => setUnderaged(true)} />
          </div>
        )}
      </dialog>
    </>
  );
};
