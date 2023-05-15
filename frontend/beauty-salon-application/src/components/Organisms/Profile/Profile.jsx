import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Profile.module.css';

export default function Profile() {
  const navigate = useNavigate();

  function signOutHandler() {
    localStorage.removeItem('loggedInUser');
    navigate('/auth/signin');
  }
  return (
    <div>
      <button className={style.button} type={'Submit'} onClick={signOutHandler}>
        Sign Out
      </button>
    </div>
  );
}
