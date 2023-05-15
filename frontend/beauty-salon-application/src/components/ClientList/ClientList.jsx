import React, { useEffect } from 'react';
import Client from '../Client/Client';
import { getAllClients } from '../../api-calls/clients';
import style from './ClientList.module.css';

export default function ClientList({ clients, setClients }) {
  useEffect(() => {
    const id = localStorage.getItem('loggedInUser');
    getAllClients(id).then((data) => setClients(data));
  }, [setClients]);

  return (
    <div className={style.wrapper}>
      {clients.map((client) => (
        <Client
          key={client._id}
          fullName={client.fullName}
          email={client.email}
          date={client.visitDate}
          time={client.visitTime}
          id={client._id}
          setClients={setClients}
        />
      ))}
    </div>
  );
}
