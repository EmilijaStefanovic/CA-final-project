import React, { useState } from 'react';
import Input from './atoms/Input/Input';
import Button from './atoms/Button/Button';
import style from './ClientRegistrationForm.module.css';
import axios from 'axios';

const HOST = 'http://localhost:4000/clients';

export default function ClientRegistrationForm() {
  // const [currentTime, setCurrentTime] = useState(getCurrentTime());
  // const [currentDate, setCurrentDate] = useState(getCurrentDate());

  const [clientFullName, setClientFullName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientVisitDate, setClientVisitDate] = useState('');
  const [clientVisitTime, setClientVisitTime] = useState('');

  // function getCurrentTime() {
  //   const now = new Date();
  //   const hours = now.getHours().toString().padStart(2, '0');
  //   const minutes = now.getMinutes().toString().padStart(2, '0');
  //   return `${hours}:${minutes}`;
  // }

  // function getCurrentDate() {
  //   const now = new Date();
  //   const year = now.getFullYear();
  //   const month = (now.getMonth() + 1).toString().padStart(2, '0');
  //   const day = now.getDate().toString().padStart(2, '0');
  //   return `${year}-${month}-${day}`;
  // }
  function name(e) {
    e.preventDefault();
    console.log(localStorage.getItem('loggedInUser'));
  }
  async function submitHandler(event) {
    event.preventDefault();
    try {
      const res = await axios.post(HOST + '/client', {
        clientEmail,
        clientFullName,
        clientVisitDate,
        clientVisitTime,
        userId: localStorage.getItem('loggedInUser'),
      });

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }

    setClientFullName('');
    setClientEmail('');
  }

  return (
    <div className={style.formWrapper}>
      <form className={style.form} onSubmit={submitHandler}>
        <Input
          type={'text'}
          id={'name'}
          label={'Full Name'}
          value={clientFullName}
          onChange={(e) => setClientFullName(e.target.value)}
        />
        <Input
          type={'email'}
          id={'email'}
          label={'Email'}
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
        />
        <Input
          type={'date'}
          id={'date'}
          label={'Visit Date'}
          value={
            clientVisitDate
              ? new Date(clientVisitDate).toISOString().split('T')[0]
              : ''
          }
          onChange={(e) => setClientVisitDate(e.target.value)}
        />
        <Input
          type={'time'}
          id={'time'}
          label={'Visit Time'}
          value={clientVisitTime}
          onChange={(e) => setClientVisitTime(e.target.value)}
        />

        <Button text={'Add'} type={'submit'} />
      </form>
    </div>
  );
}
