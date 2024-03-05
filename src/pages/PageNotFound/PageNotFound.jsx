import { faShopSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Intro } from '../../components/Intro/Intro';

export const PageNotFound = () => {
  return (
    <>
      <Intro text='404' description='The bartender went to the woo' />
      <div className='bg-error bg-bottom h-96 flex justify-center items-center'>
        <div className='bg-lightOrangada rounded flex flex-col items-center gap-12 md:w-1/3 w-full md:my-8 px-8 md:py-12 py-40'>
          <FontAwesomeIcon
            icon={faShopSlash}
            style={{ color: 'white' }}
            className='fa-8x border-4 border-white rounded-full p-8'
          />
        </div>
      </div>
    </>
  );
};
