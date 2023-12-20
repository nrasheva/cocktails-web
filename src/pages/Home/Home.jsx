import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button/Button';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-maxScreen bg-blue-400'>
      <div className='bg-home bg-center bg-cover lg:h-customHeight h-96 flex flex-col gap-5 items-center justify-center'>
        <h1 className='text-white bg-blueberryLight lg:text-5xl text-2xl font-oswald tracking-wide'>
          Your perfect cocktails at home
        </h1>
        <Button type='regular' text="Let's mix" onClick={() => navigate('/cocktails')} />
      </div>
    </div>
  );
};
