import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../ClientRegistrationForm/atoms/Input/Input';
import Button from '../ClientRegistrationForm/atoms/Button/Button';
import { signInRequest } from '../../api-calls/auth';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isWrongCredential, setIsWrongCredential] = useState('');

  const navigate = useNavigate();

  async function submitHandler(event) {
    event.preventDefault();
    const userId = await signInRequest({ email, password });
    if (userId) {
      localStorage.setItem('loggedInUser', userId);
      navigate('/profile');
    } else {
      setIsWrongCredential(true);
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <Input
        label={'Email'}
        id={'Email'}
        type={'email'}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label={'Password'}
        id={'Password'}
        type={'password'}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text={'SignIn'} type={'submit'} />
      <p>
        Not a user yet? <Link to='/auth/signup'>Register</Link>
      </p>
      <h3 style={{ display: isWrongCredential ? 'block' : 'none' }}>
        Wrong password or email
      </h3>
    </form>
  );
}
