import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Intro } from '../../components/Intro/Intro';
import { register } from '../../services/authentication.service';
import { validateCredentials } from '../../tools';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [warning, setWarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const issues = validateCredentials(email, password);

    // If there is an API error, clear the error when the user starts correcting the credentials
    setError('');
    setWarning(issues);
  }, [email, password]);

  const handleRegister = async () => {
    setSubmitted(true);

    if (!warning.length) {
      try {
        await register(email, password);
        navigate('/login');
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Intro text='Register' />
      <div className='bg-register bg-center bg-cover flex flex-1 justify-center lg:py-20'>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='bg-lightOrangada rounded flex flex-col items-center gap-12 md:w-1/3 w-full md:my-8 px-8 md:py-12 py-32'>
          <div className='flex flex-col gap-4 xl:w-4/5 w-full'>
            <Input
              type='email'
              autoComplete='on'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              value={email}
            />
            <Input
              type='password'
              autoComplete='on'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              value={password}
            />
            {submitted && Boolean(warning.length) && <p className='text-blueberry font-bold'>{warning}</p>}
            {Boolean(error.length) && <p className='text-blueberry font-bold'>{error}</p>}
          </div>
          <div className='flex flex-col gap-2'>
            <Button type='submit' text='Register' onClick={handleRegister} />
            <div className='text-white'>
              <p>
                Already have an account?{' '}
                <span className='text-blueberry font-bold cursor-pointer' onClick={() => navigate('/login')}>
                  Login
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
