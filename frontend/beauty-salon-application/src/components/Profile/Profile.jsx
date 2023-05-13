import React from 'react';
import Button from '../ClientRegistrationForm/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  function signOutHandler() {
    localStorage.removeItem('loggedInUser');
    navigate('/auth/signin');
  }
  return (
    <div>
      <Button type={'Submit'} text={'Sign Out'} onClick={signOutHandler} />
    </div>
  );
}
