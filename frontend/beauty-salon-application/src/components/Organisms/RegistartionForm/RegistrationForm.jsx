import React, { useState } from 'react';
import { signUpRequest } from '../../../api-calls/auth';
import { Link, useNavigate } from 'react-router-dom';

export default function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(null);

  const navigate = useNavigate();

  async function submitHandler(event) {
    event.preventDefault();
    const body = {
      firstName,
      lastName,
      email,
      password,
    };
    const signUpResponse = await signUpRequest(body);

    if (signUpResponse) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');

      navigate('/auth/signin');
    }

    setIsRegistrationSuccessful(signUpResponse);
  }

  function registrationUpdateHeading() {
    if (isRegistrationSuccessful === false) {
      return <h1>Registration Failed</h1>;
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='firstName'>First Name</label>
      <input
        id='firstName'
        type='text'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor='lastName'>Last Name</label>
      <input
        id='lastName'
        type='text'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type={'submit'}>SignUp</button>
      <p>
        If you have an account <Link to='/auth/signin'>SignIn</Link>
      </p>

      {registrationUpdateHeading()}
    </form>
  );
}
