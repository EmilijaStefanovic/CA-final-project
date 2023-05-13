import axios from 'axios';

const HOST = 'http://localhost:4000/clients';

export async function createNewClient({
  fullName,
  email,
  visitDate,
  visitTime,
  userId,
}) {
  try {
    const res = await axios.post(HOST + '/client', {
      email,
      fullName,
      visitDate,
      visitTime,
      userId,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllClients(userId) {
  try {
    const clients = await axios.get(HOST + `/client/${userId}`);
    return clients.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteClientById(clientId) {
  try {
    const res = await axios.delete(HOST + `/client/${clientId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
}
