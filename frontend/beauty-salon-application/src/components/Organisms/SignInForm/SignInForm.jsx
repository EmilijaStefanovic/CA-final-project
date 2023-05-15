import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInRequest } from '../../../api-calls/auth';

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
      <label htmlFor='Email'>Email</label>
      <input
        id='Email'
        type='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='Password'>Password</label>
      <input
        id='Password'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>SignIn</button>
      <p>
        Not a user yet? <Link to='/auth/signup'>Register</Link>
      </p>
      <h3 style={{ display: isWrongCredential ? 'block' : 'none' }}>
        Wrong password or email
      </h3>
    </form>
  );
}
