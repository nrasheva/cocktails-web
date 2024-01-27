import { useState } from 'react';

import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Intro } from '../../components/Intro/Intro';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRegister = async () => {
    setSubmitted(true);
  };

  return (
    <>
      <Intro text='Register' />
      <div className='bg-create bg-center bg-cover flex justify-center'>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='bg-lightOrangada rounded flex flex-col items-center gap-3 xl:w-1/3 w-full xl:my-8 p-8'>
          <Input
            type='email'
            autoComplete='on'
            onChange={(value) => setEmail(value)}
            placeholder='Email'
            value={email}
          />
          <Input
            type='password'
            autoComplete='on'
            onChange={(value) => setPassword(value)}
            placeholder='Password'
            value={password}
          />
          <Button type='submit' text='Register' onClick={handleRegister} />
        </form>
      </div>
    </>
  );
};
