import React, { useState } from 'react';
import style from './ClientRegistrationForm.module.css';
import { createNewClient } from '../../api-calls/clients';

export default function ClientRegistrationForm({ setClients }) {
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

  async function submitHandler(event) {
    event.preventDefault();
    const newClient = await createNewClient({
      fullName: clientFullName,
      email: clientEmail,
      visitDate: clientVisitDate,
      visitTime: clientVisitTime,
      userId: localStorage.getItem('loggedInUser'),
    });

    if (newClient) {
      setClients((prev) => {
        const clone = JSON.parse(JSON.stringify(prev));
        clone.push(newClient);
        return clone;
      });
    }

    setClientEmail('');
    setClientFullName('');
    setClientVisitDate('');
    setClientVisitTime('');
  }

  return (
    <div className={style.formWrapper}>
      <form className={style.form} onSubmit={submitHandler}>
        <label htmlFor='name'>Full Name</label>
        <input
          type='text'
          id='name'
          value={clientFullName}
          onChange={(e) => setClientFullName(e.target.value)}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
        />
        <label htmlFor='date'>Visit Date</label>
        <input
          type='date'
          id='date'
          value={
            clientVisitDate
              ? new Date(clientVisitDate).toISOString().split('T')[0]
              : ''
          }
          onChange={(e) => setClientVisitDate(e.target.value)}
        />
        <label htmlFor='time'>Visit Time</label>
        <input
          type='time'
          id='time'
          onChange={(e) => setClientVisitTime(e.target.value)}
        />

        <button type='submit'>Add</button>
      </form>
    </div>
  );
}
