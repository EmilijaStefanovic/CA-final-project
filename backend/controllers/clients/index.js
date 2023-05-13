import ClientModel from '../../db/ClientModel.js';
import mongoose from 'mongoose';

export async function createNewClient(req, res) {
  try {
    console.log(req.body);
    const { email, fullName, visitDate, visitTime, userId } = req.body;

    if (userId && email && fullName && visitDate) {
      const newClient = {
        email,
        fullName,
        visitDate,
        visitTime,
        userId: new mongoose.Types.ObjectId(userId),
      };
      const client = await ClientModel.create(newClient);
      res.json(client);
    } else {
      res.status(400).json({
        message: `Invalid user ID or body: userId - ${userId} body - ${email}, ${fullName}, ${visitDate}, ${visitTime}`,
      });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export async function deleteClientById(req, res) {
  try {
    const { id } = req.params;
    const resp = await ClientModel.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// export async function updateClientById(req, res){
//   const { id } = req.params;
//   const {email, fullName, visitDate, visitTime} = req.body;

// }

export async function getAllClientsById(req, res) {
  try {
    const { id } = req.params;
    const clients = await ClientModel.find({ userId: id }, { __v: false });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
