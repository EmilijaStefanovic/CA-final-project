import React from 'react';
import { deleteClientById } from '../../api-calls/clients/index';
import style from './Client.module.css';

export default function ClientList({
  fullName,
  email,
  date,
  time,
  id,
  setClients,
}) {
  function deleteButtonHandler() {
    deleteClientById(id).then((res) => {
      setClients((prev) => {
        return prev.filter((client) => client._id !== id);
      });
    });
  }
  return (
    <div className={style.clientWrapper}>
      <h4>
        Full Name <p>{fullName}</p>
      </h4>
      <h4>
        Email <p>{email}</p>
      </h4>
      <h4>
        Visit Date <p>{date}</p>
      </h4>
      <h4>
        Visit Time <p>{time}</p>
      </h4>
      <button type='button' onClick={deleteButtonHandler}>
        Cancel
      </button>
    </div>
  );
}
