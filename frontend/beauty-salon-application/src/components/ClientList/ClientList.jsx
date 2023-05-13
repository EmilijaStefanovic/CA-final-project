import React, { useState, useEffect } from 'react';
import Client from '../Client/Client';
import { getAllClients } from '../../api-calls/clients';
import { useNavigate } from 'react-router-dom';

export default function ClientList() {
  const [clients, setClients] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
      navigate('/auth/signin');
    }
  }, []);

  useEffect(() => {
    const id = localStorage.getItem('loggedInUser');
    getAllClients(id).then((data) => setClients(data));
  }, []);

  return (
    <div>
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
