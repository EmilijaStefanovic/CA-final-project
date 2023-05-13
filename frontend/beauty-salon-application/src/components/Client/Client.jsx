import React from 'react';
import Button from '../ClientRegistrationForm/atoms/Button/Button';
import { deleteClientById } from '../../api-calls/clients/index';

export default function ClientList({
  fullName,
  email,
  date,
  time,
  id,
  setClients,
}) {
  function deleteButtonHandler() {
    console.log(id);
    deleteClientById(id).then((res) => {
      setClients((prev) => {
        return prev.filter((client) => client._id !== id);
      });
    });
  }
  return (
    <div>
      <h3>
        Full Name <p>{fullName}</p>
      </h3>
      <h3>
        Email <p>{email}</p>
      </h3>
      <h2>
        Visit Date <p>{date}</p>
      </h2>
      <h2>
        Visit Time <p>{time}</p>
      </h2>
      <Button type={'button'} text={'Cancel'} onClick={deleteButtonHandler} />
    </div>
  );
}
